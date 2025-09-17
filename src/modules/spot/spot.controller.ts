import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SpotService } from './spot.service';

@ApiTags('Spot')
@Controller('spot')
export class SpotController {
  constructor(private readonly spotService: SpotService) {}

  @Post('order')
  placeOrder(@Body() dto: any) {
    return this.spotService.placeOrder(dto);
  }

  @Post('order/cancel')
  cancelOrder(@Body() dto: any) {
    return this.spotService.cancelOrder(dto);
  }

  @Post('order/modify')
  modifyOrder(@Body() dto: any) {
    return this.spotService.modifyOrder(dto);
  }
  

  @Get('spot/klines')
  getSpotKlines() {
    // Return the specified mock format
    return [
      {
        openTime: new Date().toISOString(),
        open: 'string',
        high: 'string',
        low: 'string',
        close: 'string',
        volume: 'string',
        closeTime: new Date().toISOString(),
      },
    ];
  }

  // ...existing code...

    // /spot/orders
  @Get('orders')
  getOpenOrders(@Query('symbol') symbol?: string) {
    return this.spotService.getOpenOrders(symbol);
  }

  // /spot/order/fills
  @Get('order/fills')
  getOrderFills(@Query('symbol') symbol?: string) {
    return this.spotService.getOrderFills(symbol);
  }

  // /spot/order/history
  @Get('order/history')
  getOrderHistory(@Query('symbol') symbol?: string) {
    return this.spotService.getOrderHistory(symbol);
  }
}
