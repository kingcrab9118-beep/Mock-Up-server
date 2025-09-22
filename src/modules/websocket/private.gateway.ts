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

@WebSocketGateway({ path: '/ws/private' })
export class PrivateGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: WebSocket, ...args: any[]) {
    console.log(`Client connected: ${client.url}`);
    // You can send a welcome message immediately upon connection.
    client.send(
      JSON.stringify({ event: 'connected', data: 'Welcome to the server!' }),
    );
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected`);
  }

  @SubscribeMessage('subscribe')
  onSubscribe(client: any, data: any): string {
    console.log('Incoming call!');

    setInterval(() => {
      this.broadcast('private', {
        channel: 'spot_order',
        symbol: 'BTCUSDT',
        orderId: faker.string.uuid(),
        price: faker.finance.amount({ min: 27000, max: 28000, dec: 1 }),
        size: faker.finance.amount({ min: 0.01, max: 5, dec: 2 }),
        orderType: faker.helpers.arrayElement(['limit', 'market']),
        side: faker.helpers.arrayElement(['buy', 'sell']),
        status: faker.helpers.arrayElement([
          'pending',
          'filled',
          'canceled',
          'partially_filled',
        ]),
        baseVolume: faker.finance.amount({ min: 0.1, max: 50, dec: 2 }),
        quoteVolume: faker.finance.amount({ min: 100, max: 20000, dec: 2 }),
        feeCurrency: 'USDT',
        fee: faker.finance.amount({ min: 0.01, max: 2, dec: 2 }),
        time: faker.date.recent({ days: 10 }).toISOString(),
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
