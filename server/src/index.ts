import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`API escutando em http://localhost:${PORT}`)
);
