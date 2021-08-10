import { CMSGraphQLClient, gql } from '../../infra/cms/CMSGraphQLClientStrapi';

const BASE_URL = 'https://strapi-overstack-lms.herokuapp.com/graphql';
// const BASE_URL = 'http://localhost:1337/graphql';

export const signupService = {
  async signup({
    name, email, mobilephone, password,
  }) {
    const query = gql`
      mutation(
        $name: String!, 
        $username: String!, 
        $email: String!,
        $password: String!,
        $mobilephone: String!
        $font: ID
      ) {
        createUser(input: {
          data: {
            name: $name,
            username: $username,
            email: $email,
            password: $password,
            mobilephone: $mobilephone,
            class: "60a689706fe0c629f47a8e0e"
            font: $font
          }
        }) {
          user{
            email
          }
        }
      }
  `;

    const variables = {
      name,
      username: email,
      email,
      password,
      mobilephone,
      font: '60c90d1a24a2d9286ce79c0b',
    };

    const client = CMSGraphQLClient(BASE_URL, {});
    const response = await client.query({ query, variables });
    return response.data.messages;
  },
};
