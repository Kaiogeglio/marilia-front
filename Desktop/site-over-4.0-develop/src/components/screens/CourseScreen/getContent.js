import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClientStrapi';

const BASE_URL = 'https://strapi-overstack-lms.herokuapp.com/graphql';

export async function getContent(course) {
  const query = gql`
    query($course: String!) {
      courses
      (
        where: {
          Slug: $course
        }
      ){
        Title,
        Name,
        Video,
        Description,
        ... on Course {
          Info_course {
            Icon_name,
            Icon_image {
              url
            }
          },
          Selective_proccess {
            proccess_name,
            proccess_description,
            Style
          },
          Faq_course {
            Question,
            Answer
          },
          Button {
            Text,
            Link,
            Type
          }
        },
        modules(
          sort: "Number:ASC"
        ) {
          Title,
          Number,
          Description,
          Tools,
          Style
        }
      }
    }
  `;

  const variables = {
    course,
  };

  const client = CMSGraphQLClient(
    BASE_URL,
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTE0NGJiZmYwZDA2MDAxNWM5NDljMiIsImlhdCI6MTYyODYxMzA4NywiZXhwIjoxNjMxMjA1MDg3fQ.8VeZ2AlZ0XTavdSz4_jcazDkSCx1o9kgQfnDXnJ9N3M',
      },
    },
  );
  const response = await client.query({ query, variables });
  return response.data.messages;
}
