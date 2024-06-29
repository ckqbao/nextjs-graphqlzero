/**
 * @generated SignedSource<<241e60bbeeeb377ad61a0a647fe2d04e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OperatorKindEnum = "GTE" | "LIKE" | "LTE" | "NE" | "%future added value";
export type SortOrderEnum = "ASC" | "DESC" | "%future added value";
export type PageQueryOptions = {
  operators?: ReadonlyArray<OperatorOptions | null | undefined> | null | undefined;
  paginate?: PaginateOptions | null | undefined;
  search?: SearchOptions | null | undefined;
  slice?: SliceOptions | null | undefined;
  sort?: ReadonlyArray<SortOptions | null | undefined> | null | undefined;
};
export type PaginateOptions = {
  limit?: number | null | undefined;
  page?: number | null | undefined;
};
export type SliceOptions = {
  end?: number | null | undefined;
  limit?: number | null | undefined;
  start?: number | null | undefined;
};
export type SortOptions = {
  field?: string | null | undefined;
  order?: SortOrderEnum | null | undefined;
};
export type OperatorOptions = {
  field?: string | null | undefined;
  kind?: OperatorKindEnum | null | undefined;
  value?: string | null | undefined;
};
export type SearchOptions = {
  q?: string | null | undefined;
};
export type albumsQuery$variables = {
  options?: PageQueryOptions | null | undefined;
};
export type albumsQuery$data = {
  readonly albums: {
    readonly data: ReadonlyArray<{
      readonly id: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"albumFragment">;
    } | null | undefined> | null | undefined;
    readonly meta: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type albumsQuery = {
  response: albumsQuery$data;
  variables: albumsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "options"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "options",
    "variableName": "options"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "PageMetadata",
  "kind": "LinkedField",
  "name": "meta",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "albumsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AlbumsPage",
        "kind": "LinkedField",
        "name": "albums",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "albumFragment"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "albumsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AlbumsPage",
        "kind": "LinkedField",
        "name": "albums",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "options",
                    "value": {
                      "paginate": {
                        "limit": 1,
                        "page": 1
                      }
                    }
                  }
                ],
                "concreteType": "PhotosPage",
                "kind": "LinkedField",
                "name": "photos",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Photo",
                    "kind": "LinkedField",
                    "name": "data",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "thumbnailUrl",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "photos(options:{\"paginate\":{\"limit\":1,\"page\":1}})"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6e5b3c01046ad3f5270484955db95a12",
    "id": null,
    "metadata": {},
    "name": "albumsQuery",
    "operationKind": "query",
    "text": "query albumsQuery(\n  $options: PageQueryOptions\n) {\n  albums(options: $options) {\n    data {\n      id\n      ...albumFragment\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n\nfragment albumFragment on Album {\n  id\n  title\n  user {\n    id\n    name\n  }\n  photos(options: {paginate: {limit: 1, page: 1}}) {\n    data {\n      thumbnailUrl\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "423791dff90b37be2ccc6022ba146213";

export default node;
