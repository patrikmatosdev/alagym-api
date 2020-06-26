module.exports = function (req, res) {
  res.json([
    {
      id: 1,
      type: "academy",
      title: "Academia",
      WorkoutId: 1,
    },
    {
      id: 1,
      type: "home",
      title: "Casa",
      WorkoutId: 2,
    },
    {
      id: 1,
      type: "outher",
      title: "Outros Lugares",
      WorkoutId: 3,
    },
  ]);
};
