const express = require("express");
const axios = require("axios");
const { parseString } = require("xml2js");

let router = express.Router();

const parseStringPromise = str =>
  new Promise((resolve, reject) => {
    parseString(str, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

router.get("/:version/:model/:carier", async (req, res) => {
  try {
    if (req.params.version === "stable") {
      const sourceValue = await axios
        .get(
          `http://fota-cloud-dn.ospserver.net/firmware/${req.params.carier}/${
            req.params.model
          }/version.xml`
        )
        .then(res => {
          return res.data;
        });
      const retVal = await parseStringPromise(sourceValue);
      console.log(retVal.versioninfo.firmware);
      res.status(200).json(retVal.versioninfo.firmware);
    } else if (req.params.version === "test") {
      const sourceValue = await axios
        .get(
          `http://fota-cloud-dn.ospserver.net/firmware/${req.params.carier}/${
            req.params.model
          }/version.test.xml`
        )
        .then(res => {
          return res.data;
        });
      const retVal = await parseStringPromise(sourceValue);
      console.log(retVal.versioninfo.firmware);
      res.status(200).json(retVal.versioninfo.firmware);
    } else {
      res.status(200).json({ bbbb: "bbbbb" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
