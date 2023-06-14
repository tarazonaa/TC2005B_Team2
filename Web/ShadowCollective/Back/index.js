import express from "express";
import bodyParser from "body-parser";
import {
    usersRouter,
    statsRouter,
    progressRouter,
    eventRouter,
    gadgetRouter,
} from "./routes/index.js";
import cors from "cors";

import mysql from "mysql2/promise";
import { ENV, PORT } from "./const.js";


// extend the proxy depending on the endpoint
app.use('/api/users', usersRouter);
app.use('/api/stats',statsRouter);
app.use('/api/progress', progressRouter);
app.use('/api/event', eventRouter);
app.use('/api/gadget', gadgetRouter);

app.use(express.json());
app.use(cors());

//Ruta por defualt
app.get("/", (req, res) => {
    res.send(`Lo siento Octavio ya no tenemos el puerto expuesto 😈`);
});

// ----- Body Parser -----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

//Connect to DB
export default async function connectDB() {
    return await mysql.createConnection(ENV);
}
