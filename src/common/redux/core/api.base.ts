import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { ApiCacheTags } from "common/models/api-base.model";

export class ApiBaseError<Tvalue = unknown> {
  status?: number;
  data?: string[];
  value?: Tvalue;
  constructor(status?: number, data?: string[], value?: Tvalue) {
    this.status = status;
    this.data = data;
    this.value = value;
  }
}
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery<ApiBaseError>(),
  endpoints: () => ({}),
  tagTypes: Object.values(ApiCacheTags),
  keepUnusedDataFor: 0
});

export const { middleware, reducer, reducerPath } = baseApi;
