"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentsController = exports.createAppointmentsController = exports.getAppointmentsByIdController = exports.getAppointmentsController = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId ? Number(req.params.userId) : null;
        const appointments = yield (0, appointmentsService_1.getAppointmentsService)(userId);
        res.status(200).json({
            success: true,
            data: appointments,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
});
exports.getAppointmentsController = getAppointmentsController;
// GET /appointments => Obtener el detalle de un turno específico.
const getAppointmentsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentsService_1.getAppointmentByIdService)(Number(id));
        res.status(200).json({
            succes: true,
            data: appointment,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
});
exports.getAppointmentsByIdController = getAppointmentsByIdController;
// POST /appointments/schedule => Agendar un nuevo turno.
const createAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        const appointment = yield (0, appointmentsService_1.createAppointmentService)({ date, time, userId });
        res.status(201).json({
            succes: true,
            data: appointment,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
exports.createAppointmentsController = createAppointmentsController;
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
const cancelAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointmentId = yield (0, appointmentsService_1.cancelAppointmentService)(Number(id));
        res.status(201).json({
            succes: true,
            data: appointmentId,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
});
exports.cancelAppointmentsController = cancelAppointmentsController;
