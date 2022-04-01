const express = require('express');
const config = require('./config.json')
const router = require('./routes/root')
const errorHandler = require('./middleware/errorMiddleware')
const cors = require("./middleware/corsMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const app = express();

app.use(cors)
app.use(express.json())
app.use(cookieParser(config.SECRET));
app.use(express.static(path.join(`${__dirname}/static`)));
app.use(
    session({
        key: "user",
        secret: config.SECRET,
        resave: false,
        saveUninitialized: false,
        domain: "http://localhost",
        path: "/",
        cookie: { maxAge: 86400000, httpOnly: true },
    })
);
app.use('/api', router)
//Обработка ошибок. Всегда последняя
app.use(errorHandler)

app.listen(config.PORT, () => {
    console.log(`Server started on port: ${config.PORT}`)
})
