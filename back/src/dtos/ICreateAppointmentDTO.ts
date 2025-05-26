import IAppointment from "../interfaces/IAppointment";

type ExcludedProperties = "id" | "status";

interface ICreateAppointmentDTO extends Omit<IAppointment, ExcludedProperties> {}

export default ICreateAppointmentDTO;