import { SocialNetworkEntity} from '../socialNetwork.entity';
import { ISocialNetwork} from './ISocialNetwork';

export interface ISocialNetworkServicce {
  addSocialNetwork(socialNetworks:Array<ISocialNetwork>):Promise<Array<SocialNetworkEntity>>;
}