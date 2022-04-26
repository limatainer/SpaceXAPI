import gql from 'graphql-tag';

export const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit:Int!){
    launchesPast(limit:$limit){
      mission_name
      ships{
        image
      }
      launch_success
      launch_year
      id
      rocket {
        rocket_name
      }
    }
  }
`;
