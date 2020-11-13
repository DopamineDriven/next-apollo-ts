import { gql } from '@apollo/client';

const UPDATE_POST_MUTATION = gql`
  mutation votePost($id: String!) {
    votePost(id: $id) {
      id
      votes
      __typename
    }
  }
`

export default UPDATE_POST_MUTATION;