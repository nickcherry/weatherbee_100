# Weatherbee-100

A ventilator simulation app, work in progress available at [https://s3.amazonaws.com/weatherbee-100/index.html](https://s3.amazonaws.com/weatherbee-100/index.html).

## Development Setup

### Installing Dependencies

After installing [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/), run the following from the project's root:

```shell
npm install
```

After dependencies have been installed, start the local development server (powered by [Webpack](https://webpack.github.io/docs/)) by running the following command:

```shell
npm start
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Tests

To start the test suite, run the following from the project root:

```shell
npm test
```

## Deployment to AWS

Create a `secrets.json` file, which follows the pattern defined in `secrets.template.json` (but has real credentials), then run the following from the project root to deploy to AWS:

```shell
npm run deploy
```

## Building for iOS Wrapper

Assuming that the [Weatherbee 100 Wrapper](https://github.com/nickcherry/weatherbee_100_wrapper) project has been pulled down and lives in a `weatherbee_100_wrapper` directory as a sibling to `weatherbee_100`, run the following to build iOS-friendly assets and move them to `weatherbee_100_wrapper/www`:

```shell
npm run build-for-wrapper
```

Once the assets have been built, you'll need to follow the [Weatherbee 100 Wrapper](https://github.com/nickcherry/weatherbee_100_wrapper) instructions to rebuild the iOS app.
