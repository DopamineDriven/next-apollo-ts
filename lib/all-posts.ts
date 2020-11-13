import {gql}  from '@apollo/client';

const ALL_POSTS = gql`
query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: { createdAt: desc }, first: $first, skip: $skip) {
        id
        title
        votes
        url
        createdAt
    }
    _allPostsMeta {
        count
    }
}
`
export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}

export default ALL_POSTS;