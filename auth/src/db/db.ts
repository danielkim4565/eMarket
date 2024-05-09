import "reflect-metadata"
import { DataSource, Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string
}

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "auth-postgres-srv",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "auth",
    entities: [Users],
    synchronize: true,
    logging: false,
})

PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })