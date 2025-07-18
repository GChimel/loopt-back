import { Body, Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @IsPublic()
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('sign-up')
  @IsPublic()
  create(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}
