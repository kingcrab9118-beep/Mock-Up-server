import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FutureOrderRequestDto } from './dto/future-order-request.dto';
import { FuturesService } from './futures.service';

@ApiTags('Futures')
@Controller('future')
export class FuturesController {
  constructor(private readonly futuresService: FuturesService) {}

  @Get('symbols')
  getSymbols() {
    return this.futuresService.getSymbols();
  }

  // /future/setPositionMode
  @Get('setPositionMode')
  setPositionMode(@Query('mode') mode: string) {
    // mode: hedge, oneWay
    return { newMode: mode };
  }

  @Post('order')
  placeOrder(@Body() dto: FutureOrderRequestDto) {
    return this.futuresService.placeOrder(dto);
  }

  // /future/orderCancel
  @Post('orderCancel')
  orderCancel(@Body() dto: any) {
    // dto: { orderId: string }
    return { result: 'cancelled', orderId: dto.orderId };
  }

  // /future/orderModify
  @Post('orderModify')
  orderModify(@Body() dto: any) {
    // dto: { orderId: string, price: string, size: string, ... }
    return { result: 'modified', orderId: dto.orderId };
  }

  @Get('orderInfo')
  getOrderInfo(@Query('orderId') orderId: string) {
    return this.futuresService.getOrderInfo(orderId);
  }

  @Get('orders')
  getOpenOrders(@Query('symbol') symbol?: string) {
    return this.futuresService.getOpenOrders(symbol);
  }

  @Get('positions')
  getOpenPositions(@Query('symbol') symbol?: string) {
    return this.futuresService.getOpenPositions(symbol);
  }

  @Get('position/history')
  getPositionHistory(@Query('symbol') symbol?: string) {
    return this.futuresService.getPositionHistory(symbol);
  }
}
