import { Months } from "./enum/months";
import { InvalidDateRangeException, InvalidFormatException, InvalidYearRangeException } from "./exceptions/date";

export class Date {
    public separator = '-';

    public year!: string;
    public month!: string;
    public day!: string;

    public date!: string;

    constructor (date: string) {
        this.validate(date);
    }

    public isLeapYear() {
        const year = Number(this.year);

        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    public getDayOnYear() {
        const amountOfDaysPerMonths: Record<string, number> = this.daysPerMonths();

        const months = Object.values(Months);

        let day = 0;

        for (const month of months) {
            if (month == this.month) break;

            day += amountOfDaysPerMonths[month];
        }

        day += Number(this.day);

        return day;
    }

    private parseDate(date: string) {
        const splittedDate = date.split(this.separator);

        this.date = date;
        this.year = splittedDate[0];
        this.month = splittedDate[1];
        this.day = splittedDate[2];
    }

    private validate (date: string) {
        if(date.length != 10) throw new InvalidFormatException(date);
        if(date?.[4] != this.separator && date?.[7] != this.separator) throw new InvalidFormatException(date);

        this.parseDate(date);

        const daysPerMonths = this.daysPerMonths();
        const amountOfDaysOnTheCurrentMonth = daysPerMonths[this.month];

        const currentDay = Number(this.day);
        const currentYear = Number(this.year);
        const currentMonth = Number(this.month);

        if(Number.isNaN(currentDay) || Number.isNaN(currentYear) || Number.isNaN(currentMonth)) throw new InvalidFormatException(date);

        if(currentDay < 1 || currentDay > amountOfDaysOnTheCurrentMonth) throw new InvalidDateRangeException(date);

        if(currentYear < 1900 || currentYear > 2022) throw new InvalidYearRangeException(date);
    }
    
    private daysPerMonths(): Record<string, number> {
        return {
            [Months.JANUARY]: 31,
            [Months.FEBRUARY]: this.isLeapYear() ? 29 : 28,
            [Months.MARCH]: 31,
            [Months.APRIL]: 30,
            [Months.MAY]: 31,
            [Months.JUNE]: 30,
            [Months.JULY]: 31,
            [Months.AUGUST]: 31,
            [Months.SEPTEMBER]: 30,
            [Months.OCTOBER]: 31,
            [Months.NOVEMBER]: 30,
            [Months.DECEMBER]: 31,
        };
    }
}