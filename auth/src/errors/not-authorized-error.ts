import { CustomError } from "./custom-error"

export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {
        super('Not Found Error');
    }

    serializeErrors() {
        return [{ message: 'Not Authorized' }];
    }
}