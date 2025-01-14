export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };

export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

/** All built-in and custom scalars, mapped to their actual values */

export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: string; output: string };
  Decimal: { input: number; output: number };
};

export type Pagination = {
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export interface Customer {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export type FilterFindManyCustomerInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFindManyCustomersArgs = {
  filters: FilterFindManyCustomerInput;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CustomersPaginated = {
  data: Array<Customer>;
  pagination: Pagination;
};

export interface FindMyUserResponse {
  id: number;
  email: string;
  userName: string;
  firstName: string;
  lastName?: string;
  phone: string;
}

export interface LoginUserResponse {
  id: number;
  email: string;
  userName: string;
  firstName: string;
  lastName?: string;
  phone: string;
}

export type UserLoginCustomInput = {
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationLoginUserArgs = {
  input: UserLoginCustomInput;
};

export declare enum UserRole {
  admin = "ADMIN",
  user = "USER",
  customer = "CUSTOMER",
}
