# express-sequelize
A personal reference on the basics of sequeilze


### What's new in this repo?

- How to do a basic express setup with sequelize.
- How to connect the sequelize ORM with postgres.

## Needed Dependencies:

In addition to express and normal ejs dependicies, we have to install postgres and sequelize.
```
npm i pg sequelize
```

## Initalize Sequelize:

In this configuration I have sequelize cli installed globally.
```
npm install --save-dev sequelize-cli
```

```
sequelize init
```

This will create a config, migrations, and models folder.

## Configure sequelize to use postgres (or other db).


- From inside the config folder, open config.json.

You'll see something like this.
```json
{
  "development": {
    "username": "default_username",
    "password": "default_password",
    "database": "userapp",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "default_username",
    "password": "default_password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "default_username",
    "password": "default_password",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- You'll want to change your username and password to what you have setup with your dialect language.
- For example, here I used PostreSQL and was on Mac OS, thus I didn't require a username or password upon setup.
- You'll also change the dialect and database to whatever you're creating. If it's a new database then create one and put it's name here.

## Create and initalize database(s):
Using the following command created a database.
```
createdb <databaseName>
```
Following that we can create new models for the database.
```
sequelize model:create --name <databaseName> --attributes <atributeName>:<attributeType>
```
This will create a a new model and migration. To actually "commit" this model to the database, you have to run the following command:
```
sequelize db:migrate
```
To undo these changes, run this command:
```
sequelize db:migrate:undo
```

## Accessing The Database From Inside Express.

Address the documentation for more ways to create, read, update, delete.

#### To Create
```js
var db = require("./models");
db.modelName.create({
  atribute: 'Atribute Value',
}).then(function(result) {
  // access the result here.
});
```
#### To Read

```js
db.modelName.findOne({
  where: {
    atribute: "atributeValue",
  },
}).then(function(result) {
  // Do something once promise is fullfiled here.
});
```

#### To Update
```js
db.modelName.update({
  atribute: 'updated value',
}, {
  where: {
    searchAtribute: 'atribute value'
  }
}).then(function(result) {
  // Do something once promise is fullfiled here.
});
```

#### To Delete.
```js
db.modelName.destroy({
  where: {
    atribute: "atributeValue",
  },
}).then(function(result) {
  // Do something once promise is fullfiled here.
});
```


