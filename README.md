# asl-prototypes

This is a collection of HTML prototypes for user research and templates of common pages and patterns in the Animals in scientific procedures e-licensing (ASPeL) service.

It was originally created from a previous version of the Home Office prototype kit (the latest version of which is available at https://design.homeoffice.gov.uk/get-started/start-prototype). 

The prototype is hosted on Railway.app, you can find it [here](https://asl-prototypes-production.up.railway.app/)

## Requirements

Node version 18 or higher.

The prototype may run on older versions, but has not been tested.

## Installation

Download the prototype from [https://github.com/UKHomeOffice/asl-prototypes](https://github.com/UKHomeOffice/asl-prototypes)

Navigate to `./asl-prototypes` directory 

Run `npm ci` to install dependencies

To start the prototype run `npm start`

The prototype will then be visible on [http://localhost:3000](http://localhost:3000)

## Notes

The prototype authentication typically needs to be disabled when testing with users on POISE machines. You can do this by editing the environment variable `USE_AUTH` via Render, or within the config file in `apps/config.js` with the `useAuth` setting.
