import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FutureSymbolInfoDto } from './dto/future-symbol-info.dto';
import { FutureOrderRequestDto } from './dto/future-order-request.dto';
import { FutureOrderInfoResponseDto } from './dto/future-order-info-response.dto';
import { FuturePositionInfoResponseDto } from './dto/future-position-info-response.dto';
import { FuturePositionHistoryInfoResponseDto } from './dto/future-position-history-info-response.dto';
import { FuturesService } from './futures.service';

@ApiTags('Futures')
@Controller('future')
export class FuturesController {
  constructor(private readonly futuresService: FuturesService) {}

  @Get('symbols')
  getSymbols() {
    return this.futuresService.getSymbols();
  }

  @Post('order')
  placeOrder(@Body() dto: FutureOrderRequestDto) {
    return this.futuresService.placeOrder(dto);
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
