import { CustomError } from "./custom-error";
import { FieldValidationError, ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super('validation error')
    }

    serializeErrors() {
        return this.errors.map((error: ValidationError) => {
            return { message: error.msg };
        })
    }
}