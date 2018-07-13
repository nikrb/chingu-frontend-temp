import gql from "graphql-tag";

const createStandup = gql`
  mutation createStandup(
    $user_id: ID
    $have_done: String
    $will_do: String
    $blocked: String
  ) {
    createStandup(
      standup_data: {
        user_id: $user_id
        have_done: $have_done
        will_do: $will_do
        blocked: $blocked
      }
  ) {
      have_done
    }
  }
`;

export default createStandup;
