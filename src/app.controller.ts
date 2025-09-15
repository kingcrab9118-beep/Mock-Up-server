import { Controller, All } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Controller()
export class AppController {
  // 모든 요청 경로를 처리
  @All('*')
  getMockData() {
    const data = Array.from({ length: 100 }).map(() => ({
      name: faker.person.fullName(),
      birthday: faker.date
        .birthdate({ min: 1950, max: 2010, mode: 'year' })
        .toISOString()
        .split('T')[0],
    }));

    return { count: data.length, data };
  }
}
