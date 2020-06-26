import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//router imports
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import { localsMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
//The middleware will parse the Cookie header on the request and expose the cookie data as the property req.cookies and, if a secret was provided, as the property req.signedCookies. These properties are name value pairs of the cookie name to cookie value.
app.use(bodyParser.json());
//same but parsing the body
app.use(bodyParser.urlencoded({ extended: true }));
//url encoded so to distinguish ampersand
//secure the HTTP headers
app.use(morgan("dev")); //shows logs
app.use(localsMiddleware);

//routes
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter);

export default app;
