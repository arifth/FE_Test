import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const collectionApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api"}),
  tagTypes: [],
  endpoints: (build) => ({
    loginToDashboard: build.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    login: build.mutation({
      query: (payload:{username:string,password:string}) => ({
        url: "/auth/login",
        method: "POST",
        body: payload
      })
    }),
    getAllGerbangs: build.query({
      query:() => "/gerbangs"
    }),
    getAllLalin: build.query({
      query:  () => "/lalins"
    })
  }),
})

// Export hooks for usage in functional components
export const {useLoginToDashboardQuery,useLoginMutation,useGetAllLalinQuery,useGetAllGerbangsQuery } = collectionApi