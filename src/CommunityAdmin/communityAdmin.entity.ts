import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommunityAdminEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    midname: string;

    @Column()
    lastname: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    state: string;

    @Column()
    county: string;

    @Column()
    city: string;

    @Column()
    community: string;
}