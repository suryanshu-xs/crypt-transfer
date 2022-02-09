import React, { useState } from 'react';
import styled from 'styled-components';
import CoinSelector from './CoinSelector';
import Transfer from './Transfer';
import { TailSpin } from 'react-loader-spinner'
import Receive from './Receive';



const TransferModal = ({ sanityTokens, walletAddress, thirdWebTokens }) => {

  const [action, setAction] = useState('send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])



  const selectedStyle = {
    color: '#3773f5'
  }
  const unselectedStyle = {
    border: '1px solid #282b2f'
  }

  const selectedModal = option => {
    switch (option) {
      case 'send':
        return <Transfer selectedToken={selectedToken} setAction={setAction} thirdWebTokens={thirdWebTokens} walletAddress={walletAddress} />
      case 'receive':
        return <Receive selectedToken={selectedToken} walletAddress={walletAddress} setAction={setAction} />
      case 'transferring':
        return <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: 'column',
          height: '65%'
        }} > <h2 style={{ marginBottom: '2rem', fontWeight: 500 }} >Transferring...</h2> <TailSpin
            heigth="100"
            width="100"
            color='#3773f5'
            ariaLabel='loading'
          /> </div>
      case 'transferred':
        return <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: 'column',
          height: '65%'
        }} > <h2 style={{ marginBottom: '2rem', color: 'green', fontWeight: 500 }} >Transfer Complete.</h2>  </div>
      case 'select':
        return <CoinSelector
          setAction={setAction}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
        />
      default:
        return <Transfer selectedToken={selectedToken} setAction={setAction} thirdWebTokens={thirdWebTokens} walletAddress={walletAddress} />
    }
  }



  return <Wrapper>
    <Selector>
      <Option style={action === 'send' ? selectedStyle : unselectedStyle} onClick={() => setAction('send')}>
        <p >Send</p>
      </Option>

      <Option style={action === 'receive' ? selectedStyle : unselectedStyle} onClick={() => setAction('receive')}>
        <p >Receive</p>
      </Option>
    </Selector>
    <ModalMain>
      {selectedModal(action)}
    </ModalMain>
  </Wrapper>;
};

export default TransferModal;


const Wrapper = styled.div`
  height:35rem;
  width:27rem;
  color:white;
  border:1px solid #282b2f;
  display:flex;
  flex-direction:column;
`

const Selector = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  height:5rem

`

const Option = styled.div`
  height: 100%;
  width: 100%;
  display:grid;
  place-items:center;
  font-size:1.2rem;
  font-weight:600;

  &:hover{
    cursor:pointer;
    background-color:#111214
  }
`
const ModalMain = styled.div`
  padding:1rem;
  flex:1;
`