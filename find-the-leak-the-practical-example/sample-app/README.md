# Weather APP

A sample application that returns sample weather data for given geographic coordinates.

## Setup

1. Clone this repository and navigate to the `sample-app` directory.
2. Run `yarn install` to install all dependencies.
3. Run `yarn build` to build application.
4. RUN `yarn start` to start the application.

> By default, application will start on port `3000`. If you want to change it, add an environment `APP_PORT` with desired port, e.g. `APP_PORT=8080 yarn start`.


## Usage

This is a simple Rest API application, which provides 2 endpoints:
- `/` - A simple "Hello World" text
- `weather` - Endpoint which provides a mocked weather data. This endpoint requires an additional query parameters: `longitude` and `latitude` with a coordinates.
