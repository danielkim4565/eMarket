import { UpsertOptions } from "typeorm/repository/UpsertOptions";
import { PostgresDataSource, Users } from "../db/db";


export class User {

    static async addUser(email: string, password: string) {
        await PostgresDataSource.manager.query(`INSERT INTO Users (email, password) VALUES ('${email}', '${password}')`)
    }

    static async getUsers(email: string): Promise<Array<Users>> {
        const user: Array<Users> = await PostgresDataSource.manager.query(`SELECT * FROM Users WHERE email = '${email}'`)
        return user;
    }
}
