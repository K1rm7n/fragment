# Nexus Framework v1.0

The most advanced Framework for developing applications of any
complexity: from SaaS platforms to modern mobile applications in
weeks, not months

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000` and API on `http://localhost:8055`:

```bash
# yarn
yarn dev
```

After `http://localhost:3000`

After launching, please follow [this link](http://localhost:3000)
to learn more about the benefits of the Framework

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn start
```

## Dokku setup

Create project

```bash
# yarn
dokku apps:create fragment
```

Create and link postgres to your project

```bash
# yarn
dokku postgres:create fragment_db
dokku postgres:link fragment_db fragment
```

Configure your production env files (.production) and Push your project to dokku or use Gitlab pipelines

❇️ That's all!
