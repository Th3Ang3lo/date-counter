import { beforeAll, describe, it, expect, vi } from 'vitest';
import { Date } from "./date";
import { InvalidDateRangeException, InvalidFormatException, InvalidYearRangeException } from './exceptions/date';

const name = Date.name;
describe(name, () => {
    it('Test if the date is invalid format', () => {
        expect(() => new Date("2022-05")).toThrowError(new InvalidFormatException("2022-05"));
        expect(() => new Date("2022_05_01")).toThrowError(new InvalidFormatException("2022_05_01"));
        expect(() => new Date("dsadsadsad")).toThrowError(new InvalidFormatException("dsadsadsad"));
        expect(() => new Date("0123456789")).toThrowError(new InvalidFormatException("0123456789"));
        expect(() => new Date("aaaa-aa-aa")).toThrowError(new InvalidFormatException("aaaa-aa-aa"));
    });

    it('Test if the date is leap year', () => {
        expect(() => new Date("2000-01-04")).toBeTruthy();
        expect(() => new Date("2020-02-03")).toBeTruthy();
        expect(() => new Date("2021-03-09")).toBeTruthy();
        expect(() => new Date("1900-04-07")).toBeTruthy();
    });

    it('Test if the the days of the months are invalid', () => {
        expect(() => new Date("2022-05-35")).toThrowError(new InvalidDateRangeException("2022-05-35"));
        expect(() => new Date("2015-01-00")).toThrowError(new InvalidDateRangeException("2015-01-00"));
        expect(() => new Date("2014-09-60")).toThrowError(new InvalidDateRangeException("2014-09-60"));
        expect(() => new Date("2001-09-00")).toThrowError(new InvalidDateRangeException("2001-09-00"));
    });

    it('Test if the the year is not between 1900 and 2022', () => {
        expect(() => new Date("1800-05-30")).toThrowError(new InvalidYearRangeException("1800-05-30"));
        expect(() => new Date("2023-01-01")).toThrowError(new InvalidYearRangeException("2023-01-01"));
    });

    it('Test if returns the day on year with success', () => {
        expect(new Date("2019-01-09").getDayOnYear()).toBe(9);
        expect(new Date("1900-03-05").getDayOnYear()).toBe(64);
        expect(new Date("2019-02-11").getDayOnYear()).toBe(42);
        expect(new Date("2022-05-03").getDayOnYear()).toBe(123);
    });
});