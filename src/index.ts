import express from "express";
const app = express();
const port = 8001;
import resizes from "./routes/resize";

app.use("/", resizes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default app;
