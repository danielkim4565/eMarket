import { CustomError } from "./custom-error"

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super('Not Found Error');
    }

    serializeErrors() {
        return [{ message: 'Not Found' }];
    }
}