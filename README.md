# Finance API

Finance is a Node API for exposing bank transactions using GraphQL and Prisma ORM.

## Installation

Inside the directory, use the package manager npm to install.

```bash
npm install
```

## Database creation

You'll need to create the database. To accomplish that, you can use the docker-compose command below. All the necessary configurations are done.

```bash
docker-compose up -d
```

## The .env variable

In order to configure Prisma ORM, you need to create an env var that holds your database configuration. The env should have the following form

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>?schema=public"
POSTGRES_USER=<username>
POSTGRES_PASSWORD=<password>
POSTGRES_DB=<database_name>
```

## Creating the migrations

After the database creation, you should run the migrate command to generate the tables.

```bash
npx prisma migrate dev --name init
```

## Seeding database

Now you are ready to populate the database and start your application. To insert the data, you should run

```bash
npx prisma db seed
```


## Running to the hills

If all the steps before were successfully executed, you can run the API.

```bash
npm run dev
```


## License

[MIT](https://choosealicense.com/licenses/mit/)