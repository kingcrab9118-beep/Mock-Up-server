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
    // Generate random values for ticker fields
    const open = (Math.random() * 1000 + 27000).toFixed(2);
    const high = (parseFloat(open) + Math.random() * 100).toFixed(2);
    const low = (parseFloat(open) - Math.random() * 100).toFixed(2);
    const close = (Math.random() * 1000 + 27000).toFixed(2);
    const priceChange = (parseFloat(close) - parseFloat(open)).toFixed(2);
    const priceChangePercent = ((parseFloat(priceChange) / parseFloat(open)) * 100).toFixed(2);
    const baseVolume = (Math.random() * 100).toFixed(4);
    const quoteVolume = (parseFloat(baseVolume) * parseFloat(close)).toFixed(2);
    return {
      symbol: 'BTCUSDT',
      open24h: open,
      high24h: high,
      low24h: low,
      priceChange24h: priceChange,
      priceChangePercent24h: priceChangePercent,
      baseVolume24h: baseVolume,
      quoteVolume24h: quoteVolume
    };
  }

  getSpotOrderBook(symbol: string): OrderBookDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(2);
    return {
      symbol: 'BTCUSDT',
      bids: [
        { price: rand(), quality: randSize() },
        { price: rand(), quality: randSize() }
      ],
      asks: [
        { price: rand(), quality: randSize() },
        { price: rand(), quality: randSize() }
      ]
    };
  }

  getSpotKlines(query: any) {
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

  getFutureTicker(symbol: string): TickerInfoDto {
    // Generate random values for ticker fields
    const open = (Math.random() * 1000 + 27000).toFixed(2);
    const high = (parseFloat(open) + Math.random() * 100).toFixed(2);
    const low = (parseFloat(open) - Math.random() * 100).toFixed(2);
    const close = (Math.random() * 1000 + 27000).toFixed(2);
    const priceChange = (parseFloat(close) - parseFloat(open)).toFixed(2);
    const priceChangePercent = ((parseFloat(priceChange) / parseFloat(open)) * 100).toFixed(2);
    const baseVolume = (Math.random() * 100).toFixed(4);
    const quoteVolume = (parseFloat(baseVolume) * parseFloat(close)).toFixed(2);
    return {
      symbol: 'BTCUSDT',
      open24h: open,
      high24h: high,
      low24h: low,
      priceChange24h: priceChange,
      priceChangePercent24h: priceChangePercent,
      baseVolume24h: baseVolume,
      quoteVolume24h: quoteVolume
    };
    }

  getFutureKlines(query: any) {
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

  getFutureOrderBook(symbol: string): OrderBookDto {
    const rand = () => (Math.random() * 1000 + 27000).toFixed(2);
    const randSize = () => (Math.random() * 2).toFixed(2);
    return {
      symbol: 'BTCUSDT',
      bids: [
        { price: rand(), quality: randSize() },
        { price: rand(), quality: randSize() }
      ],
      asks: [
        { price: rand(), quality: randSize() },
        { price: rand(), quality: randSize() }
      ]
    };
  }
}
