const dbProduct = require("../database/schedule");

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
  const nama = req.body.nama;
  const hari = req.body.hari;
  const id = req.body.id;
  const body = req.body;

  const selecteSchedule = dbProduct.fetchOne(id);
  if (nama == selecteSchedule.nama && hari == selecteSchedule.hari) {
    res.status(400).send({
      message: "cannot add data, the data is exits",
    });
  }

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

module.exports = {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy,
};
