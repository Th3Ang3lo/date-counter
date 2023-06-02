export class InvalidFormatException extends Error {
    constructor(date: string) {
        super(`The date "${date}" are invalid.`);
    }
}

export class InvalidDateRangeException extends Error {
    constructor(date: string) {
        super(`The day of the date "${date}" are invalid.`);
    }
}

export class InvalidYearRangeException extends Error {
    constructor(date: string) {
        super(`The year of the date "${date}" is invalid. Example of valid years: 1900 between 2022`);
    }
}