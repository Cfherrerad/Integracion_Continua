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
exports.cancelAppointmentService = exports.createAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const IAppointment_1 = require("../interfaces/IAppointment");
const usersService_1 = require("./usersService");
const getAppointmentsService = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (userId = null) {
    const options = {};
    if (userId) {
        options.where = {
            user: {
                id: userId
            }
        };
    }
    return yield data_source_1.appointmentRepository.find(options);
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.appointmentRepository.findOne({
        where: { id },
    });
    if (!foundAppointment)
        throw new Error("Appointment not found");
    return foundAppointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const createAppointmentService = (createAppointmentDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, usersService_1.getUserByIdService)(createAppointmentDTO.userId);
    const newAppointment = yield data_source_1.appointmentRepository.create({
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        user: user,
        status: IAppointment_1.AppointmentStatus.ACTIVE,
    });
    const results = yield data_source_1.appointmentRepository.save(newAppointment);
    return results;
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppontment = yield (0, exports.getAppointmentByIdService)(id);
    if (foundAppontment.status == IAppointment_1.AppointmentStatus.CANCELLED)
        throw new Error("Appoinment status is already cancelled");
    foundAppontment.status = IAppointment_1.AppointmentStatus.CANCELLED;
    const results = yield data_source_1.appointmentRepository.save(foundAppontment);
    return results.id;
});
exports.cancelAppointmentService = cancelAppointmentService;
