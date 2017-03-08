import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'projectPulseStrings';
import ProjectPulse from './components/ProjectPulse';
import { IProjectPulseProps } from './components/IProjectPulseProps';
import { IProjectPulseWebPartProps } from './IProjectPulseWebPartProps';

export default class ProjectPulseWebPart extends BaseClientSideWebPart<IProjectPulseWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IProjectPulseProps > = React.createElement(
      ProjectPulse,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
