import { PrimaryGeneratedColumn,Column, Entity} from "typeorm";

@Entity()
export class DemographicEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    label:string;

    @Column()
    placeholder: string;

    @Column()
    questiontype:string;

    @Column('jsonb')
    options:any;

    @Column()
    order:number;
}