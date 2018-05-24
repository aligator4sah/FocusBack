import { Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';
import { SocialNetworkEntity } from '../SocialNetwork/socialNetwork.entity';

@Entity()
export class RelationshipEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  relationship:string;

  @OneToOne(type=>SocialNetworkEntity,socialNetwork =>socialNetwork.relationship)
  socialNetwork:SocialNetworkEntity;
}