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

export type Dictionary = {
  __typename?: 'Dictionary';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<InnerItem>;
};

export type InnerItem = {
  __typename?: 'InnerItem';
  txt1?: Maybe<Scalars['Float']>;
  txt2?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  allAppartements?: Maybe<Array<Maybe<AppartementsType>>>;
  cards?: Maybe<Array<Maybe<Dictionary>>>;
  detailsGrouping?: Maybe<Array<Maybe<Dictionary>>>;
  numberRoomsCount?: Maybe<Array<Maybe<Dictionary>>>;
  singleAppartement?: Maybe<Array<Maybe<AppartementsType>>>;
};

export type Grouping_CityQueryVariables = Exact<{ [key: string]: never; }>;


export type Grouping_CityQuery = { __typename?: 'Query', detailsGrouping?: Array<{ __typename?: 'Dictionary', key?: string | null, value?: { __typename?: 'InnerItem', txt1?: number | null, txt2?: number | null } | null } | null> | null };

export type Total_Count_RoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type Total_Count_RoomsQuery = { __typename?: 'Query', numberRoomsCount?: Array<{ __typename?: 'Dictionary', key?: string | null, value?: { __typename?: 'InnerItem', txt1?: number | null } | null } | null> | null };

export type Cards_ValuesQueryVariables = Exact<{ [key: string]: never; }>;


export type Cards_ValuesQuery = { __typename?: 'Query', cards?: Array<{ __typename?: 'Dictionary', key?: string | null, value?: { __typename?: 'InnerItem', txt1?: number | null } | null } | null> | null };

export type All_AppartementsQueryVariables = Exact<{ [key: string]: never; }>;


export type All_AppartementsQuery = { __typename?: 'Query', allAppartements?: Array<{ __typename?: 'AppartementsType', id: string, title: string } | null> | null };

export const Grouping_CityDocument = gql`
    query grouping_city {
  detailsGrouping {
    key
    value {
      txt1
      txt2
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Grouping_CityGQL extends Apollo.Query<Grouping_CityQuery, Grouping_CityQueryVariables> {
    document = Grouping_CityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Total_Count_RoomsDocument = gql`
    query total_count_rooms {
  numberRoomsCount {
    key
    value {
      txt1
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Total_Count_RoomsGQL extends Apollo.Query<Total_Count_RoomsQuery, Total_Count_RoomsQueryVariables> {
    document = Total_Count_RoomsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Cards_ValuesDocument = gql`
    query cards_values {
  cards {
    key
    value {
      txt1
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Cards_ValuesGQL extends Apollo.Query<Cards_ValuesQuery, Cards_ValuesQueryVariables> {
    document = Cards_ValuesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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