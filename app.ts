import express from "express";
import router from "./routes/index.js";

const app = express();
app.use("/", router);

const DEFAULT_PORT = 3000;
const PORT = DEFAULT_PORT || process.env.PORT;
console.log(`Listening on port ${PORT}`);
app.listen(PORT);
