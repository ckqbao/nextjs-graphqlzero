/**
 * @generated SignedSource<<f6519795ac1c85a5986758273d2cd438>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type albumQuery$variables = {
  id: string;
};
export type albumQuery$data = {
  readonly album: {
    readonly id: string | null | undefined;
    readonly title: string | null | undefined;
    readonly user: {
      readonly id: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type albumQuery = {
  response: albumQuery$data;
  variables: albumQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "name": "albumQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "albumQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "cc1a92e9842ced3bf5145745668975a2",
    "id": null,
    "metadata": {},
    "name": "albumQuery",
    "operationKind": "query",
    "text": "query albumQuery(\n  $id: ID!\n) {\n  album(id: $id) {\n    id\n    title\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "238994b8b4d3675ec824b83dc7353ff6";

export default node;
