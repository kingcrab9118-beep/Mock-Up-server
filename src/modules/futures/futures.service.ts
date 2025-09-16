import { Injectable } from '@nestjs/common';
import { FutureSymbolInfoDto } from './dto/future-symbol-info.dto';
import { FutureOrderRequestDto } from './dto/future-order-request.dto';
import { FutureOrderInfoResponseDto } from './dto/future-order-info-response.dto';
import { FuturePositionInfoResponseDto } from './dto/future-position-info-response.dto';
import { FuturePositionHistoryInfoResponseDto } from './dto/future-position-history-info-response.dto';

@Injectable()
export class FuturesService {
  getSymbols(): FutureSymbolInfoDto[] {
    return [
      {
        symbol: 'BTCUSDT',
        baseCurrency: 'BTC',
        quoteCurrency: 'USDT',
        maxLeverage: '20',
        minOrderSize: '0.001',
        maxOrderSize: '100',
        pricePrecision: '2',
        sizePrecision: '4',
        status: 'active',
        quoteVolume: '1000',
        high: '28000',
        low: '27000'
      }
    ];
  }

  placeOrder(dto: FutureOrderRequestDto): FutureOrderInfoResponseDto {
    const randomDigits = (len: number) => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join('');
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    return {
      orderId: 'order-' + randomDigits(5),
      symbol: dto.symbol,
      price: dto.price || rand(),
      size: dto.size || randSize(),
      orderType: dto.orderType,
      side: dto.side,
      status: 'open',
      priceAvg: rand(),
      margin: rand(),
      baseVolume: randSize(),
      quoteVolume: rand(),
      feeCurrency: 'USDT',
      fee: (Math.random() * 0.2).toFixed(4),
      cTime: new Date().toISOString(),
      uTime: new Date().toISOString()
    };
  }

  getOrderInfo(orderId: string): FutureOrderInfoResponseDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    return {
      orderId,
      symbol: 'BTCUSDT',
      price: rand(),
      size: randSize(),
      orderType: 'limit',
      side: 'buy',
      status: 'open',
      priceAvg: rand(),
      margin: rand(),
      baseVolume: randSize(),
      quoteVolume: rand(),
      feeCurrency: 'USDT',
      fee: (Math.random() * 0.2).toFixed(4),
      cTime: new Date().toISOString(),
      uTime: new Date().toISOString()
    };
  }

  getOpenOrders(symbol?: string): FutureOrderInfoResponseDto[] {
    return [];
  }

  getOpenPositions(symbol?: string): FuturePositionInfoResponseDto[] {
    return [];
  }

  getPositionHistory(symbol?: string): FuturePositionHistoryInfoResponseDto[] {
    return [];
  }
}
