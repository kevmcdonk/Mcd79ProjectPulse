import * as React from 'react';
import styles from './ProjectPulse.module.scss';
import { IProjectPulseProps } from './IProjectPulseProps';
import { IProjectPulseState } from './IProjectPulseState';
import { IPulseItem } from './IPulseItem';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';


export default class ProjectPulse extends React.Component<IProjectPulseProps, IProjectPulseState> {
  private listItemEntityTypeName: string = undefined;

  private blabla(element?: any): void {
    alert('test');
  }

  public render(): React.ReactElement<IProjectPulseProps> {

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg12">
              <span className="ms-font-xl ms-fontColor-white">How do you feel today?</span>
            </div>
            <div className="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white">
              <div onClick={() => this.createItem('Happy')} role="button" className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                <i className="ms-Icon ms-Icon--Emoji2 "></i>
              </div>
              <div onClick={this.blabla} role="button" className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                <i className="ms-Icon ms-Icon--EmojiNeutral"></i>
              </div>
              <div onClick={this.blabla} role="button" className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                <i className="ms-Icon ms-Icon--Sad"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  private createItem(feeling): void {
    this.setState({
      status: 'Creating item...',
      items: []
    });

    this.getListItemEntityTypeName()
      .then((listItemEntityTypeName: string): Promise<SPHttpClientResponse> => {
        const body: string = JSON.stringify({
          '__metadata': {
            'type': listItemEntityTypeName
          },
          'Title': 'feeling'
        });
        return this.props.spHttpClient.post(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'Content-type': 'application/json;odata=verbose',
              'odata-version': ''
            },
            body: body
          });
      })
      .then((response: SPHttpClientResponse): Promise<IPulseItem> => {
        return response.json();
      })
      .then((item: IPulseItem): void => {
        this.setState({
          status: `Item '${item.Title}' (ID: ${item.Id}) successfully created`,
          items: []
        });
      }, (error: any): void => {
        this.setState({
          status: 'Error while creating the item: ' + error,
          items: []
        });
      });
  }

  private getListItemEntityTypeName(): Promise<string> {
    return new Promise<string>((resolve: (listItemEntityTypeName: string) => void, reject: (error: any) => void): void => {
      if (this.listItemEntityTypeName) {
        resolve(this.listItemEntityTypeName);
        return;
      }

      this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')?$select=ListItemEntityTypeFullName`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            'Accept': 'application/json;odata=nometadata',
            'odata-version': ''
          }
        })
        .then((response: SPHttpClientResponse): Promise<{ ListItemEntityTypeFullName: string }> => {
          return response.json();
        }, (error: any): void => {
          reject(error);
        })
        .then((response: { ListItemEntityTypeFullName: string }): void => {
          this.listItemEntityTypeName = response.ListItemEntityTypeFullName;
          resolve(this.listItemEntityTypeName);
        });
    });
  }

}

