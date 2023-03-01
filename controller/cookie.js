function cookieReader() {
  console.log(req.cookies);
  res.send({
    message: "cookie read",
  });
}
function cookieSave(req, res) {
  const data = req.query;
  res.cookie("bootcamp_data", data, { expire: 360000 + Date.now() });
  res.send(data);
}

function sessionSave(req, res) {
  const data = req.query;
  req.session.bootcamp_data = data;
  res.send(req.session);
}

module.exports = {
  cookieReader,
  cookieSave,
  sessionSave,
};
