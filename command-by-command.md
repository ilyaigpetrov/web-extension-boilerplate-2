# Command by Command Setup

## Empty NPM/GIT Project

1. Create repo on GitHub/GitLab/etc
2. `git clone...`
3. Add `.gitignore` and `LICENSE`
4. `npm init`

## Webpack

1. `npm install --save-dev webpack`
2. `npm install --save-dev webpack-cli`
3. Add to `package.json`:
```json
"scripts": {
  "build": "webpack --mode production"
}
```
4. `npm install --save-dev copy-webpack-plugin`

## Babel

1. `npm install @babel/core babel-loader @babel/preset-react --save-dev`
2. `vim .babelrc`:
```json
{
  "presets": ["@babel/preset-react"]
}
```
3. `vim webpack.config.js`


