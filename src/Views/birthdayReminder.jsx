import React, { useState, useEffect, useMemo } from "react";

function BirthdayReminder(props) {
  //declare variable of birthday data objects which is array:
  const [todayData, setTodayData] = useState([]);
  // declare variable the currentDate
  const [currentDate, setCurrentDate] = useState(new Date());
  //declare variable which contains information of the currentDate:
  const todayDate = new Date();
  //declare birthday object which is an array that contains person's information, name, imagesrc, dob

  const birthObj = [
    {
      name: "Nshuti Hirwa landry",
      imageSrc: `https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80`,
      dob: new Date(2001, todayDate.getMonth(), todayDate.getDate()),
    },
    {
      name: "Dragos Gontariu",
      imageSrc: `https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80`,
      dob: new Date(1996, todayDate.getMonth(), todayDate.getDate()),
    },
    {
      name: "Sara Smith",
      imageSrc: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80`,
      dob: new Date(1997, todayDate.getMonth(), todayDate.getDate()),
    },
    {
      name: "Smith John",
      imageSrc: `https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80`,
      dob: new Date(1993, todayDate.getMonth(), todayDate.getDate()),
    },
    {
      name: "Joseph Gonzalez",
      imageSrc: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      dob: new Date(1991, todayDate.getMonth(), todayDate.getDate()),
    },
    {
      name: "Jessica John",
      imageSrc: `https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80`,
      dob: new Date(1993, todayDate.getMonth(), todayDate.getDate() + 1),
    },
    {
      name: "Julia Sean",
      imageSrc: `https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80`,
      dob: new Date(1995, todayDate.getMonth(), todayDate.getDate() + 1),
    },
    {
      name: "Ben Parker",
      imageSrc: `https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      dob: new Date(1997, todayDate.getMonth(), todayDate.getDate() + 1),
    },
    {
      name: "Mason Wilkes",
      imageSrc: `https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      dob: new Date(1994, todayDate.getMonth(), todayDate.getDate() - 1),
    },
    {
      name: "Kelly Sikkema",
      imageSrc: `https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80`,
      dob: new Date(2001, todayDate.getMonth(), todayDate.getDate() - 1),
    },
  ];
  //initialize useffect which will render at the first time the current data kept in birthObj and update when currentDate variable changes data will be changed too
  useEffect(() => {
    getBirthdayData(currentDate);
    // eslint-disable-next-line
  }, [currentDate]);
  //getBirthdayData function which will filter the data we have in birthObj variable related to the current date
  const getBirthdayData = (date) => {
    const filtered = birthObj.filter(
      (obj) =>
        obj.dob.getMonth() === date.getMonth() &&
        obj.dob.getDate() === date.getDate()
    );
    setTodayData(filtered);
  };
  // declare the getAge function which will return the age of person related to the current year
  const getAge = (dob) => {
    const todayDate = new Date();
    console.log(todayDate);
    //convert and differentiate todayDate and date of birth with getTime method
    const diff = todayDate.getTime() - dob.getTime();
    // then return a rounded answer using Math.round()func of the difference we get above take away format of time from millisecond to year
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365.25));
  };
  //create handleNextAge function which will set current date to next date
  const handleNextAge = () => {
    // set current date and plus one but first you get current date in setDate function
    const nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    //then set the current date to next date
    setCurrentDate(nextDate);
  };
  //create handlePreviousAge function which will set current date to next date
  const handlePreviousAge = () => {
    // set current date and takeaway one but first you get current date in setDate function
    const previousDate = new Date(
      currentDate.setDate(currentDate.getDate() - 1)
    );
    //then set the current date to next date
    setCurrentDate(previousDate);
  }
  console.log(currentDate);
  return (
    <div>
      <button onClick={handleNextAge}>next</button>
    </div>
  );
}

export default BirthdayReminder;
