import app from "./app.js";
import connectDB from "./config/db.js";
import { PORT } from "./config/env.js";

console.log("MONGO_URI VALUE:", process.env.MONGO_URI);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
