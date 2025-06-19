"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsControllers_1 = require("../controllers/appointmentsControllers");
const appointmentsRouter = (0, express_1.Router)();
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
// appointmentsRouter.get("/",getAppointmentsController);
appointmentsRouter.get("/user/:userId", appointmentsControllers_1.getAppointmentsController);
// GET /appointments => Obtener el detalle de un turno específico.
// appointmentsRouter.get("/:id",getAppointmentsByIdController);
// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentsControllers_1.createAppointmentsController);
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", appointmentsControllers_1.cancelAppointmentsController);
exports.default = appointmentsRouter;
