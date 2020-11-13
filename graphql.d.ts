import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  allUsers: Array<User>;
  _allUsersMeta: _QueryMeta;
  User: User;
  allPosts: Array<Post>;
  _allPostsMeta: _QueryMeta;
  Post: Post;
};


export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryAllPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderBy>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type UserOrderBy = {
  firstName?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

export enum OrderBy {
  asc = 0,
  desc = 1
}

export type User = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};


export type _QueryMeta = {
  count: Scalars['Int'];
};

export type PostOrderBy = {
  title?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  votes?: Maybe<OrderBy>;
};

export type Post = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  url: Scalars['String'];
  votes: Scalars['Int'];
};

export type Mutation = {
  createPost: Post;
  votePost: Post;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationVotePostArgs = {
  id: Scalars['String'];
};

export type AllPostsQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type AllPostsQuery = { allPosts: Array<Pick<Post, 'id' | 'title' | 'votes' | 'url' | 'createdAt'>>, _allPostsMeta: Pick<_QueryMeta, 'count'> };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
}>;


export type CreatePostMutation = { createPost: Pick<Post, 'id' | 'title' | 'votes' | 'url' | 'createdAt'> };

export type VotePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type VotePostMutation = { votePost: (
    { __typename: 'Post' }
    & Pick<Post, 'id' | 'votes'>
  ) };


declare module '*/all-posts.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const allPosts: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/post-mutation.ts' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createPost: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/update-post-mutation.ts' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const votePost: DocumentNode;

  export default defaultDocument;
}
    

export const AllPostsDocument: DocumentNode<AllPostsQuery, AllPostsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"_allPostsMeta"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}}]};
export const CreatePostDocument: DocumentNode<CreatePostMutation, CreatePostMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]};
export const VotePostDocument: DocumentNode<VotePostMutation, VotePostMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"votePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}]};

export const AllPostsDocument = gql`
    query allPosts($first: Int!, $skip: Int!) {
  allPosts(orderBy: {createdAt: desc}, first: $first, skip: $skip) {
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
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = ApolloReactCommon.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation createPost($title: String!, $url: String!) {
  createPost(title: $title, url: $url) {
    id
    title
    votes
    url
    createdAt
  }
}
    `;
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const VotePostDocument = gql`
    mutation votePost($id: String!) {
  votePost(id: $id) {
    id
    votes
    __typename
  }
}
    `;
export type VotePostMutationFn = ApolloReactCommon.MutationFunction<VotePostMutation, VotePostMutationVariables>;

/**
 * __useVotePostMutation__
 *
 * To run a mutation, you first call `useVotePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVotePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [votePostMutation, { data, loading, error }] = useVotePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVotePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VotePostMutation, VotePostMutationVariables>) {
        return ApolloReactHooks.useMutation<VotePostMutation, VotePostMutationVariables>(VotePostDocument, baseOptions);
      }
export type VotePostMutationHookResult = ReturnType<typeof useVotePostMutation>;
export type VotePostMutationResult = ApolloReactCommon.MutationResult<VotePostMutation>;
export type VotePostMutationOptions = ApolloReactCommon.BaseMutationOptions<VotePostMutation, VotePostMutationVariables>;
export type QueryKeySpecifier = ('allUsers' | '_allUsersMeta' | 'User' | 'allPosts' | '_allPostsMeta' | 'Post' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	_allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	allPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	_allPostsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	Post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'firstName' | 'lastName' | 'email' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _QueryMetaKeySpecifier = ('count' | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'title' | 'url' | 'votes' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createPost' | 'votePost' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createPost?: FieldPolicy<any> | FieldReadFunction<any>,
	votePost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Query?: {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: QueryFieldPolicy,
	},
	User?: {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserFieldPolicy,
	},
	_QueryMeta?: {
		keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: _QueryMetaFieldPolicy,
	},
	Post?: {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PostFieldPolicy,
	},
	Mutation?: {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MutationFieldPolicy,
	}
};