# express-sequelize
A personal reference on the basics of sequeilze


### What's new in this repo?

- How to do a basic express setup with sequelize.
- How to connect the sequelize ORM with postgres.

### Needed Dependencies:

In addition to express and normal ejs dependicies, we have to install postgres and sequelize.
```
npm i pg sequelize
```

### Initalize Sequelize:

In this configuration I have sequelize cli installed globally.
```
npm install --save-dev sequelize-cli
```

```
sequelize init
```

This will create a config, migrations, and models folder.

### Configure sequelize to use postgres (or any other database).


- From inside the config folder, open config.json.

You'll see something like this.
```json
{
  "development": {
    "username": default_username,
    "password": default_password,
    "database": "userapp",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": default_username,
    "password": default_password,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": default_username,
    "password": default_password,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- You'll want to change your username and password to what you have setup with your dialect language.
- For example, here I used PostreSQL and was on Mac OS, thus I didn't require a username or password upon setup.
- You'll also change the dialect and database to whatever you're creating. If it's a new database then create one and put it's name here.

### Create and initalize database(s):
Using the following command created a database.
```
createdb <databaseName>
```
Following that we can create new models for the database.
```
TODO will add to this later
```