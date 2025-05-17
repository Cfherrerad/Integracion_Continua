import { PORT } from "./config/envs";
import app from "./server";

app.listen(PORT, () => {
    console.log(`Server up and running on port: http://localhost:${PORT}`)
});

