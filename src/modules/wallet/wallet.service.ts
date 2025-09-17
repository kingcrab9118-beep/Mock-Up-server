import { Injectable } from '@nestjs/common';
import { BalanceQueryDto, BalanceResponseDto } from './dto/balance.dto';
import { DepositAddressQueryDto, DepositAddressResponseDto } from './dto/deposit-address.dto';
import { DeposithistoriesQueryDto, DeposithistoriesResponseDto } from './dto/deposit-histories.dto';
import { WithdrawRequestDto, WithdrawResponseDto } from './dto/withdraw.dto';
import { WithdrawVerifyRequestDto, WithdrawVerifyResponseDto } from './dto/withdraw-verify.dto';
import { WithdrawhistoriesQueryDto, WithdrawhistoriesResponseDto } from './dto/withdraw-histories.dto';
import { TransferRequestDto, TransferResponseDto } from './dto/transfer.dto';

@Injectable()
export class WalletService {
  getBalance(query: BalanceQueryDto): BalanceResponseDto {
    const rand = () => (Math.random() * 10000).toFixed(2);
    return {
      code: 0,
      message: 'User wallet balance',
      data: {
        balances: [
          {
            currency: 'USDT',
            balance: parseFloat(rand()),
            type: query.type || 'spot'
          },
          {
            currency: 'BTC',
            balance: parseFloat((Math.random() * 2).toFixed(4)),
            type: query.type || 'spot'
          }
        ]
      }
    };
  }

  getDepositAddress(query: DepositAddressQueryDto): DepositAddressResponseDto {
    const randHex = () => '0x' + Array.from({length: 16}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    return {
      code: 0,
      message: 'Deposit address info',
      data: {
        address: randHex()
      }
    };
  }

  getDeposithistories(query: DeposithistoriesQueryDto): DeposithistoriesResponseDto {
    const randHex = () => '0x' + Array.from({length: 16}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const randTx = () => 'tx' + Math.floor(Math.random() * 100000);
    return {
      code: 0,
      message: 'Deposit histories',
      data: {
        recentDeposits: [
          {
            id: 'dep-' + Math.floor(Math.random() * 1000),
            amount: parseFloat((Math.random() * 1000).toFixed(2)),
            currency: 'USDT',
            status: 'completed',
            address: randHex(),
            network: 'ERC20',
            txHash: randTx(),
            totalCount: 1,
            createdAt: new Date().toISOString(),
            confirmedAt: new Date().toISOString()
          }
        ]
      }
    };
  }

  withdraw(dto: WithdrawRequestDto): WithdrawResponseDto {
    const randId = () => 'withdraw-' + Math.floor(Math.random() * 10000);
    return {
      data: {
        withdrawId: randId(),
        balance: parseFloat((Math.random() * 10000).toFixed(2)),
      },
      code: 0,
      message: 'Withdrawal request result'
    };
  }

  verifyWithdraw(dto: WithdrawVerifyRequestDto): WithdrawVerifyResponseDto {
    return {
      code: '0',
      message: 'Withdrawal 2FA verification result'
    };
  }

  getWithdrawhistories(query: WithdrawhistoriesQueryDto): WithdrawhistoriesResponseDto {
    const randHex = () => '0x' + Array.from({length: 16}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const randTx = () => 'tx' + Math.floor(Math.random() * 100000);
    return {
      code: 0,
      message: 'Withdrawal histories',
      data: {
        recentWithdrawals: [
          {
            id: 'with-' + Math.floor(Math.random() * 1000),
            amount: parseFloat((Math.random() * 1000).toFixed(2)),
            currency: 'USDT',
            status: 'completed',
            address: randHex(),
            network: 'ERC20',
            txHash: randTx(),
            fee: parseFloat((Math.random() * 2).toFixed(2)),
            createdAt: new Date().toISOString(),
            completedAt: new Date().toISOString(),
            cancelledAt: new Date().toISOString()
          }
        ]
      }
    };
  }

  transfer(dto: TransferRequestDto): TransferResponseDto {
    return {
      data: {
        fromWalletBalance: parseFloat((Math.random() * 10000).toFixed(2)),
        toWalletBalance: parseFloat((Math.random() * 10000).toFixed(2)),
      },
      code: 0,
      message: 'Transfer result'
    };
  }
}
