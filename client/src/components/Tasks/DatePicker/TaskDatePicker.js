import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskDatePicker({ selectedDate, setSelectedDate }) {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        showIcon={true}
        required
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy h:mm aa" // Specify date and time format
        showTimeSelect // Enable time selection
        timeIntervals={15} // Set time intervals (e.g., 15 minutes)
        timeFormat="HH:mm" // Set format for time
        isClearable // Allow clearing the selected date
      />
    </div>
  );
}

export default TaskDatePicker;
