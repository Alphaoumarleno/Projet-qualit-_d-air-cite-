import { useState } from "react";

const DateDropdown = () => {
  const [selectedDate, setSelectedDate] = useState("");

  // Generate dates from 2000 to 2049
  const startYear = 2000;
  const endYear = 2049;

  // Helper: generate array of full dates in "YYYY-MM-DD" format
  const generateDates = () => {
    const dates: string[] = [];
    for (let y = startYear; y <= endYear; y++) {
      for (let m = 1; m <= 12; m++) {
        const daysInMonth = new Date(y, m, 0).getDate(); // get days in month
        for (let d = 1; d <= daysInMonth; d++) {
          const formattedDate = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
          dates.push(formattedDate);
        }
      }
    }
    return dates;
  };

  const datesArray = generateDates();

  return (
    <div>
      <select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      >
        <option value="">Select a date</option>
        {datesArray.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      {selectedDate && <p>Selected Date: {selectedDate}</p>}
    </div>
  );
};

export default DateDropdown;