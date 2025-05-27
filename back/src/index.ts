import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata";


AppDataSource.initialize()
    .then(() => {
    app.listen(PORT, () => {
    console.log(`Server up and running on port: http://localhost:${PORT}`)
});
    })
    .catch((error) => console.log(error))