import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'TypeORMInstance',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: "admin",
            password: "12345",
            database: 'template1',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            logging:true,
            synchronize:true
        }),
    }
]