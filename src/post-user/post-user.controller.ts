import { Controller, Param, Post } from '@nestjs/common';

@Controller('post-user')
export class PostUserController {
  @Post(':userId')
  addUser(@Param() param): Promise<string> {
    return param.userId;
  }
}
