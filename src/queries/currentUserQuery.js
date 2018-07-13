import gql from "graphql-tag";

const currentUserQuery = gql`
  query currentUserQuery {
    user {
      id
      username
    }
  }
`;

export default currentUserQuery;
