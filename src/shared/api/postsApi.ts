import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { PostDto } from './dto';

import { BASE_API_URL, POSTS_PER_PAGE_LIMIT } from './config';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    postsList: build.query<PostDto[], number | void>({
      query: (page: number = 1) => `posts?_page=${page}&_limit=${POSTS_PER_PAGE_LIMIT}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    postDetails: build.query<PostDto, string | void>({
      query: (postId: string) => `posts/${postId}`,
    }),
  }),
});

export const { usePostsListQuery, usePostDetailsQuery } = postsApi;
