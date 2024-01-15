import express from "express";
import exphbsModule from "express-handlebars";

const exphbs = exphbsModule.create();
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();

app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index.handlebars", { messages: messages });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
