import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarketService } from './market.service';

@ApiTags('Market')
@Controller('public')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get('/spot/symbols')
  getSymbols() {
    return this.marketService.getSymbols();
  }

  @Get('spot/ticker')
  getSpotTicker(@Query('symbol') symbol: string) {
    return this.marketService.getSpotTicker(symbol);
  }

  @Get('spot/orderbook')
  getSpotOrderBook(@Query('symbol') symbol: string) {
    return this.marketService.getSpotOrderBook(symbol);
  }

  @Get('spot/klines')
  getSpotKlines(@Query() query: any) {
    return this.marketService.getSpotKlines(query);
  }

  @Get('future/ticker')
  getFutureTicker(@Query('symbol') symbol: string) {
    return this.marketService.getFutureTicker(symbol);
  }

  @Get('future/klines')
  getFutureKlines(@Query() query: any) {
    return this.marketService.getFutureKlines(query);
  }

  @Get('future/orderbook')
  getFutureOrderBook(@Query('symbol') symbol: string) {
    return this.marketService.getFutureOrderBook(symbol);
  }
}
