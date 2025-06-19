const validateAppointment = (formData) => {
    const errors = {};

    if (!formData.date) {
        errors.date = "Date is required"
    } else {
       const selectedDate = new Date(formData.date) 
       const currentDate = new Date()

       if(selectedDate.getTime() <= currentDate.getTime()){
        errors.date = "Invalid date, the date must be greater than the current date"
       }

       const dayOfWeek = selectedDate.getDay()
       if (dayOfWeek == 5 || dayOfWeek == 6){
        errors.date = "No appointments can be scheduled on weekends";
       }
    }

    if(!formData.time) {
        errors.time = "Time is required"
    }

    return errors;
};

export default validateAppointment;