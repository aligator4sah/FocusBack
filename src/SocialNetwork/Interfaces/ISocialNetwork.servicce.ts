import { SocialNetworkEntity} from '../socialNetwork.entity';
import { ISocialNetwork} from './ISocialNetwork';

export interface ISocialNetworkServicce {
  addSocialNetwork(socialNetworks:Array<ISocialNetwork>);
  findAllSocialNetwork():Promise<Array<SocialNetworkEntity>>;
  findSocialNetworkByUser(userID:number):Promise<Array<SocialNetworkEntity>>
}