import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';
import { faker } from '@faker-js/faker';

@WebSocketGateway({ path: '/ws/public' })
export class PublicGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribe')
  onSubscribe(client: any, data: any): string {
    console.log('Incoming call!');

    setInterval(() => {
      this.broadcast('private', {
        product: 'spot',
        channel: 'orderbook',
        symbol: 'BTCUSDT',
        bids: Array.from(
          { length: faker.number.int({ min: 1, max: 5 }) },
          () => ({
            price: faker.finance.amount({ min: 27000, max: 28000, dec: 1 }),
            quantity: faker.finance.amount({ min: 0.1, max: 5, dec: 2 }),
          }),
        ),
        asks: Array.from(
          { length: faker.number.int({ min: 1, max: 5 }) },
          () => ({
            price: faker.finance.amount({ min: 27000, max: 28000, dec: 1 }),
            quantity: faker.finance.amount({ min: 0.1, max: 5, dec: 2 }),
          }),
        ),
      });
    }, 1000);

    return `Server received subscribe request`;
  }

  broadcast(event: string, payload: any) {
    this.server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN)
        client.send(JSON.stringify({ event, payload }));
    });
  }
}
