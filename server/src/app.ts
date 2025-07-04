import express from "express";
import cors from "cors";
import { json } from "body-parser";
import obraRouter from "./routes/obra.routes";

export const app = express();

app.use(cors());
app.use(json());
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});
app.use("/api/obras", obraRouter);
