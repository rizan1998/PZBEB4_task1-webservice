const express = require("express");
const apicache = require("apicache");
const cache = apicache.middleware;
const routesApi = express.Router();

const EmployeeCtrl = require("../controller/employee");
const ScheduleCtrl = require("../controller/Schedule");
const cookieController = require("../controller/cookie");

const multer = require("multer");

const multerUpload = multer({
  dest: "public/images/",
});

// Employee api
routesApi.get("/", EmployeeCtrl.welcome);

routesApi.get("/employees", cache(1000 * 60 * 1), EmployeeCtrl.fetchAll);

routesApi.get("/employee/:id", EmployeeCtrl.fetchOne);

routesApi.post("/employee", EmployeeCtrl.create);

routesApi.post("/employee/upload", multerUpload.single("image"), EmployeeCtrl.upload);

routesApi.put("/employee/:id", EmployeeCtrl.update);

routesApi.delete("/employee/:id", EmployeeCtrl.destroy);

// Schedule api
routesApi.get("/schedules", cache(1000 * 60 * 1), ScheduleCtrl.fetchAll);

routesApi.get("/schedule/:id", ScheduleCtrl.fetchOne);

routesApi.post("/schedule", ScheduleCtrl.create);

routesApi.put("/schedule/:id", ScheduleCtrl.update);

routesApi.delete("/schedule/:id", ScheduleCtrl.destroy);

routesApi.get("/cookies-read", cookieController.cookieReader);
routesApi.get("/cookies-send", cookieController.cookieSave);
routesApi.get("/session-send", cookieController.sessionSave);

module.exports = routesApi;
