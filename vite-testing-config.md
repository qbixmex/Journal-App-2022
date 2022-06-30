# Jest + React Testing Library Installation and configuration  

## React + Vite Projects

### 1. Dev Dependencies: ( just copy and paste in terminal and hit enter )

```
yarn add --dev \
jest \
babel-jest \
@babel/preset-env \
@babel/preset-react \ 
@testing-library/react \
@types/jest \
jest-environment-jsdom
```

### 2. Optional: If we use Fetch API in our project:

```
yarn add --dev whatwg-fetch
```

### 3. Update ```package.json``` scripts

```
"scripts: {
  ...
  "test": "jest"
```

### 4. Create Babel configuration: ```babel.config.js``` in root files.

```
module.exports = {
  presets: [
    [ '@babel/preset-env', { targets: { esmodules: true } } ],
    [ '@babel/preset-react', { runtime: 'automatic' } ],
  ],
};
```

### 5. Optional Jest config and setup: ```jest.config.js```

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

```jest.setup.js```

```
import 'whatwg-fetch';
```
