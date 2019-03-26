import * as express from "express"
import { get } from "./router"
import { handlerAdapter } from "./handlerAdapter"
import { indexHandler } from "./indexHandler"
import { wikipediaHandler } from "./wikipediaHandler"

export const app: express.Application = express()

app.use(get("/", handlerAdapter(indexHandler)))

app.use(get("/:name/", handlerAdapter(wikipediaHandler)))