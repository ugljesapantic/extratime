/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWebsiteVisit = /* GraphQL */ `
  mutation CreateWebsiteVisit(
    $input: CreateWebsiteVisitInput!
    $condition: ModelWebsiteVisitConditionInput
  ) {
    createWebsiteVisit(input: $input, condition: $condition) {
      id
      url
      start
      end
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWebsiteVisit = /* GraphQL */ `
  mutation UpdateWebsiteVisit(
    $input: UpdateWebsiteVisitInput!
    $condition: ModelWebsiteVisitConditionInput
  ) {
    updateWebsiteVisit(input: $input, condition: $condition) {
      id
      url
      start
      end
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWebsiteVisit = /* GraphQL */ `
  mutation DeleteWebsiteVisit(
    $input: DeleteWebsiteVisitInput!
    $condition: ModelWebsiteVisitConditionInput
  ) {
    deleteWebsiteVisit(input: $input, condition: $condition) {
      id
      url
      start
      end
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
