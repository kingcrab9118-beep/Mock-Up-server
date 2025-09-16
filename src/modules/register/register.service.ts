// src/modules/register/register.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  // 실제 로직 대신 Mock 데이터 리턴
  registerEmail() {
    return { success: true, message: 'Mock registration complete' };
  }
}
