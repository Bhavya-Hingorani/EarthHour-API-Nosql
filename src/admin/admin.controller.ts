import { Controller,Get, Param } from '@nestjs/common';

@Controller('admin')
export class AdminController {
    @Get(':username')
    verifyAdminLogin(@Param() param): string{
        return `user: ${param.username}`;
    }
}
