import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'TypeORMInstance',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: "postgres",
            password: "12345",
            database: 'template2',
            // url: 'postgres://rbjwnlyftxwvtu:d99601309d5f1a81ca1bd2e3fd42e6c08f121fd0d31b12b71b1a140a1ca2fed9@ec2-54-243-137-182.compute-1.amazonaws.com:5432/ddrf9kh51g0sf2',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            logging:true,
            synchronize:true
        }),
    }
]