# GitHub Api Test app

## Background

This app fetches and renders some data from GitHub's Rest Api (documented [here](https://docs.github.com/en/free-pro-team@latest/rest)). It was initiated with create-react-app, and it uses e.g. react-table, styled-react-modal and styled-components. It is meant to be just a short test, but I wanted to try out how to really use some stuff that I have seen / been using a little bit in already existing projects.

## How to work with the app

The app is deployed to Azure with GitHub Actions pipeline, you can just check it out [here](https://githubapistorage.z6.web.core.windows.net/).
If you want to run the code locally, just run `yarn install` and `yarn start` in the project directory, and the app will be opened in [http://localhost:3000](http://localhost:3000).

You can run tests with `yarn test`. The tests are also run in the GitHub Actions pipeline.
