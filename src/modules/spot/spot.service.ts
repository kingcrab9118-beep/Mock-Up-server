import { Injectable } from '@nestjs/common';
import { SpotSymbolInfoDto } from './dto/spot-symbol-info.dto';
import { SpotOrderRequestDto } from './dto/spot-order-request.dto';
import { OrderResponseDto } from './dto/order-response.dto';
import { CancelOrderRequestDto } from './dto/cancel-order-request.dto';
import { ModifyOrderRequestDto } from './dto/modify-order-request.dto';
import { SpotOrderInfoResponseDto } from './dto/spot-order-info-response.dto';

@Injectable()
export class SpotService {
  // /spot/orders
  getOpenOrders(symbol?: string) {
    // mock open orders
    return [this.getOrderInfo('open-' + (symbol || 'BTCUSDT'))];
  }

  // /spot/order/fills
  getOrderFills(symbol?: string) {
    // mock filled orders
    return [
      {
        symbol: symbol || 'BTCUSDT',
        orderId: 'order-12345',
        tradeId: 'trade-67890',
        orderType: 'limit',
        side: 'buy',
        price: (Math.random() * 1000 + 27000).toFixed(2),
        baseVolume: (Math.random() * 2).toFixed(4),
        quoteVolume: (Math.random() * 1000 + 27000).toFixed(2),
        feeCurrency: 'USDT',
        fee: (Math.random() * 0.2).toFixed(4),
        status: 'filled',
        cTime: new Date().toISOString(),
        uTime: new Date().toISOString()
      }
    ];
  }

  // /spot/order/history
  getOrderHistory(symbol?: string) {
    // mock order history
    return [this.getOrderInfo('history-' + (symbol || 'BTCUSDT'))];
  }

  // /public/spot/ticker
  getSpotTicker(symbol: string) {
    return {
      symbol,
      price: (Math.random() * 1000 + 27000).toFixed(2),
      change: (Math.random() * 5 - 2.5).toFixed(2),
      volume: (Math.random() * 2000).toFixed(0),
      quoteVolume: (Math.random() * 2000).toFixed(0),
      high: (Math.random() * 1000 + 27000).toFixed(2),
      low: (Math.random() * 1000 + 27000).toFixed(2)
    };
  }

  // /public/spot/orderbook
  getSpotOrderBook(symbol: string) {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(2);
    return {
      symbol,
      bids: [
        { price: rand(), size: randSize() },
        { price: rand(), size: randSize() }
      ],
      asks: [
        { price: rand(), size: randSize() },
        { price: rand(), size: randSize() }
      ]
    };
  }

  // /public/spot/klines
  getSpotKlines(query: any) {
    // mock kline data
    return [
      {
        openTime: new Date().toISOString(),
        open: (Math.random() * 1000 + 27000).toFixed(2),
        high: (Math.random() * 1000 + 27000).toFixed(2),
        low: (Math.random() * 1000 + 27000).toFixed(2),
        close: (Math.random() * 1000 + 27000).toFixed(2),
        volume: (Math.random() * 10).toFixed(2),
        closeTime: new Date().toISOString()
      }
    ];
  }
  getSymbols(): SpotSymbolInfoDto[] {
    return [
      {
        symbol: 'BTCUSDT',
        baseCurrency: 'BTC',
        quoteCurrency: 'USDT',
        minOrderSize: '0.001',
        maxOrderSize: '100',
        pricePrecision: '2',
        sizePrecision: '4',
        status: 'active'
      }
    ];
  }

  placeOrder(dto: SpotOrderRequestDto): OrderResponseDto {
    const randomDigits = (len: number) => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join('');
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    return {
      symbol: dto.symbol,
      orderId: 'order-' + randomDigits(5),
      price: dto.price || rand(),
      size: dto.size || randSize(),
      orderType: dto.orderType,
      side: dto.side,
      status: 'open',
      priceAvg: rand(),
      baseVolume: randSize(),
      quoteVolume: rand(),
      feeCurrency: 'USDT',
      fee: (Math.random() * 0.2).toFixed(4),
      cTime: new Date().toISOString(),
      uTime: new Date().toISOString()
    };
  }

  cancelOrder(dto: CancelOrderRequestDto): { result: string } {
    return {
      result: 'cancelled'
    };
  }

  modifyOrder(dto: ModifyOrderRequestDto): OrderResponseDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    return {
      symbol: dto.symbol,
      orderId: dto.orderId,
      price: dto.price || rand(),
      size: dto.size || randSize(),
      orderType: dto.orderType,
      side: dto.side,
      status: 'open',
      priceAvg: rand(),
      baseVolume: randSize(),
      quoteVolume: rand(),
      feeCurrency: 'USDT',
      fee: (Math.random() * 0.2).toFixed(4),
      cTime: new Date().toISOString(),
      uTime: new Date().toISOString()
    };
  }

  getOrderInfo(orderId: string): SpotOrderInfoResponseDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(4);
    return {
      symbol: 'BTCUSDT',
      orderId,
      price: rand(),
      size: randSize(),
      orderType: 'limit',
      side: 'buy',
      status: 'open',
      priceAvg: rand(),
      baseVolume: randSize(),
      quoteVolume: rand(),
      feeCurrency: 'USDT',
      fee: (Math.random() * 0.2).toFixed(4),
      cTime: new Date().toISOString(),
      uTime: new Date().toISOString()
    };
  }
}
