const crypto = require('crypto');

export class PasswordManager {
    static encrypt(password: string): string {
        return password;
    }

    static compare(password: string, password2: string): boolean {
        return password === password2;
    }
}
