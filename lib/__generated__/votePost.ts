/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: votePost
// ====================================================

export interface votePost_votePost {
  __typename: "Post";
  id: string;
  votes: number;
}

export interface votePost {
  votePost: votePost_votePost;
}

export interface votePostVariables {
  id: string;
}
