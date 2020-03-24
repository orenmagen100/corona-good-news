const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

let app = express();
app.use(serveStatic(path.join(__dirname, "dist")));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
