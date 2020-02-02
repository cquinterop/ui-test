import React from 'react';
import { Progress } from "reactstrap";
import { getDaysInMonth, getClosingTimeMeasure } from "../../utils";

function Closing() {
  const HOURS_IN_A_DAY = 24;
  const date = new Date();
  const currentDay = date.getDate();
  const currentHour = date.getHours();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const deadline = getDaysInMonth(currentMonth, currentYear);
  const remainingHours = (HOURS_IN_A_DAY - currentHour);
  const remainingDays = (deadline - currentDay);
  const timeMeasure = getClosingTimeMeasure(remainingDays);
  const remainingTime = (remainingDays > 0) ? remainingDays : remainingHours;

  return (
    <Progress multi className="bg-transparent rounded-0">
      <Progress bar value={currentDay} max={deadline} className="text-right pr-3 pl-4 fit-content hero__progress--past position-relative">
        CLOSING IN
      </Progress>
      <Progress bar value={remainingDays} max={deadline} className="text-left text-dark pl-3 pr-4 d-block fit-content font-size-2 hero__progress--next">
        <span className="font-weight-regular">{remainingTime} </span>
        <span className="font-weight-light">{timeMeasure}</span>
      </Progress>
    </Progress>
  );
};

export default Closing;
