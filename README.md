react-webpack-node
==================

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Boilerplate for React application with webpack using Facebook's Flux running on a node express server. Does not have server-side rendering yet.
Includes a Procfile to enable deployment to heroku.

Mission
=================
The aim of this repo is to incorporate the best practices to building a powerful website with Reactjs and Node.

Instructions
================
1. `npm install`
2. `npm start` to run locally

Bundling with webpack
================
1. `webpack` will run configurations within webpack.config.js.
2. `webpack --watch` to watch and recompile for changes.

Setting up your Database
================
1. `brew update`
2. `brew install mongodb`
3. `mongod` (Make sure you have the permissions to the directory /data/db)

Deploying to Heroku
================
1. `heroku create`
2. `heroku app:rename newname` if you need to
3. Run `webpack` . Commit and push the changes (I know, not the best idea).
4. `git push heroku master`
5. `heroku open` to open the link
6. If you wish to have a database setup on Heroku, remember to use `heroku addons:add mongohq` or `heroku addons:add mongolab`. 

Todo:
================
1. Include an easy set up for database (postgresql).
2. Include sass stylesheets for components.
Currently it is still an external css file in the header. Still not large enough to warrant a warning that the [above-the-fold](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent) content of the page is too large.
3. Improve webpack config for good build and webpack --watch
4. Perhaps include a gulpfile.js (if webpack functionality does not suffice).
5. Let me know!

How to Contribute:
=================
1. As this repo is still in its baby stages, any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.



Credits to [webpack-server-side-example](https://github.com/webpack/react-webpack-server-side-example), [example-app](https://github.com/webpack/example-app), [flux-examples](https://github.com/facebook/flux/tree/master/examples), [node-express-mongo-demo](https://github.com/madhums/node-express-mongoose-demo) and [web-starter-kit](https://github.com/google/web-starter-kit).