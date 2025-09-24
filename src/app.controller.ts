import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRoot(): string {
        return 'Mock API is running. Visit /api for documentation.';
    }
}
