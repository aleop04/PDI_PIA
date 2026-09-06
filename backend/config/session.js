import session from "express-session";
import MySQLStoreFactory from "express-mysql-session";

import { db } from "../db.js";


const MySQLStore = MySQLStoreFactory(session);


const sessionStore = new MySQLStore(
    {
        createDatabaseTable: true
    },
    db
);


export const sessionMiddleware = session({

    name: "pdipia.sid",

    secret: process.env.SESSION_SECRET,

    store: sessionStore,

    resave: false,

    saveUninitialized: false,

    cookie: {

        httpOnly: true,

        secure: false,

        sameSite: "lax",

        maxAge: 1000 * 60 * 60 * 24 * 7

    }

});