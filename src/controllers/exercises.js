const parseClient = require("../util/parseClient");

async function listExercises(req, res) {
  const response = await parseClient.get("/classes/exercises");
  res.json(response.data);
}

async function listTypes(req, res) {
  const response = await parseClient.get("/classes/listTypes");
  res.json(response.data);
}

module.exports = {
  listExercises,
  listTypes,
};
