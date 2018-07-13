import gql from "graphql-tag";

const standupQuery = gql`
  query standupQuery($username: String!) {
    standups(username: $username) {
      id
      user_id
      created
      have_done
      will_do
      blocked
    }
  }
`;

export default standupQuery;
