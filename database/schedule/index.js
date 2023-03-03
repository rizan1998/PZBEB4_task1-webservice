const fs = require("fs");
const path = require("path");

const dbPath = path.resolve(__dirname, "./schedule.json");

function fetchAll() {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
}

function fetchOne(id) {
  const data = fetchAll();
  return data.find((d) => d.id == id);
}

function create(bodyData) {
  const data = fetchAll();
  const product = {
    id: Date.now(),
    ...bodyData,
  };
  data.push(product);
  fs.writeFileSync(dbPath, JSON.stringify(data));
  return bodyData;
}

function update(bodyData, id) {
  let data = fetchOne(id);
  data = { ...data, ...bodyData };
  const allData = fetchAll();
  const index = allData.findIndex((d) => d.id == id);
  if (!data && !index) throw new Error("Data tidak ditemukan");
  allData[index] = data;
  fs.writeFileSync(dbPath, JSON.stringify(allData));
  return data;
}

function destroy(id) {
  const data = fetchAll();
  const updatedData = data.filter((d) => d.id != id);
  fs.writeFileSync(dbPath, JSON.stringify(updatedData));
}

module.exports = {
  fetchAll,
  fetchOne,
  create,
  update,
  destroy,
};
