# academic-staff-assessment

> Innopolis Software Project course

## Build Setup

### Environment variables

|environment variable|description|
|--------------------|-----------|
|`BASE_URL_BROWSER`* |URL of backend as to be used in the browser (client-side)|
|`BASE_URL_SERVER`*  |URL of backend when accessing from server (for SSR). Different only when using Docker|
\* marks required

### Running
There are 2 ways of running the project. First, using npm directly:

``` bash
# first, install dependencies
$ npm install

# then serve with hot reload at localhost:3000
$ npm run dev

# or build for production and launch server
$ npm run build
$ npm run start
```

Or using the [Docker image](./Dockerfile) provided. If using docker-compose from the main repo, the environment variables should be set in a _.env_ file in the root of this directory.
Example _.env_ contents when running locally:
```bash
BASE_URL_SERVER=http://backend:1202
BASE_URL_BROWSER=http://localhost
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
