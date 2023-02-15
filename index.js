const express = require("express");
const path = require("node:path");
const fs = require("node:fs");

const directoryPath = "./api/api.js";

if (fs.existsSync(directoryPath)) {
  const app = require("./api/app");
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get(["/", "/shop", "/votes", "/bn", "/status"], (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
  });

  app.get("/discord", (req, res) => {
    const url = req.query.invLink;
    const uuid = req.query.uuid;
    const error = req.query.error;
    const reDir = req.query.redirect;
    if (
      uuid !== "xDza9LsDxAd1%xiaXsHSsaOjs91ugX91j81kOsaBc8jLAdsE80KlAsDfgF72"
    ) {
      return res.send("Invalid UUID.");
    } else if (error === "true") {
      res.status(500).send("Something went wrong.");
    } else if (!reDir) {
      return res.send("No redirect.");
    } else if (!url) {
      return res.redirect(
        "/discord/?invLink=FcgQ6wv4XW&uuid=xDza9LsDxAd1%xiaXsHSsaOjs91ugX91j81kOsaBc8jLAdsE80KlAsDfgF72&error=false&redirect=discord.gg%20invite%20FcgQ6wv4XW"
      );
    }
    res.redirect(`https://discord.gg/invite/${url}`);
  });

  app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`);
  });
} else {
  try {
    console.log("App file not found creating one for you..");

    const fileName = "app.js";
    const fileContent =
      'const express = require("express");\nconst app = express();\nmodule.exports = app;\n';

    fs.writeFile(
      path.join(__dirname, `/api/${fileName}`),
      fileContent,
      (error) => {
        if (error) {
          console.error(error);
          return;
        }

        console.log(`Successfully created the file, restart the server pls...`);
        process.exit();
      }
    );
  } catch (err) {
    console.error(err);
  }
}
