import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthenticationDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getLoggedUser: User;
  login: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  validateToken: Scalars['Boolean']['output'];
};


export type QueryLoginArgs = {
  dto: AuthenticationDto;
};


export type QueryValidateTokenArgs = {
  dto: TokenValidationDto;
};

export type TokenValidationDto = {
  token: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login: string };

export type ValidateTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type ValidateTokenQuery = { __typename?: 'Query', validateToken: boolean };

export type GetLoggedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggedUserQuery = { __typename?: 'Query', getLoggedUser: { __typename?: 'User', id: number, email: string } };


export const LoginDocument = gql`
    query login($email: String!, $password: String!) {
  login(dto: {email: $email, password: $password})
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export function useLoginSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginSuspenseQueryHookResult = ReturnType<typeof useLoginSuspenseQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const ValidateTokenDocument = gql`
    query validateToken($token: String!) {
  validateToken(dto: {token: $token})
}
    `;

/**
 * __useValidateTokenQuery__
 *
 * To run a query within a React component, call `useValidateTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useValidateTokenQuery(baseOptions: Apollo.QueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, options);
      }
export function useValidateTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, options);
        }
export function useValidateTokenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, options);
        }
export type ValidateTokenQueryHookResult = ReturnType<typeof useValidateTokenQuery>;
export type ValidateTokenLazyQueryHookResult = ReturnType<typeof useValidateTokenLazyQuery>;
export type ValidateTokenSuspenseQueryHookResult = ReturnType<typeof useValidateTokenSuspenseQuery>;
export type ValidateTokenQueryResult = Apollo.QueryResult<ValidateTokenQuery, ValidateTokenQueryVariables>;
export const GetLoggedUserDocument = gql`
    query GetLoggedUser {
  getLoggedUser {
    id
    email
  }
}
    `;

/**
 * __useGetLoggedUserQuery__
 *
 * To run a query within a React component, call `useGetLoggedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoggedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoggedUserQuery(baseOptions?: Apollo.QueryHookOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, options);
      }
export function useGetLoggedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, options);
        }
export function useGetLoggedUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, options);
        }
export type GetLoggedUserQueryHookResult = ReturnType<typeof useGetLoggedUserQuery>;
export type GetLoggedUserLazyQueryHookResult = ReturnType<typeof useGetLoggedUserLazyQuery>;
export type GetLoggedUserSuspenseQueryHookResult = ReturnType<typeof useGetLoggedUserSuspenseQuery>;
export type GetLoggedUserQueryResult = Apollo.QueryResult<GetLoggedUserQuery, GetLoggedUserQueryVariables>;
export const namedOperations = {
  Query: {
    login: 'login',
    validateToken: 'validateToken',
    GetLoggedUser: 'GetLoggedUser'
  }
}