# slowfactory.org

## Development

### Pre-Setup Requirements

Uses [Jekyll static site system](https://jekyllrb.com/)

Requires `ruby` with `rubygems`, `node` and `yarn`


##### Install Jekyll, Ruby & Bundler

Follow [Jekyll Setup Instructions](https://jekyllrb.com/docs/installation/macos/)



##### Install Node, `nvm` & `yarn`

To run local build of `css` & `js`

  Node:
  1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
  1. Relaunch terminal and confirm it worked: `nvm --version`
  1. Check installed node versions `nvm list`
  1. Install latest LTS version `nvm install v10.16.3` or `nvm install v12.16.3`
  1. Set this version as default `nvm use <node-version>`
  1. Check your node version with `node -v`

  NPM:
  1. `npm` is installed as a package with Node. Check the version `npm -v`
  1. Upgrade to latest `npm install -g npm@latest`

  Yarn:
  1. `npm install -g yarn`
  1. Check the version `yarn -v`


### One-time Setup

1. `bundle install`
1. `yarn install`


### Local Development

Open 2 terminal windows with the below commands, then go in the browser to http://localhost:4000

1. `yarn dev-webpack` in one terminal window
1. `yarn dev` in another


### Deploy

We’re hosting on GitHub pages, by building `jekyll` to the `docs` folder, and merging to the `deploy` branch.

We’re no longer hosting on [Firebase](https://console.firebase.google.com/u/0/project/slow-factory-foundation/)

So now it’s set up for firebase, just run `yarn run deploy-stage` or `yarn run deploy-production`.
