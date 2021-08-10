import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient(url, { headers }) {
  const client = new GraphQLClient(url, {
    headers: {
      ...headers,
    },
  });

  return {
    async query({ query, variables }) {
      const messages = await client.request(query, variables);

      return {
        data: {
          messages,
        },
      };
    },
  };
}
