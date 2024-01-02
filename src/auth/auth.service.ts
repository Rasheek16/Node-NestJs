import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) // Corrected: removed "Repository" from the import
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<Omit<User, 'password'>> {
        const user = await this.userRepository.findOne({ where: { username, password } });
        if (user) {
            const validatedUser = { ...user };
            delete validatedUser.password;
            return validatedUser;
        }
        return null;
    }

    async login(user: User) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}