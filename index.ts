import express, { Application, Request, Response } from "express";
require("./Config/db");
import Routes from "./Routes/route";

const app: Application = express();
const port: number = 2001;

app.use(express.json());

app.all("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Bitch don't ask i'm running 🤨🙄😏🤔",
  });
});

app.use("/api", Routes);

app.listen(port, () => {
  console.log("Done!");
});
