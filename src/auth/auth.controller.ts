import { Controller, UnauthorizedException, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity/user.entity'// Import corrected: removed redundant "/user.entity"

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() user: User) {
        const validUser = await this.authService.validateUser(
            user.username, user.password
        );
        if (validUser) {
            return this.authService.login(user);
        } else {
            throw new UnauthorizedException();
        }
    }
}
