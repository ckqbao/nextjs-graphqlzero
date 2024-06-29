/**
 * @generated SignedSource<<25ce08746eab8f9d65eae1ddf1c65fcd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type albumFragment$data = {
  readonly id: string | null | undefined;
  readonly photos: {
    readonly data: ReadonlyArray<{
      readonly thumbnailUrl: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly title: string | null | undefined;
  readonly user: {
    readonly id: string | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "albumFragment";
};
export type albumFragment$key = {
  readonly " $data"?: albumFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"albumFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "albumFragment",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "photos(options:{\"paginate\":{\"limit\":1,\"page\":1}})"
    }
  ],
  "type": "Album",
  "abstractKey": null
};
})();

(node as any).hash = "196d6d69122ab3fd8de2bb28cb41c351";

export default node;
