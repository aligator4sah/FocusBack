import { Connection} from 'typeorm';
import { SocialNetworkEntity} from './socialNetwork.entity';

export const socialNetworkProvider = {
  provide: 'SocialNetworkRepository',
  useFactory: (connection: Connection) => connection.getRepository(SocialNetworkEntity),
  inject: ['TypeORMInstance']
}