
import { Controller, Post, Route, Body, Tags } from 'tsoa';
import dotenv from 'dotenv';
dotenv.config();

interface LoginRequest {
  username: string;
  password: string;
}

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {
  @Post("login")
  public async login(@Body() body: LoginRequest): Promise<{ token?: string; error?: string }> {
    if (
      body.username === process.env.ADMIN_USERNAME &&
      body.password === process.env.ADMIN_PASSWORD
    ) {
      return { token: "admin-token-placeholder" };
    }
    return { error: "Unauthorized" };
  }
}
