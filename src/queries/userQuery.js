import gql from "graphql-tag";

const userQuery = gql`
  query userProfile($username: String!) {
    user(username: $username) {
      id
      first_name
      last_name
      bio
      github_url
      twitter_url
      linkedin_url
      blog_url
      portfolio_url
      website_url
      profile_image
      projects {
        id
        title
        description
        project_url
        github_url
        needs_help
        project_manager {
          username
        }
        users {
          username
        }
        skills {
          id
          name
        }
      }
      skills {
        id
        name
      }
      city {
        id
        name
      }
      country {
        id
        name
      }
      cohorts {
        title
        users {
          id
        }
        teams {
          id
        }
      }
    }
  }
`;

export default userQuery;
