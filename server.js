const express = require("express");
// const serveStatic = require("serve-static");
const path = require("path");

let app = express();

const staticAssetsPath = path.resolve(__dirname, "dist");
app.use(express.static(staticAssetsPath));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.route("/*").get(function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

module.exports = app;
// app.use(serveStatic(__dirname + "/dist"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "/dist", "index.html"));
//   });
// }
