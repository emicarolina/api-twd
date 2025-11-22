import express from "express";
import cors from "cors";
import charactersRoutes from "./routes/characters.js";
import episodesRoutes from "./routes/episodes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

// usar as rotas modularizadas
app.use("/characters", charactersRoutes);
app.use("/episodes", episodesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API-TWD rodando na porta ${PORT}`));
