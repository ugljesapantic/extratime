/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncWebsiteVisits = /* GraphQL */ `
  query SyncWebsiteVisits(
    $filter: ModelWebsiteVisitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWebsiteVisits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWebsiteVisit = /* GraphQL */ `
  query GetWebsiteVisit($id: ID!) {
    getWebsiteVisit(id: $id) {
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
export const listWebsiteVisits = /* GraphQL */ `
  query ListWebsiteVisits(
    $filter: ModelWebsiteVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebsiteVisits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
