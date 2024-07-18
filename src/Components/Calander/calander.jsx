import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calander = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                showTimeInput
                timeInputLabel="Time:"
                fixedHeight
                showYearDropdown
                showMonthDropdown
                dateFormat="dd-MM-yyyy       h:mm aa"
                shouldCloseOnSelect={false}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full font-inter text-[14px] text-center bg-transparent   
                cursor-pointer rounded-lg focus:outline-none "
            />
        </div>

    );
}

export default Calander;
