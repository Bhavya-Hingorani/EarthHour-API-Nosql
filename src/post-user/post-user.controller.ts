import { Controller, Param, Post ,Body, Get} from '@nestjs/common';
import { PostUserService } from './post-user.service';
import { CreatePostUserDto } from 'src/eathHour/dto/post-user.dto';
import { PostUser } from 'src/eathHour/entities/post-user.entity';

@Controller('post-user')
export class PostUserController {
  constructor(private readonly postUserService: PostUserService){}

  @Post(':userId')
  addUser(@Body() createPostUserDto: CreatePostUserDto): Promise<PostUser> {
    return this.postUserService.addUser(createPostUserDto);
  }

  @Get()
  getPostUsers(): Promise<PostUser[]> {
    return this.postUserService.findAll();
  }
  
  @Get(':id')
  getBusinessProductById(@Param() param): Promise<PostUser> {
    return this.postUserService.findOne(param.id);
  }

  
}
