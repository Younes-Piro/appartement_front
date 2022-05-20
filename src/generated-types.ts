import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};

export type AppartementsType = {
  __typename?: 'AppartementsType';
  NmbrOfBathrooms: Scalars['Int'];
  NmbrOfPieces: Scalars['Int'];
  city: Scalars['String'];
  concierge: Scalars['Int'];
  currency: Scalars['String'];
  garage: Scalars['Int'];
  id: Scalars['ID'];
  location: Scalars['String'];
  nmbrOfRooms: Scalars['Int'];
  price: Scalars['Float'];
  security: Scalars['Int'];
  surface: Scalars['Int'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allAppartements?: Maybe<Array<Maybe<AppartementsType>>>;
  singleAppartement?: Maybe<AppartementsType>;
};


export type QueryAllAppartementsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerySingleAppartementArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type All_AppartementsQueryVariables = Exact<{ [key: string]: never; }>;


export type All_AppartementsQuery = { __typename?: 'Query', allAppartements?: Array<{ __typename?: 'AppartementsType', id: string, title: string } | null> | null };

export const All_AppartementsDocument = gql`
    query all_appartements {
  allAppartements {
    id
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class All_AppartementsGQL extends Apollo.Query<All_AppartementsQuery, All_AppartementsQueryVariables> {
    document = All_AppartementsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }