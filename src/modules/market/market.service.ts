import { Injectable } from '@nestjs/common';
import { TickerInfoDto } from './dto/ticker-info.dto';
import { OrderBookDto } from './dto/orderbook.dto';
import { KlineDto } from './dto/kline.dto';
import { SpotSymbolInfoDto } from './dto/spot-symbol-info.dto';

@Injectable()
export class MarketService {
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
  getSpotTicker(symbol: string): TickerInfoDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    return {
      symbol,
      price: rand(),
      change: (Math.random() * 5 - 2.5).toFixed(2),
      volume: (Math.random() * 2000).toFixed(0),
      quoteVolume: (Math.random() * 2000).toFixed(0),
      high: rand(),
      low: rand()
    };
  }

  getSpotOrderBook(symbol: string): OrderBookDto {
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

  getSpotKlines(query: any): KlineDto[] {
    return [];
  }

  getFutureTicker(symbol: string): TickerInfoDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    return {
      symbol,
      price: rand(),
      change: (Math.random() * 5 - 2.5).toFixed(2),
      volume: (Math.random() * 2000).toFixed(0),
      quoteVolume: (Math.random() * 2000).toFixed(0),
      high: rand(),
      low: rand()
    };
  }

  getFutureKlines(query: any): KlineDto[] {
    return [];
  }

  getFutureOrderBook(symbol: string): OrderBookDto {
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
}
