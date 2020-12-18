import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  post: Post;
  posts: Array<Post>;
  profilePosts: Array<Post>;
  comment: Comment;
  comments: Array<Comment>;
  profileComments: Array<Comment>;
  profile: Profile;
  friends: Array<Profile>;
  feed: Array<Post>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  postsIds: Array<Scalars['ID']>;
};


export type QueryProfilePostsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryProfileCommentsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryProfileArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  fullName: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  profile: Profile;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  user: User;
  posts?: Maybe<Array<Post>>;
  comments?: Maybe<Array<Comment>>;
  likedPosts?: Maybe<Array<Post>>;
  dislikedPosts?: Maybe<Array<Post>>;
  likedComments?: Maybe<Array<Comment>>;
  dislikedComments?: Maybe<Array<Comment>>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  author: Profile;
  content: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  likes: Scalars['Int'];
  dislikes: Scalars['Int'];
  likedBy?: Maybe<Array<Profile>>;
  dislikedBy?: Maybe<Array<Profile>>;
};


export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  author: Profile;
  post: Post;
  content: Scalars['String'];
  likes: Scalars['Int'];
  dislikes: Scalars['Int'];
  likedBy?: Maybe<Array<Profile>>;
  dislikedBy?: Maybe<Array<Profile>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserMutationResponse;
  login: UserMutationResponse;
  createPost: PostMutationResponse;
  deletePost: Scalars['String'];
  updatePostContent: PostMutationResponse;
  likePost: PostMutationResponse;
  createComment: CreateCommentResponse;
  deleteComment: Scalars['String'];
  likeComment: LikeCommentResponse;
  createFriendship: Friendship;
  acceptFriendship: Friendship;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePostContentArgs = {
  data: UpdatePostContentInput;
};


export type MutationLikePostArgs = {
  data: LikePostInput;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationLikeCommentArgs = {
  data: LikeCommentInput;
};


export type MutationCreateFriendshipArgs = {
  addressedToId: Scalars['ID'];
};


export type MutationAcceptFriendshipArgs = {
  id: Scalars['ID'];
};

export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  user: User;
  token: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PostMutationResponse = {
  __typename?: 'PostMutationResponse';
  post: Post;
  profile: Profile;
};

export type UpdatePostContentInput = {
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type LikePostInput = {
  id: Scalars['ID'];
  isLiked: Scalars['Boolean'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  comment: Comment;
  post: Post;
  profile: Profile;
};

export type CreateCommentInput = {
  postId: Scalars['ID'];
  content: Scalars['String'];
};

export type LikeCommentResponse = {
  __typename?: 'LikeCommentResponse';
  comment: Comment;
  profile: Profile;
};

export type LikeCommentInput = {
  id: Scalars['ID'];
  isLiked: Scalars['Boolean'];
};

export type Friendship = {
  __typename?: 'Friendship';
  id: Scalars['ID'];
  requestedBy: Profile;
  addressedTo: Profile;
  isAccepted: Scalars['Boolean'];
  friendsFrom: Scalars['DateTime'];
};

export type CreateCommentMutationVariables = Exact<{
  data: CreateCommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'CreateCommentResponse' }
    & { comment: (
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content' | 'createdAt' | 'likes' | 'dislikes'>
      & { likedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      )>>, dislikedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      )>> }
    ), post: (
      { __typename?: 'Post' }
      & Pick<Post, 'id'>
      & { comments?: Maybe<Array<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id'>
      )>> }
    ), profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { comments?: Maybe<Array<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id'>
      )>> }
    ) }
  ) }
);

export type LikeCommentMutationVariables = Exact<{
  data: LikeCommentInput;
}>;


export type LikeCommentMutation = (
  { __typename?: 'Mutation' }
  & { likeComment: (
    { __typename?: 'LikeCommentResponse' }
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
    ), comment: (
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'likes' | 'dislikes'>
      & { likedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
      )>>, dislikedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
      )>> }
    ) }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'PostMutationResponse' }
    & { post: (
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'createdAt' | 'content' | 'likes' | 'dislikes'>
      & { author: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      ), likedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      )>>, dislikedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      )>> }
    ), profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { posts?: Maybe<Array<(
        { __typename?: 'Post' }
        & Pick<Post, 'id'>
      )>> }
    ) }
  ) }
);

export type LikePostMutationVariables = Exact<{
  data: LikePostInput;
}>;


export type LikePostMutation = (
  { __typename?: 'Mutation' }
  & { likePost: (
    { __typename?: 'PostMutationResponse' }
    & { post: (
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'likes' | 'dislikes'>
      & { likedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
      )>>, dislikedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
      )>> }
    ), profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { posts?: Maybe<Array<(
        { __typename?: 'Post' }
        & Pick<Post, 'id'>
        & { likedBy?: Maybe<Array<(
          { __typename?: 'Profile' }
          & Pick<Profile, 'id'>
        )>>, dislikedBy?: Maybe<Array<(
          { __typename?: 'Profile' }
          & Pick<Profile, 'id'>
        )>> }
      )>> }
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserMutationResponse' }
    & Pick<UserMutationResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'fullName'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
      ) }
    ) }
  ) }
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserMutationResponse' }
    & Pick<UserMutationResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'fullName'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
      ) }
    ) }
  ) }
);

export type CommentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CommentQuery = (
  { __typename?: 'Query' }
  & { comment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'createdAt' | 'content' | 'likes' | 'dislikes'>
    & { author: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    ), likedBy?: Maybe<Array<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    )>>, dislikedBy?: Maybe<Array<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    )>> }
  ) }
);

