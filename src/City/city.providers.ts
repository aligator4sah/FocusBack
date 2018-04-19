import { Connection } from 'typeorm';
import { CityEntity} from "./city.entity";

export const cityProvider = {
    provide:'CityRepository',
    useFactory:(connection:Connection)=>connection.getRepository(CityEntity),
    inject:['TypeORMInstance']
}