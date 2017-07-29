This repository contains codes (from https://www.joshmorony.com/introduction-to-testing-ionic-2-applications-with-testbed/) used for setting-up TestBed on an ionic2 project.

1) Clone this repository

2) Run the codes from the file `testbed-prereq`
```
npm install -g karma-cli
npm install angular-cli codecov jasmine-core jasmine-spec-reporter karma karma-chrome-launcher karma-jasmine karma-mocha-reporter karma-remap-istanbul ts-node tslint tslint-eslint-rules @types/jasmine @types/node --save-dev
```
3) Copy **only** these files
- `angular-cli.json`
- `karma.conf.js`
- `src/environments/environment.prod.ts`
- `src/environments/environment.ts`
- `src/mocks.ts`
- `src/polyfills.ts`
- `src/test.ts`
- `src/tsconfig.test.json`

4) Add the following entry to the **scripts** object in **package.json**
```
"test": "ng test"
```

5) Run the following code to test!
```
npm test
```
