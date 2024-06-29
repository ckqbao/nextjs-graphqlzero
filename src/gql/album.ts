import { graphql } from 'react-relay';

export const ALBUM_FRAGMENT = graphql`
  fragment albumFragment on Album {
    id
    title
    user {
      id
      name
    }
    photos(options: { paginate: { limit: 1, page: 1 } }) {
      data {
        thumbnailUrl
      }
    }
  }
`;

export const ALBUM_QUERY = graphql`
  query albumQuery($id: ID!) {
    album(id: $id) {
      id
      title
      user {
        id
        name
      }
    }
  }
`;

export const ALBUM_PHOTOS_QUERY = graphql`
  query albumPhotosQuery($id: ID!, $limit: Int!, $page: Int!) {
    album(id: $id) {
      id
      photos(options: { paginate: { limit: $limit, page: $page } }) {
        data {
          id
          title
          thumbnailUrl
          url
        }
        meta {
          totalCount
        }
      }
    }
  }
`;
