// Server File using Boiler Plate
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: process.env.SESSION_SECRET, // INCLUDE THE SECRET IN YOUR .env FILE SO IT CAN'T BE USED - the secret parameter allows express-session to use it to encrypt the sessionID 
  cookie: {
    maxAge: 1800000, // Setting max age to be 30 minutes of max time on the page -- this is mainly for testing purposes can be later
    httpOnly: true, // default attribute is set, stating it's a HTTP cookie
    secure: false, // default is false - this is only used for HTTPS but our current use is for HTTP
    sameSite: 'strict', // setting cookie to only be used for the localhost:3001 url or example.com
  },
  resave: false, // don't want the c
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
