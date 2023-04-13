import { parse } from 'query-string';
import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Mixpanel } from '../../mixpanel/index';
import { checkNearDropBalance, claimLinkdropToAccount, redirectTo, handleRefreshUrl } from '../../redux/actions/account';
import { clearLocalAlert } from '../../redux/actions/status';
import { selectAccountSlice } from '../../redux/slices/account';
import { actions as linkdropActions } from '../../redux/slices/linkdrop';
import { selectActionsPending, selectStatusMainLoader } from '../../redux/slices/status';
import { isUrlNotJavascriptProtocol } from '../../utils/helper-api';
import AccountDropdown from '../common/AccountDropdown';
import Balance from '../common/balance/Balance';
import FormButton from '../common/FormButton';
import Container from '../common/styled/Container.css';
import BrokenLinkIcon from '../svg/BrokenLinkIcon';
import NearGiftIcons from '../svg/NearGiftIcons';

const { setLinkdropAmount } = linkdropActions;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .near-keyInfo {
        color: #0072CE;
        font-weight: 600;
        border: 1px solid #D6EDFF;
        border-radius: 4px;
        padding: 6px 15px;
        background-color: #F0F9FF;
        margin: 30px 0;
    }

    .desc {
        color: #72727A;
        margin-bottom: 40px;
    }

    h3 {
        margin-top: 40px;
    }

    .or {
        color: #A2A2A8;
        margin: 20px 0 -6px 0;
    }

    button {
        width: 100% !important;
    }

    .account-dropdown-container {
        width: 100%;
    }

    &.invalid-link {
        svg {
            display: block;
            margin: 0 auto;
        }

        h2 {
            margin-top: 20px;
        }
    }
