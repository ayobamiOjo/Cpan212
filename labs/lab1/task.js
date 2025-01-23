const _ = require("lodash"); // Import Lodash
const moment = require("moment"); // Import Moment.js for date calculations

// Define an array of holiday objects
const holidays = [
  { name: "Christmas", date: "2024-12-25" },
  { name: "Canada Day", date: "2024-07-01" },
  { name: "New Year's Day", date: "2025-01-01" }
];

// Function to calculate days until a holiday
const daysUntilHoliday = (holidayDate) => {
  const today = moment();
  const holiday = moment(holidayDate);
  return holiday.diff(today, "days");
};

// Iterate over holidays and print days until each one
holidays.forEach(holiday => {
  console.log(`📅 ${holiday.name} is in ${daysUntilHoliday(holiday.date)} days.`);
});

// Use Lodash to pick a random holiday
const randomHoliday = _.sample(holidays);
console.log(`🎉 Random holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

// Find indexes of "Christmas" and "Canada Day"
const christmasIndex = _.findIndex(holidays, { name: "Christmas" });
const canadaDayIndex = _.findIndex(holidays, { name: "Canada Day" });

console.log(`🎄 Christmas is at index: ${christmasIndex}`);
console.log(`🍁 Canada Day is at index: ${canadaDayIndex}`);
