/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createPost
// ====================================================

export interface createPost_createPost {
  __typename: "Post";
  id: string;
  title: string;
  votes: number;
  url: string;
  createdAt: any;
}

export interface createPost {
  createPost: createPost_createPost;
}

export interface createPostVariables {
  title: string;
  url: string;
}
