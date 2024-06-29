import { graphql } from 'react-relay';

export const ALBUMS_QUERY = graphql`
  query albumsQuery($options: PageQueryOptions) {
    albums(options: $options) {
      data {
        id
        ...albumFragment
      }
      meta {
        totalCount
      }
    }
  }
`;
