import "dotenv/config";
import express from "express";
import cors from "cors";
import { getRouter } from "~/shared/infrastructure/helpers/router-handler";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(getRouter(__dirname));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
