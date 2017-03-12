import * as React from 'react';
import styles from './ProjectPulse.module.scss';
import { IProjectPulseProps } from './IProjectPulseProps';
import { IProjectPulseState } from './IProjectPulseState';
import { IPulseItem } from './IPulseItem';
import { IPulseItems } from './IPulseItems';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';
import MockHttpClient from '../MockHttpClient';

export default class ProjectPulse extends React.Component<IProjectPulseProps, IProjectPulseState> {
  private listItemEntityTypeName: string = undefined;
  private tempStyle: any = undefined;
  private localStorageKeyLastDate: string = 'mcd79ProjectPulseLastDate';

  constructor(props: IProjectPulseProps) {
    super(props);

    var lastPulseTimeText = localStorage.getItem(this.localStorageKeyLastDate);
    let showPulses:boolean = false;
    if (lastPulseTimeText == null) {
      showPulses = true;
    }
    else {
      var currentDate = new Date();
      var lastPulseTime = new Date(lastPulseTimeText);
      if (lastPulseTime.getDate() != currentDate.getDate()
       || lastPulseTime.getMonth() != currentDate.getMonth()
       || lastPulseTime.getFullYear() != currentDate.getFullYear()) {
         showPulses = true;
       }
    }
    //milliseconds in a day86400000
    if (showPulses)
    {
        this.state = {
        status: 'getPulse',
        items: [],
        showPulses: true,
        showLoading: false,
        showTemperature: false,
        temperature: 0
      };
    }
    else {
      
      this.state = {
        status: 'getPulse',
        items: [],
        showPulses: false,
        showLoading: true,
        showTemperature: false,
        temperature: 0
      };
      this.showTemperature();
    }

    //backgroundImage: 'url(' + imgUrl + ')',
    this.tempStyle = {
      background: '-webkit-linear-gradient(top, #fff 0%, #fff ' + this.state.temperature + '%, #db3f02 ' + this.state.temperature + '%, #db3f02 100%)'
    };

  }
  public render(): React.ReactElement<IProjectPulseProps> {

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>

          {this.state.showPulses &&
            <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
              <div className="ms-Grid-col ms-u-lg12">
                <span className="ms-font-xl ms-fontColor-white">How do you feel today?</span>
              </div>
              <div className="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white">
                <div onClick={() => this.createItem('Happy')} role="button" className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                  <i className="ms-Icon ms-Icon--Emoji2 "></i>
                </div>
                <div onClick={() => this.createItem('Meh')} role="button" className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                  <i className="ms-Icon ms-Icon--EmojiNeutral"></i>
                </div>
                <div onClick={() => this.createItem('Sad')} role="button" className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                  <i className="ms-Icon ms-Icon--Sad"></i>
                </div>
              </div>
            </div>
          }
          {this.state.showLoading &&

            <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
              <div className="ms-Grid-col ms-u-lg12">
                <span className="ms-font-xl ms-fontColor-white">Loading...</span>
              </div>
              <div className="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white">
                <div className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                  <i className="ms-Icon ms-Icon--Sync"></i>
                </div>
              </div>
            </div>
          }
          {this.state.showTemperature &&

            <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
              <div className="ms-Grid-col ms-u-lg12">
                <span className="ms-font-xl ms-fontColor-white">Everyone else is feeling</span>
              </div>
              <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.thermometerContainer}`}>
                <div className={`ms-Grid-col ms-u-lg4 ms-font-su ${styles.feelingIcon}`}>
                  <span className={styles.thermometer} style={this.tempStyle}>{this.state.temperature}%</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }


  private createItem(feeling): void {
    this.setState({
      status: 'getPulse',
      items: [],
      showPulses: false,
      showLoading: true,
      showTemperature: false,
      temperature: 0
    });

    this.getListItemEntityTypeName()
      .then((listItemEntityTypeName: string): Promise<SPHttpClientResponse> => {
        var dateToSet = new Date();
        localStorage.setItem(this.localStorageKeyLastDate, dateToSet.toString());
        this.showTemperature();
        return null;
      });
  }

  private showTemperature() {
    if (Environment.type === EnvironmentType.Local) {
          MockHttpClient.getMockListData().then((response) => {
            //this._renderList(response.value);
            var score = 0;
            
            for (let pulse of response) {
              if (pulse.Title == 'Happy') {
                score += 1;
              }
              else if (pulse.Title == 'Meh') {
                score += 0.5;
              }
            }

            var tempPercentage = Number((100 - ((score / response.length) * 100)).toFixed(2));
            this.tempStyle = {
              background: '-webkit-linear-gradient(top, #fff 0%, #fff ' + tempPercentage + '%, #db3f02 ' + tempPercentage + '%, #db3f02 100%)'
            };
            this.setState({
              status: 'showTemperature',
              items: [],
              showPulses: false,
              showLoading: false,
              showTemperature: true,
              temperature: Number(((score / response.length) * 100).toFixed(2))
            });
          });
        }
        else if (Environment.type == EnvironmentType.SharePoint ||
          Environment.type == EnvironmentType.ClassicSharePoint) {

          this._getTodayPulses().then((pulses: IPulseItems): Promise<SPHttpClientResponse> => {

            let score: number = 0;
            pulses.value.forEach((pulse: IPulseItem) => {
              if (pulse.Title == 'Happy') {
                score += 1;
              }
              else if (pulse.Title == 'Meh') {
                score += 0.5;
              }
            });
            let tempPercentage: number = 0;
            tempPercentage = Number((100 - ((score / pulses.value.length) * 100)).toFixed(2));
            let displayPercentage = Number(((score / pulses.value.length) * 100).toFixed(0));
            this.tempStyle = {
              background: '-webkit-linear-gradient(top, #fff 0%, #fff ' + tempPercentage + '%, #db3f02 ' + tempPercentage + '%, #db3f02 100%)'
            };

            this.setState({
              status: 'showTemperature',
              items: [],
              showPulses: false,
              showLoading: false,
              showTemperature: true,
              temperature: displayPercentage
            });
            return null;
          });
        }

  }

  private _getTodayPulses(): Promise<IPulseItems> {
    return this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  private getListItemEntityTypeName(): Promise<string> {

    if (Environment.type === EnvironmentType.Local) {

      return new Promise<string>((resolve: (listItemEntityTypeName: string) => void, reject: (error: any) => void): void => {
        resolve('SP.ListItem');
        return;

      });
    }
    else if (Environment.type == EnvironmentType.SharePoint ||
      Environment.type == EnvironmentType.ClassicSharePoint) {
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
}

