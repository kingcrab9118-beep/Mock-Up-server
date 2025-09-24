import { Injectable } from '@nestjs/common';
import { FutureSymbolInfoDto } from './dto/future-symbol-info.dto';
import { FutureOrderRequestDto } from './dto/future-order-request.dto';
import { FutureOrderInfoResponseDto } from './dto/future-order-info-response.dto';
import { FuturePositionInfoResponseDto } from './dto/future-position-info-response.dto';
import { FuturePositionHistoryInfoResponseDto } from './dto/future-position-history-info-response.dto';

@Injectable()
export class FuturesService {
  getSymbols(): FutureSymbolInfoDto[] {
    // Return a mock symbol with random values
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    return [
      {
        symbol: Math.random() > 0.5 ? 'BTCUSDT' : 'ETHUSDT',
        baseCurrency: Math.random() > 0.5 ? 'BTC' : 'ETH',
        quoteCurrency: 'USDT',
        maxLeverage: randInt(1, 50).toString(),
        minOrderSize: (Math.random() * 0.01).toFixed(4),
        maxOrderSize: (Math.random() * 100 + 1).toFixed(3),
        pricePrecision: randInt(1, 4).toString(),
        sizePrecision: randInt(1, 6).toString(),
        status: Math.random() > 0.5 ? 'active' : 'inactive',
        quoteVolume: rand(),
        high: rand(),
        low: rand()
      }
    ];
  }

  placeOrder(dto: FutureOrderRequestDto): FutureOrderInfoResponseDto {
    // Generate random/mock values for each field
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randStr = (prefix = '') => prefix + Math.floor(Math.random() * 10000);
    return {
      symbol: 'BTCUSDT',
      side: Math.random() > 0.5 ? 'buy' : 'sell',
      tradingSide: Math.random() > 0.5 ? 'open' : 'close',
      orderType: Math.random() > 0.5 ? 'limit' : 'market',
      force: Math.random() > 0.5 ? 'gtc' : 'ioc',
      price: rand(),
      size: (Math.random() * 2).toFixed(4),
      leverage: (Math.floor(Math.random() * 20) + 1).toString(),
      marginMode: Math.random() > 0.5 ? 'cross' : 'isolated',
      marginCurrency: 'USDT',
      triggerPrice: rand(),
      tpslType: Math.random() > 0.5 ? 'normal' : 'partial',
      tpPrice: rand(),
      slPrice: rand(),
      requestTime: new Date().toISOString()
    } as any;
  }

  getOrderInfo(orderId: string): FutureOrderInfoResponseDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    return {
      orderId: orderId,
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
    // Return a mock open order with random values in the requested format
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    const randStr = (prefix = '') => prefix + Math.floor(Math.random() * 10000);
    return [
      {
        symbol: 'BTCUSDT',
        orderId: randStr('order-'),
        price: rand(),
        size: randSize(),
        orderType: Math.random() > 0.5 ? 'limit' : 'market',
        side: Math.random() > 0.5 ? 'buy' : 'sell',
        status: Math.random() > 0.5 ? 'pending' : 'open',
        priceAvg: rand(),
        margin: rand(),
        baseVolume: randSize(),
        quoteVolume: rand(),
        feeCurrency: 'USDT',
        fee: (Math.random() * 0.2).toFixed(4),
        cTime: new Date().toISOString(),
        uTime: new Date().toISOString()
      }
    ];
  }

  getOpenPositions(symbol?: string): FuturePositionInfoResponseDto[] {
    // Return a mock open position with random values in the requested format
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    const randStr = (prefix = '') => prefix + Math.floor(Math.random() * 10000);
    return [
      {
        symbol: 'BTCUSDT',
        side: Math.random() > 0.5 ? 'buy' : 'sell',
        size: randSize(),
        orderId: randStr('order-'),
        marginMode: Math.random() > 0.5 ? 'cross' : 'isolated',
        marginCurrency: 'USDT',
        marginBalance: rand(),
        marginRatio: (Math.random() * 100).toFixed(2),
        marginAvailable: rand(),
        marginLocked: rand(),
        leverage: (Math.floor(Math.random() * 20) + 1).toString(),
        priceAvg: rand(),
        feeCurrency: 'USDT',
        fee: (Math.random() * 0.2).toFixed(4),
        cTime: new Date().toISOString(),
        uTime: new Date().toISOString()
      }
    ];
  }

  getPositionHistory(symbol?: string): FuturePositionHistoryInfoResponseDto[] {
    // Return a mock position history with random values in the requested format
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    const randStr = (prefix = '') => prefix + Math.floor(Math.random() * 10000);
    return [
      {
        symbol: 'BTCUSDT',
        openTime: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString(),
        closeTime: new Date().toISOString(),
        marginMode: Math.random() > 0.5 ? 'cross' : 'isolated',
        avgEntryPrice: rand(),
        avgClosePrice: rand(),
        side: Math.random() > 0.5 ? 'buy' : 'sell',
        size: randSize(),
        orderId: randStr('order-'),
        marginCurrency: 'USDT',
        marginBalance: rand(),
        marginRatio: (Math.random() * 100).toFixed(2),
        leverage: (Math.floor(Math.random() * 20) + 1).toString(),
        unrealizedPnl: rand(),
        feeCurrency: 'USDT',
        fee: (Math.random() * 0.2).toFixed(4)
      }
    ];
  }
}
