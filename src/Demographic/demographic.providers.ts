import { Connection } from 'typeorm';
import { DemographicEntity} from "./demographic.entity";

export const demographicProvider = {
    provide:'DemographicRepository',
    useFactory:(connection:Connection)=>connection.getRepository(DemographicEntity),
    inject:['TypeORMInstance']
}