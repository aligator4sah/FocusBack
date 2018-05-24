import { Component, Inject} from '@nestjs/common';
import { SocialNetworkEntity} from './socialNetwork.entity';
import { getConnection, Repository } from 'typeorm';
import { ISocialNetwork,ISocialNetworkServicce} from './Interfaces';
import { RelationshipEntity } from '../Relationship/relationship.entity';

@Component()
export class SocialNetworkService implements ISocialNetworkServicce{
  constructor(
    @Inject('SocialNetworkRepository') private readonly socialNetworkRepository:Repository<SocialNetworkEntity>
  ){}

  public async addSocialNetwork(socialNetworks:Array<ISocialNetwork>):Promise<Array<SocialNetworkEntity>>{
    const currentSocialNetwork = await this.socialNetworkRepository.find();
    await Promise.all(socialNetworks.map(async(item)=>{
      const selectedRelationship = await getConnection().getRepository(RelationshipEntity).createQueryBuilder("relationship")
        .where("relationship.relationship = :re",{re:item.relationship}).getOne();

      const selectedSocialNetwork = await this.socialNetworkRepository.save(item);
      await getConnection()
        .createQueryBuilder()
        .relation(SocialNetworkEntity, "relationship")
        .of(selectedSocialNetwork.id)
        .set(selectedRelationship.id);
      return {socialNetwork:selectedSocialNetwork};
    })).then((items) => {
      items.forEach(item =>{
        currentSocialNetwork.push(item.socialNetwork);
      })
    });
    // console.log(currentSocialNetwork);
    return currentSocialNetwork;
  }

  public async findAllSocialNetwork():Promise<Array<SocialNetworkEntity>>{
    return await this.socialNetworkRepository.find();
  }

  public async findSocialNetworkByUser(userID:number):Promise<Array<SocialNetworkEntity>>{
    return await this.socialNetworkRepository.find({where:{userId:userID}});
  }
}