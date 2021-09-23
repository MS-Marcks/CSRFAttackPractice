import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import session from "express-session";
import route from "./route/route"
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "Secrets",
    resave: false,
    saveUninitialized: false
}))

app.set("views", path.join(__dirname, "view"))
app.engine("hbs", handlebars({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "view"),
    extname: ".hbs"
}))
app.set("view engine", "hbs");

app.use("/", route);

app.listen(PORT, (req, res) => {
    console.log("liste", PORT);
})



