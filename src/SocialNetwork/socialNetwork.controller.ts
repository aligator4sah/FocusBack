import { Controller,Post,Body} from '@nestjs/common';
import { CreateSocialNetworkDto} from './DTO/createSocialNetwork.dto';
import { SocialNetworkService} from './socialNetwork.service';


@Controller('socialNetwork')
export class SocialNetworkController {
  constructor(
    private socialNetworkService: SocialNetworkService
  ){}

  @Post()
  public async addSocialNetwork(@Body() socialNetworks:CreateSocialNetworkDto[]){
    const msg =  await this.socialNetworkService.addSocialNetwork(socialNetworks);
    return msg;
  }
}