import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { type } from 'os';
import { RelationshipEntity } from '../Relationship/relationship.entity';

@Entity()
export class SocialNetworkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  sessionId: any;

  @Column()
  questionId: number;

  @Column()
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  midName: string;

  @Column('double precision')
  weight: number;

  @Column()
  block: number;

  @OneToOne(type=>RelationshipEntity,relationship => relationship.socialNetwork)
  @JoinColumn()
  relationship:RelationshipEntity;
}