export type PostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'content' | 'likes' | 'dislikes'>
    & { author: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    ), likedBy?: Maybe<Array<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    )>>, dislikedBy?: Maybe<Array<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    )>>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'likes' | 'dislikes' | 'createdAt'>
    )>> }
  ) }
);

export type FeedQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedQuery = (
  { __typename?: 'Query' }
  & { feed: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'content' | 'likes' | 'dislikes'>
    & { author: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    ), likedBy?: Maybe<Array<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    )>>, dislikedBy?: Maybe<Array<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'fullName'>
      ) }
    )>>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'createdAt' | 'content' | 'likes' | 'dislikes'>
      & { author: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      ), likedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      )>>, dislikedBy?: Maybe<Array<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'fullName'>
        ) }
      )>> }
    )>> }
  )> }
);

export type UserQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'fullName' | 'isAdmin'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
    ) }
  ) }
);


export const CreateCommentDocument = gql`
    mutation CreateComment($data: CreateCommentInput!) {
  createComment(data: $data) {
    comment {
      id
      content
      createdAt
      likes
      dislikes
      likedBy {
        id
        user {
          id
          fullName
        }
      }
      dislikedBy {
        id
        user {
          id
          fullName
        }
      }
    }
    post {
      id
      comments {
        id
      }
    }
    profile {
      id
      comments {
        id
      }
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const LikeCommentDocument = gql`
    mutation LikeComment($data: LikeCommentInput!) {
  likeComment(data: $data) {
    profile {
      id
    }
    comment {
      id
      likes
      dislikes
      likedBy {
        id
      }
      dislikedBy {
        id
      }
    }
  }
}
    `;
export type LikeCommentMutationFn = Apollo.MutationFunction<LikeCommentMutation, LikeCommentMutationVariables>;

/**
 * __useLikeCommentMutation__
 *
 * To run a mutation, you first call `useLikeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCommentMutation, { data, loading, error }] = useLikeCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLikeCommentMutation(baseOptions?: Apollo.MutationHookOptions<LikeCommentMutation, LikeCommentMutationVariables>) {
        return Apollo.useMutation<LikeCommentMutation, LikeCommentMutationVariables>(LikeCommentDocument, baseOptions);
      }
export type LikeCommentMutationHookResult = ReturnType<typeof useLikeCommentMutation>;
export type LikeCommentMutationResult = Apollo.MutationResult<LikeCommentMutation>;
export type LikeCommentMutationOptions = Apollo.BaseMutationOptions<LikeCommentMutation, LikeCommentMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($content: String!) {
  createPost(content: $content) {
    post {
      id
      createdAt
      content
      likes
      dislikes
      author {
        id
        user {
          id
          fullName
        }
      }
      likedBy {
        id
        user {
          id
          fullName
        }
      }
      dislikedBy {
        id
        user {
          id
          fullName
        }
      }
    }
    profile {
      id
      posts {
        id
      }
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

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
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LikePostDocument = gql`
    mutation LikePost($data: LikePostInput!) {
  likePost(data: $data) {
    post {
      id
      likes
      dislikes
      likedBy {
        id
      }
      dislikedBy {
        id
      }
    }
    profile {
      id
      posts {
        id
        likedBy {
          id
        }
        dislikedBy {
          id
        }
      }
    }
  }
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, baseOptions);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    token
    user {
      id
      email
      firstName
      lastName
      fullName
      profile {
        id
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    token
    user {
      id
      email
      firstName
      lastName
      fullName
      profile {
        id
      }
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CommentDocument = gql`
    query Comment($id: ID!) {
  comment(id: $id) {
    id
    createdAt
    content
    likes
    dislikes
    author {
      id
      user {
        id
        fullName
      }
    }
    likedBy {
      id
      user {
        id
        fullName
      }
    }
    dislikedBy {
      id
      user {
        id
        fullName
      }
    }
  }
}
    `;

/**
 * __useCommentQuery__
 *
 * To run a query within a React component, call `useCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentQuery(baseOptions: Apollo.QueryHookOptions<CommentQuery, CommentQueryVariables>) {
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, baseOptions);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, baseOptions);
        }
export type CommentQueryHookResult = ReturnType<typeof useCommentQuery>;
export type CommentLazyQueryHookResult = ReturnType<typeof useCommentLazyQuery>;
export type CommentQueryResult = Apollo.QueryResult<CommentQuery, CommentQueryVariables>;
export const PostDocument = gql`
    query Post($id: ID!) {
  post(id: $id) {
    id
    createdAt
    content
    likes
    dislikes
    author {
      id
      user {
        id
        fullName
      }
    }
    likedBy {
      id
      user {
        id
        fullName
      }
    }
    dislikedBy {
      id
      user {
        id
        fullName
      }
    }
    comments {
      id
      likes
      dislikes
      createdAt
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const FeedDocument = gql`
    query Feed {
  feed {
    id
    createdAt
    content
    likes
    dislikes
    author {
      id
      user {
        id
        fullName
      }
    }
    likedBy {
      id
      user {
        id
        fullName
      }
    }
    dislikedBy {
      id
      user {
        id
        fullName
      }
    }
    comments {
      id
      createdAt
      content
      likes
      dislikes
      author {
        id
        user {
          id
          fullName
        }
      }
      likedBy {
        id
        user {
          id
          fullName
        }
      }
      dislikedBy {
        id
        user {
          id
          fullName
        }
      }
    }
  }
}
    `;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const UserDocument = gql`
    query User($id: ID) {
  user(id: $id) {
    id
    email
    firstName
    lastName
    fullName
    isAdmin
    profile {
      id
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;