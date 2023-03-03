module.exports = (req, res, next) => {
  if (isNaN(req.params.id)) {
    let tipe = typeof req.params.id;
    res.status(404).send({
      message: "param must be number",
      tipe,
      id: req.params.id,
    });
  } else {
    console.log("nama mobil: ", req.params.name, req.params.id);
    res.send({
      name: req.params.name,
      id: req.params.id,
    });
    next();
  }
};
