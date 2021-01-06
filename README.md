# GitHub Api Test app

## Some background information

This project fethces some data from GitHub's Rest Api (documented [here](https://docs.github.com/en/free-pro-team@latest/rest)). It is meant to be just a short assignment, but I wanted to try out initiating some stuff that I have been using in already existing projects (e.g. not sure if Redux-Saga was really needed here, but it was interesting to try it out). I started with the Zen and Octocat API's and then proceeded to the Organizations table. Then, I added last the Emojis tab just to check how easy / difficult it is to add new APIs with the current structure (and yes, it was rather simple, just the sagas and actions start to get crowded so they should probably be divided next). I also wanted to try out react-table and use its sorting and pagination functionalities, as well as try the styled-react-modal that seems to work nicely at least in simple modals with styled components. Also, I was trying to play with ErrorBoundary so that even if single route throws error, the others can still be used.

## How to work with the app

The app is deployed to Azure with GitHub Actions pipeline, you can just check it out [here](https://githubapistorage.z6.web.core.windows.net/).
If you want to run the code locally, just run `yarn install` and `yarn start` in the project directory, and the app will be opened in [http://localhost:3000](http://localhost:3000).

You can run tests with `yarn test`. The tests are also run in the GitHub Actions pipeline.
