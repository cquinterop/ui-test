import React from 'react';
import { Progress } from "reactstrap";

function Closing() {
  const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();
  const getMeasure = remainingDays => (remainingDays === 1) ? 'day' : ((remainingDays === 0) ? 'hours' : 'days')
  const HOURS_IN_A_DAY = 24;

  const date = new Date();
  const currentDay = date.getDate();
  const currentHour = date.getHours();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const limitDay = getDaysInMonth(currentMonth, currentYear);
  const remainingDays = (limitDay - currentDay);
  const remainingHours = (HOURS_IN_A_DAY - currentHour);
  const remainingTime = (remainingDays > 0) ? remainingDays : remainingHours;
  const measure = getMeasure(remainingDays);

  return (
    <Progress multi className="bg-transparent rounded-0 hero__progress">
      <Progress bar value={currentDay} max={limitDay} className="text-right pr-3 pl-4 fit-content hero__progress--past position-relative">
        CLOSING IN
      </Progress>
      <Progress bar value={remainingDays} max={limitDay} className="text-left text-dark pl-3 pr-4 d-block fit-content size-2 hero__progress--next">
        <span className="font-weight-regular">{remainingTime} </span>
        <span className="font-weight-light">{measure}</span>
      </Progress>
    </Progress>
  );
};

export default Closing;
