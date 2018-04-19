import { Connection} from "typeorm";
import { BlockEntity} from "./block.entity";

export const blockProvider = {
    provide:'BlockRepository',
    useFactory:(connection:Connection)=>connection.getRepository(BlockEntity),
    inject:['TypeORMInstance']
}