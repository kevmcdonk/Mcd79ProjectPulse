import { SPHttpClient } from '@microsoft/sp-http';

export interface IProjectPulseProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
}
