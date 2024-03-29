// src/index.js

// import all the modules/packages
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
const dotenv = require ('dotenv');
dotenv.config();
// allow the app to use express
const app = express();
app.use(express.static(__dirname + '/public'));
// allow the app to use cookieparser
app.use(helmet());

// allow the app to use cookieparser
app.use(cookieparser());

// allow the express server to process POST request rendered by the ejs files 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allow the express server to read and render the static css file
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");

// render the ejs views
app.set("views", path.join(__dirname, "views"));

// a port number to expose the server
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  // check if user is logged in, by checking cookie
  let username = req.cookies.username;

  // render the home page
  return res.render("home", {
    username,
  });
});

app.get("/login", (req, res) => {
  // check if there is a msg query
  let bad_auth = req.query.msg ? true : false;

  // if there exists, send the error.
  if (bad_auth) {
    return res.render("login", {
      error: "Invalid username or password",
    });
  } else {
    // else just render the login
    return res.render("login");
  }
});

app.get("/admin", (req, res) => {
  // get the username
  let username = req.cookies.username;
  console.log('nu am',username);
 if(username ===undefined) {
    return res.redirect("/login?msg=fail");
 }
  // render welcome page
  return res.render("admin", {
    username,
  });
});

app.post("/process_login", (req, res) => {
  // get the data
  let { username, password } = req.body;

  // fake test data
  let userdetails = {
    username: "LinkAcademy",
    password: "123456",
  };

  // basic check
  if (
    username === userdetails["username"] &&
    password === userdetails["password"]
  ) {
    // saving the data to the cookies
    res.cookie("username", username,{
        maxAge: 4 * 60 * 60 * 1000,// expires works the same as the maxAge
       secure: true, 
       httpOnly: true, 
       sameSite: 'lax'
    }); 
   
    // redirect
    return res.redirect("/admin");
  } else {
    // redirect with a fail msg
    return res.redirect("/login?msg=fail");
  }
});

app.get("/logout", (req, res) => {
  // clear the cookie
  res.clearCookie("username");
  // redirect to login
  return res.redirect("/login");
});

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));