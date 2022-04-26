import gql from 'graphql-tag';

export const GET_ROCKETS = gql`
  query GetRockets($limit:Int!)
  {
    rockets {
      name
      id
    }
  }
`;
