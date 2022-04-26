import gql from 'graphql-tag';

export const GET_UPCOMING_MISSION = gql`
  query GetUpMission($limit:Int!){
    launchesPast(limit:$limit){
      launchesUpcoming {
        id
        mission_name
        rocket {
          rocket_name
        }
        ships {
          image
        }
      }
    }
`;