`;

export const DROP_TYPES = {
    NEAR: 'near',
    NFT: 'nft',
    FT: 'ft',
    TRIAL: 'trial'
}

class LinkdropLanding extends Component {
    state = {
        keyInfo: null,
        invalidLinkdrop: null,
        fundingAmount: null,
        accountId: null
    }

    componentDidMount() {
        console.log('this.props: ', this.props)
        const { fundingContract, fundingKey, handleRefreshUrl } = this.props;
        console.log('fundingContract: ', fundingContract)
        console.log('fundingKey: ', fundingKey)
        if (fundingContract && fundingKey) {
            this.handleCheckNearDropBalance();
            handleRefreshUrl();
        }
    }

    handleCheckNearDropBalance = async () => {
        console.log('this.props: ', this.props)
        const { fundingContract, fundingKey, checkNearDropBalance } = this.props;
        await Mixpanel.withTracking('CA Check near drop keyInfo',
            async () => {
                console.log('fundingContract: ', fundingContract)
                console.log('fundingKey: ', fundingKey)
                const returnedKeyInfo = await checkNearDropBalance(fundingContract, fundingKey);
                console.log('returnedKeyInfo: ', returnedKeyInfo)

                let actualInfo = {
                    required_gas: '100000000000000',
                    yoctoNEAR: '0',
                    trial_data: {
                        exit: true
                    }
                }

                this.setState({
                    keyInfo: actualInfo
                })
            },
            () => this.setState({ invalidLinkdrop: true })
        );
    }

    handleClaimNearDrop = async () => {
        const { fundingContract, fundingKey, redirectTo, claimLinkdropToAccount, accountId, url, setLinkdropAmount } = this.props;
        await claimLinkdropToAccount(fundingContract, fundingKey);
        if (url?.redirectUrl && isUrlNotJavascriptProtocol(url?.redirectUrl)) {
            window.location = `${url.redirectUrl}?accountId=${accountId}`;
        } else {
            setLinkdropAmount(this.state.keyInfo.yoctoNEAR);
            redirectTo('/');
        }
    }

    handleOffboardTrialAccount = async () => {
        const { fundingContract, fundingKey, mainLoader, history, claimingDrop } = this.props;
        const { keyInfo } = this.state;

        
        this.setState({
            accountId: fundingContract,
            fundingAmount: keyInfo?.yoctoNEAR || '0',
        })

        console.log('this.state create account: ', this.state);
        console.log('this.props create account: ', this.props);

        let queryString = `?fundingOptions=${encodeURIComponent(JSON.stringify({ fundingContract, fundingKey, fundingAmount: keyInfo?.yoctoNEAR }))}`;
        Mixpanel.track('CA Click create account button');
        this.props.history.push(`/set-recovery/${fundingContract}${queryString}`);
    }

    render() {
        const { fundingContract, fundingKey, accountId, mainLoader, history, claimingDrop } = this.props;
        const { keyInfo, invalidLinkdrop } = this.state;
        const fundingAmount = keyInfo?.yoctoNEAR;

        if (!invalidLinkdrop) {
            const params = parse(history.location.search);
            const redirectUrl = params.redirectUrl ? `&redirectUrl=${encodeURIComponent(params.redirectUrl)}` : '';

            return (
                <StyledContainer className='xs-centered'>
                    <NearGiftIcons/>
                    <h3><Translate id='linkdropLanding.title'/></h3>
                    <div className='near-keyInfo'>
                        <Balance
                            data-test-id="linkdropBalanceAmount"
                            amount={fundingAmount}
                        />
                    </div>
                    <div className='desc'>
                        <Translate id='linkdropLanding.desc'/>
                    </div>
                    {accountId ? (
                        <AccountDropdown
                            disabled={claimingDrop}
                            data-test-id="linkdropAccountDropdown"
                        />
                    ) : null}
                    {/* {accountId ? (
                        <FormButton
                            onClick={this.handleClaimNearDrop}
                            sending={claimingDrop}
                            disabled={mainLoader}
                            sendingString='linkdropLanding.claiming'
                            data-test-id="linkdropClaimToExistingAccount"
                        >
                            <Translate id='linkdropLanding.ctaAccount'/>
                        </FormButton>
                    ) : (
                        <FormButton
                            linkTo={`/recover-account?fundingOptions=${encodeURIComponent(JSON.stringify({ fundingContract, fundingKey, fundingAmount }))}${redirectUrl}`}
                            data-test-id="linkdropLoginAndClaim"
                        >
                            <Translate id='linkdropLanding.ctaLogin'/>
                        </FormButton>
                    )} */}
                    {/* <div className='or'><Translate id='linkdropLanding.or'/></div> */}
                    <FormButton
                        data-test-id="linkdropCreateAccountToClaim"
                        color="gray-blue"
                        disabled={claimingDrop}
                        linkTo={`/create/${fundingContract}/${fundingKey}`}
                    >
                        <Translate id='linkdropLanding.ctaNew'/>
                    </FormButton>
                    <FormButton
                        data-test-id="linkdropCreateAccountToClaim"
                        disabled={claimingDrop}
                        onClick={this.handleOffboardTrialAccount}
                        sending={claimingDrop}
                        disabled={mainLoader}
                        sendingString='linkdropLanding.claiming'
                        data-test-id="linkdropClaimToExistingAccount"
                    >
                        <Translate id='linkdropLanding.ctaAccount'/>
                    </FormButton>
                </StyledContainer>
            );
        } else {
            return (
                <StyledContainer className='small-centered invalid-link'>
                    <BrokenLinkIcon/>
                    <h1><Translate id='createAccount.invalidLinkDrop.title'/></h1>
                    <h2><Translate id='createAccount.invalidLinkDrop.one'/></h2>
                    <h2><Translate id='createAccount.invalidLinkDrop.two'/></h2>
                </StyledContainer>
            );
        }
    }
}

const mapDispatchToProps = {
    clearLocalAlert,
    checkNearDropBalance,
    claimLinkdropToAccount,
    redirectTo,
    handleRefreshUrl,
    setLinkdropAmount
};

const mapStateToProps = (state, { match }) => ({
    ...selectAccountSlice(state),
    fundingContract: match.params.fundingContract,
    fundingKey: match.params.fundingKey,
    mainLoader: selectStatusMainLoader(state),
    claimingDrop: selectActionsPending(state, { types: ['CLAIM_LINKDROP_TO_ACCOUNT'] })
});

const LinkdropLandingWithRouter = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkdropLanding);

export default LinkdropLandingWithRouter;
