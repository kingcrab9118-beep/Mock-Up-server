import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getMockData', () => {
    it('should return 100 items with name and birthday', () => {
      const result = appController.getMockData();
      expect(result.data).toHaveLength(100);

      expect(result.data[0]).toHaveProperty('name');
      expect(result.data[0]).toHaveProperty('birthday');
    });
  });
});
