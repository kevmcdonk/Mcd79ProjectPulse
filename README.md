## Mcd79 project-pulse

Set up using the standard @microsoft/sharepoint yeoman generator and Office UI Fabric React, this is a fairly simple webpart that demonstrates writing a list to SharePoint as part of the deployed add-in which is then read and written to.

The webpart slots on a page for any site and allows users of the site to say how they are feeling about the project today. This then shows them the temperature of the project for that day.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

#### Set up items

To configure for your own site, you will need to update the CDNBasePath in write-manifests.json to your own CDN path. My own project is set to another SharePoint site but I will be migrating it to the preview of the Office 365 CDN - https://dev.office.com/blogs/office-365-public-cdn-developer-preview-release.

### TODO

Future roadmap includes:

* Show number of different pulses in wide view but not in narrow/mobile view
* Ensure that people can only submit one pulse per day
* Allow people to change their pulse once submitted
* Create a weekly/monthly view webpart
* Deal with larger sets of data (the good old 5000 limit fun and games)




