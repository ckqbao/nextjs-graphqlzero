import {
  Environment,
  FetchFunction,
  GraphQLTaggedNode,
  Network,
  Observable,
  RecordSource,
  Store,
  getRequest,
} from 'relay-runtime';
import { createClient } from 'graphql-ws';
import { v4 as uuidv4 } from 'uuid';
import { GraphQlErrorDetails } from './types/graphqlError';

let graphqlEndpoint = process.env.GRAPHQL_API_URL || '';
let wsEndpoint: string = graphqlEndpoint.replace('http', 'ws');

class GraphQLError extends Error {
  constructor(query: string, message?: string) {
    super(message);
    this.name = `GraphQL Error for ${query}`;
  }
}

// Implement the network layer
const fetchGqlQuery: FetchFunction = async (request, variables) => {
  const result = await fetch(graphqlEndpoint, {
    // next: {
    //   revalidate: 0,
    // },
    // cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  })
    .then((response) => response.json())
    .catch((error: Error) => {
      console.error('Error fetching GraphQL query:', error);
      throw error; // Re-throw the error
    });

  if (result.errors && result.errors.some((e: Error) => e.message === 'Unauthorized')) {
    // Throw different error, so can show Login dialog in the Error boundary
    throw new GraphQLError('Unauthorized', result.errors[0].message);
  }

  return result;
};

// Use for server-side rendering, because Relay requires createContext for some reason
export async function fetchQueryServerSide<T extends { response: object; variables: object }>(
  query: GraphQLTaggedNode,
  variables: T['variables']
) {
  const text = getRequest(query).params.text;
  const response = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: text, variables }),
  })
    .then((res) => {
      if (res.status !== 200) {
        console.error(res, { payload: { graphqlEndpoint, query, variables } });
      }
      return res.json();
    })
    .catch((err: Error) => {
      console.error(err);
      throw new Error(err.message);
    });

  if (response.errors) {
    if (response.errors[0].message === 'Unauthorized') {
      new GraphQLError('Unauthorized', response.errors[0].message);
    }

    if (response.errors.some((e: GraphQlErrorDetails) => e.extensions && e.extensions.status == 404)) {
      // return null if the response is 404
      return null;
    }
    throw new Error(response.errors[0].message as string);
  }

  return response.data as T['response'];
}

/**
 * Wraps a promise to handle its resolution or rejection in a unified way, avoiding try-catch blocks.
 * It returns a tuple where the first element is the resolved value or null, and the second is the error or null.
 * This enables straightforward error handling and cleaner asynchronous code.
 */
export async function withErrorHandler<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
  try {
    const data: T = await promise;
    return [data, null] as const;
  } catch (error) {
    return [null, error as Error] as const;
  }
}

const wsClient = createClient({
  url: wsEndpoint,
  connectionParams() {
    return {
      // unique id to separate subscription between different browser tabs
      windowId: uuidv4(),
    };
  },
});

const subscribe = (operation: any, variables: any): Observable<any> => {
  return Observable.create((sink) => {
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      sink
    );
  });
};

// Create and export the Relay Environment
export function createRelayEnvironment(apiUrl: string) {
  // for client side, process.env not available. So take it from server component
  graphqlEndpoint = apiUrl;
  wsEndpoint = graphqlEndpoint.replace('http', 'ws');

  return new Environment({
    network: Network.create(fetchGqlQuery, subscribe),
    store: new Store(new RecordSource()),
  });
}
