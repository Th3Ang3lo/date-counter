import { Date } from "./date";

const date = new Date("2019-01-09");

console.log(`Given date "${date.date}" is the ${date.getDayOnYear()} day of the year in 2019.`); // 9th day

const date2 = new Date("2019-02-10");
console.log(`Given date "${date2.date}" is the ${date2.getDayOnYear()} day of the year in 2019.`); // 41th day