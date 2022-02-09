import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'
import { FaCheck } from 'react-icons/fa'

const CoinItem = ({
    token,
    sender,
    selectedToken,
    setSelectedToken,
    thirdWebTokens,
    sanityTokens,
    setAction
}) => {

    const [balance, setBalance] = useState('Fetching...')
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {

        const getBalance = async () => {
            let activeThirdWebToken

            thirdWebTokens.map(thirdWebToken => {
                if (thirdWebToken.address === token.contractAddress) {
                    console.log(thirdWebToken);
                    activeThirdWebToken = thirdWebToken
                }
            })

            const balance = await activeThirdWebToken.balanceOf(sender)

            return setBalance(balance.displayValue.split('.')[0])
        }
        const getImageUrl = () => {
            const imgUrl = imageUrlBuilder(client).image(token.logo).url()
            setImageUrl(imgUrl)
        }


        getBalance()
        getImageUrl()

    }, [])


    return <Wrapper style={{ backgroundColor: selectedToken.name === token.name && '#141519' }} onClick={() => {
        setSelectedToken(token)
        setAction('send')
    }} >
        <Main>
            <Icon>
                <img src={imageUrl} alt="" />
            </Icon>
            <NameDetails>
                <Name>{token.name}</Name>
                <CoinSymbol> {token.symbol} </CoinSymbol>
            </NameDetails>
            <Balance>
                {balance} {token.symbol}
                <IsSelected>
                    {(selectedToken.contractAddress === token.contractAddress) && (<FaCheck />)}
                </IsSelected>
            </Balance>

        </Main>



    </Wrapper>
};

export default CoinItem;

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:1rem 0.5rem;
    border-radius:0.5rem;
    margin-bottom:0.3rem;

    &:hover{
        background-color: #0e0f14;
    }

`

const Main = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Icon = styled.div`
    margin-right :!rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius:50%;
    overflow:hidden;
    display:grid;
    place-items:center; 

    & > img {
        height:120%;
        width:120%;
        object-fit:cover;
    }

`

const CoinSymbol = styled.div`
    color:#888f9b;
    font-size:0.8rem;
`

const NameDetails = styled.div`
    padding-left:0.5rem
`

const Name = styled.div`
    font-size:1.1rem;
    margin-bottom:0.2rem;
`
const Balance = styled.div`

    flex:1;
    text-align:right;
    font-size:0.9rem;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

const IsSelected = styled.div`
    margin-left: 0.75rem;

    color: #3773f5;
`
