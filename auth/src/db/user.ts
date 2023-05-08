import { PostgresDataSource, Users } from "./db";


export class User {

    static async addUser(email: string, password: string) {
        if (await this.getUser(email)) {
            await PostgresDataSource.manager.query(`INSERT INTO Users (email, password) VALUES ('${email}', '${password}')`)
        }
    }

    static async getUser(email: string) {
        const user: Users = await PostgresDataSource.manager.query(`SELECT * FROM users WHERE email = '${email}'`)
        return user;
    }
}
