module.exports = (err, req, res, next) => {
  console.log(err.stack);
  console.log(err.message);

  res.status(500).send({
    message: "Opps! someting gone wrong",
  });
};
