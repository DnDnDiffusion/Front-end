import formidable from "formidable";
import pdf from "pdf-parse";
import { readFileSync } from "fs";

export default function handler(req, res) {
  // console.log("req in api: ", req.body);
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    // console.log("fields: ", fields);
    // console.log("files: ", typeof files.file, Object.keys(files.file), files.file.filepath);

    const dataBuffer = readFileSync(files.file.filepath);
    pdf(dataBuffer).then((data) => {
      // console.log("data: ", data);
      //loop through data.text.split('\n') to get the data you need
      const playerData = {}; //could add better typing here ex. {name: string, class: string, xp: number}
      data.text.split("\n").forEach((line, i) => {
        if (line == "") return;
        console.log(`line ${i}: `, line); //there is a better way to do this madness
        if (i == 4) playerData.name = line;
        if (i == 6) playerData.class = line;
        if (i == 8) playerData.xp = line;
        if (i == 10) playerData.playerName = line;
        if (i == 12) playerData.race = line;
        if (i == 14) playerData.background = line;
        if (i == 22) playerData.str = [line];
        if (i == 23) playerData.str.push(line);
        if (i == 25) playerData.dex = [line];
        if (i == 26) playerData.dex.push(line);
        if (i == 28) playerData.con = [line];
        if (i == 29) playerData.con.push(line);
        if (i == 31) playerData.int = [line];
        if (i == 32) playerData.int.push(line);
        if (i == 34) playerData.wis = [line];
        if (i == 35) playerData.wis.push(line);
        if (i == 37) playerData.cha = [line];
        if (i == 38) playerData.cha.push(line);
        if (i == 39) playerData.profBonus = line;

        // if (i == 81) playerData.ac = line;
        // if (i == 82) playerData.armorWorn = line;

        // if (i == 121) playerData.bgFeature = line;
        // if (i == 122) playerData.bgFeatureDesc = line;
        // if (i == 123) playerData.bgTraits = line;
        // if (i == 125) playerData.bgIdeal = line;
        // if (i == 126) playerData.bgBond = line;
        // if (i == 127) playerData.bgFlaw = line;

        // if (i == 129) playerData.creatureType = line;
        // if (i == 130) playerData.creatureAge = line;
        // if (i == 131) playerData.creatureSize = line;
      });

      res.status(200).json(playerData);
    });
  });
  // res.status(200).json({ status: "Done" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
