/**
 * @generated SignedSource<<9e231895065110977712c3fb859fae66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type albumPhotosQuery$variables = {
  id: string;
  limit: number;
  page: number;
};
export type albumPhotosQuery$data = {
  readonly album: {
    readonly id: string | null | undefined;
    readonly photos: {
      readonly data: ReadonlyArray<{
        readonly id: string | null | undefined;
        readonly thumbnailUrl: string | null | undefined;
        readonly title: string | null | undefined;
        readonly url: string | null | undefined;
      } | null | undefined> | null | undefined;
      readonly meta: {
        readonly totalCount: number | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type albumPhotosQuery = {
  response: albumPhotosQuery$data;
  variables: albumPhotosQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Album",
    "kind": "LinkedField",
    "name": "album",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "limit",
                    "variableName": "limit"
                  },
                  {
                    "kind": "Variable",
                    "name": "page",
                    "variableName": "page"
                  }
                ],
                "kind": "ObjectValue",
                "name": "paginate"
              }
            ],
            "kind": "ObjectValue",
            "name": "options"
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
              (v1/*: any*/),
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
                "kind": "ScalarField",
                "name": "thumbnailUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "albumPhotosQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "albumPhotosQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b68ea476c1f4be3a3950157c1fae23e9",
    "id": null,
    "metadata": {},
    "name": "albumPhotosQuery",
    "operationKind": "query",
    "text": "query albumPhotosQuery(\n  $id: ID!\n  $limit: Int!\n  $page: Int!\n) {\n  album(id: $id) {\n    id\n    photos(options: {paginate: {limit: $limit, page: $page}}) {\n      data {\n        id\n        title\n        thumbnailUrl\n        url\n      }\n      meta {\n        totalCount\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ce984b92a754f081928a526d526837b";

export default node;
