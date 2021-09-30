/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWebsiteVisitInput = {
  id?: string | null,
  url: string,
  start: number,
  end: number,
  _version?: number | null,
};

export type ModelWebsiteVisitConditionInput = {
  url?: ModelStringInput | null,
  start?: ModelIntInput | null,
  end?: ModelIntInput | null,
  and?: Array< ModelWebsiteVisitConditionInput | null > | null,
  or?: Array< ModelWebsiteVisitConditionInput | null > | null,
  not?: ModelWebsiteVisitConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type WebsiteVisit = {
  __typename: "WebsiteVisit",
  id: string,
  url: string,
  start: number,
  end: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWebsiteVisitInput = {
  id: string,
  url?: string | null,
  start?: number | null,
  end?: number | null,
  _version?: number | null,
};

export type DeleteWebsiteVisitInput = {
  id: string,
  _version?: number | null,
};

export type ModelWebsiteVisitFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  start?: ModelIntInput | null,
  end?: ModelIntInput | null,
  and?: Array< ModelWebsiteVisitFilterInput | null > | null,
  or?: Array< ModelWebsiteVisitFilterInput | null > | null,
  not?: ModelWebsiteVisitFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWebsiteVisitConnection = {
  __typename: "ModelWebsiteVisitConnection",
  items?:  Array<WebsiteVisit | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateWebsiteVisitMutationVariables = {
  input: CreateWebsiteVisitInput,
  condition?: ModelWebsiteVisitConditionInput | null,
};

export type CreateWebsiteVisitMutation = {
  createWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWebsiteVisitMutationVariables = {
  input: UpdateWebsiteVisitInput,
  condition?: ModelWebsiteVisitConditionInput | null,
};

export type UpdateWebsiteVisitMutation = {
  updateWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWebsiteVisitMutationVariables = {
  input: DeleteWebsiteVisitInput,
  condition?: ModelWebsiteVisitConditionInput | null,
};

export type DeleteWebsiteVisitMutation = {
  deleteWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncWebsiteVisitsQueryVariables = {
  filter?: ModelWebsiteVisitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWebsiteVisitsQuery = {
  syncWebsiteVisits?:  {
    __typename: "ModelWebsiteVisitConnection",
    items?:  Array< {
      __typename: "WebsiteVisit",
      id: string,
      url: string,
      start: number,
      end: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWebsiteVisitQueryVariables = {
  id: string,
};

export type GetWebsiteVisitQuery = {
  getWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWebsiteVisitsQueryVariables = {
  filter?: ModelWebsiteVisitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebsiteVisitsQuery = {
  listWebsiteVisits?:  {
    __typename: "ModelWebsiteVisitConnection",
    items?:  Array< {
      __typename: "WebsiteVisit",
      id: string,
      url: string,
      start: number,
      end: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWebsiteVisitSubscription = {
  onCreateWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWebsiteVisitSubscription = {
  onUpdateWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWebsiteVisitSubscription = {
  onDeleteWebsiteVisit?:  {
    __typename: "WebsiteVisit",
    id: string,
    url: string,
    start: number,
    end: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
