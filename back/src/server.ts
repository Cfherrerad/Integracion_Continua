import express, {Express} from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router)

export default app;