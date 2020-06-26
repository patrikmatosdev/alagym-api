const parseClient = require("../util/parseClient");

async function getClass(req, res) {
  const response = await parseClient.get(`/classes/${req.params.className}`);
  res.json(parseId(response.data.results));
}

function parseId(results) {
  if (Array.isArray(results)) {
    return results.map((v) => {
      v = {
        id: v.objectId,
        ...v,
      };

      delete v.objectId;
      return v;
    });
  } else if (typeof results === "object") {
    results = {
      id: results.objectId,
      ...results,
    };
    delete results.objectId;
  }
  return results;
}

module.exports = {
  getClass,
};
