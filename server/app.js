require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");
const cors = require('cors');
const controllers = require("./controllers");

app.use(Express.json());

app.use("/user", controllers.userController);

app.use(require("./middleware/validate-jwt"));
app.use("/journal", controllers.journalController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: This thing is working.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: You messed up, homie. Erorr = ${err}`);
    });

app.listen(3000, () => {
    console.log(`[Server]: Good job, this thing is working.`);
});