<!-- https://github.com/wearehive/project-guidelines -->

![circleci status](https://circleci.com/gh/onelastjedi/rapme.svg?style=shield&circle-token=a9cbae75af694a4d454c3f549481b3b692e278ba)

# Rapme

> Epic text-based battle rap app

I created this app to demonstrate how to use the modern JavaScript stack for creating full-featured SPA without any self-hosted backend.

Feel free to discuss about whole architecture, security, etc.

Check live app here: [Rapme](https://dist-pxthhegius.now.sh)

<!-- Rapme at Slack: [Rapme](https://rapme.slack.com) -->

## Build

Build app by `yarn build`.

## Test

Perform unit & e2e tests by `yarn test`.


## Continuous integration

You wanna use tools for testing your code automatically (like [CircleCI](https://circleci.com), [Travis](https://travis-ci.org), etc). Then, you can host SPA's as a static website. This app deploying to AWS S3 automatically from CircleCI workflow.

Configuration for test, build and deploy located in [circle.yml](circle.yml).

## Issues

I ran into several problems in developing. Check the [issues](https://github.com/onelastjedi/rapme/issues) if you catch errors.

## SSL support

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Anton Komarenko aka J.D.
