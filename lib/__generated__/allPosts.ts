/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPosts
// ====================================================

export interface allPosts_allPosts {
  __typename: "Post";
  id: string;
  title: string;
  votes: number;
  url: string;
  createdAt: any;
}

export interface allPosts__allPostsMeta {
  __typename: "_QueryMeta";
  count: number;
}

export interface allPosts {
  allPosts: allPosts_allPosts[];
  _allPostsMeta: allPosts__allPostsMeta;
}

export interface allPostsVariables {
  first: number;
  skip: number;
}
