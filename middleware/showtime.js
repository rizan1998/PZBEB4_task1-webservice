module.exports = (req, res, next) => {
  console.log(`time ${Date.now()}`);
  next();
};
