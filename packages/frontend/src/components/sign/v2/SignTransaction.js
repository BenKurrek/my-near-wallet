import BN from "bn.js";
import React from "react";
import { Translate } from "react-localize-redux";
import styled from "styled-components";

import Balance from "../../common/balance/Balance";
import Tooltip from "../../common/Tooltip";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > .balance {
        text-align: center;
        margin: 30px 0;
        .near-amount {
            font-size: 31px;
            font-weight: 600;
            color: #272729;
        }
        .fiat-amount {
            color: #72727A;
            font-size: 16px;
        }
    }

    > .account {
        width: 100%;
        border-top: 1px solid #F0F0F1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        color: #72727A;

        .right {
            text-align: right;
            margin-left: 20px;
            
            .account-id {
                color: #272729;
                font-weight: 600;
                word-break: break-all;
            }

            .balance {
                color: #A2A2A8;
                margin-top: 5px;
            }
        }

        &.from {
            .near-amount {
                color: #72727A;
            }

            &.no-border {
                border-top: none;
            }
        }

        &.fees {
            .left {
                display: flex;
                align-items: center;
            }
            .near-amount {
                color: #3F4045;
            }
            .fiat-amount {
                color: #A2A2A8;
                font-size: 14px;
                margin-top: 5px;
            }
        }

        &.shard {
            background-color: #f9f1fd;
            padding-top: 32px;
            padding-bottom: 32px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            .left {
                display: flex;
                align-items: center;
            }
            .right {
                font-weight: 600;
                word-break: break-all;
                color: #272729;
            }
        }
    }
`;

export default ({
  transferAmount,
  sender,
  estimatedFees,
  availableBalance,
  fromLabelId,
  privateShardId,
}) => {
  const isTransferTransaction = new BN(transferAmount).gt(new BN(0));
  return (
    <StyledContainer className='transfer-amount brs-8 bsw-l'>
      {privateShardId && (
        <div className='account shard'>
          <div className='left'>
            <Translate id='transfer.privateShard' />
            <Tooltip translate='transfer.tooltip' />
          </div>
          <div className='right'>{privateShardId}</div>
        </div>
      )}
      {isTransferTransaction && (
        <Balance
          amount={transferAmount}
          showSymbolNEAR={!privateShardId}
          showBalanceInUSD={!privateShardId}
        />
      )}
      <div className={`account from ${!isTransferTransaction ? "no-border" : ""}`}>
        <Translate id={fromLabelId || "transfer.from"} />
        <div className='right'>
          <div className='account-id'>{sender}</div>
          {!privateShardId && <Balance amount={availableBalance} showBalanceInUSD={false} />}
        </div>
      </div>
      <div className='account fees'>
        <div className='left'>
          <Translate id='transfer.estimatedFees' />
          <Tooltip translate='sendV2.translateIdInfoTooltip.estimatedFees' />
        </div>
        <div className='right'>
          <Balance
            amount={estimatedFees}
            showSymbolNEAR={!privateShardId}
            showBalanceInNEAR={!privateShardId}
          />
        </div>
      </div>
    </StyledContainer>
  );
};
