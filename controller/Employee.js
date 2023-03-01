const dbProduct = require("../database/employee");
const path = require("path");
const fs = require("fs");

function fetchAll(req, res) {
  const data = dbProduct.fetchAll();
  res.send(data);
}

function fetchOne(req, res) {
  const id = req.params.id;
  const selectedProduct = dbProduct.fetchOne(id);
  res.send(selectedProduct);
}

function create(req, res) {
  const body = req.body;
  const result = dbProduct.create(body);
  res.send(result);
}

function update(req, res) {
  const id = req.params.id;
  const bodyData = req.body;
  const result = dbProduct.update(bodyData, id);
  res.send(result);
}

function destroy(req, res) {
  const id = req.params.id;
  dbProduct.destroy(id);
  res.status(204).send({
    message: "Product deleted",
  });
}

function checkId(req, res) {
  return res.send("checkId");
}

function welcome(req, res) {
  return res.status(200).send({
    message: "welcome",
  });
}

function upload(req, res) {
  const name = req.body.name;
  const ext = path.extname(req.file.originalname);
  const uploadedPath = req.file.path;

  fs.rename(uploadedPath, path.resolve(__dirname, "../public/images/" + name + "." + ext), (err) => {
    console.log(err);
  });

  res.send({
    message: req.file,
  });
}

module.exports = {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy,
  upload,
  checkId,
  welcome,
};
