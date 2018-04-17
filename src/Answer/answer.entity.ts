import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn,UpdateDateColumn,CreateDateColumn} from 'typeorm';

@Entity()
export class AnswerEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userid:number;

    @Column()
    sessionid:number;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdat: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    updatedat: Date;

    @Column('jsonb')
    answers:any;
}