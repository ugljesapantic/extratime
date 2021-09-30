import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class WebsiteVisit {
  readonly id: string;
  readonly url: string;
  readonly start: number;
  readonly end: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WebsiteVisit>);
  static copyOf(source: WebsiteVisit, mutator: (draft: MutableModel<WebsiteVisit>) => MutableModel<WebsiteVisit> | void): WebsiteVisit;
}