import { useWeb3 } from "@3rdweb/hooks"
import Head from "next/head"
import styled from "styled-components"
import Dashboard from "./Dashboard"



export default function Home() {

  const { address, connectWallet } = useWeb3()


  return (
    <Wrapper >
      {
        address ? (<Dashboard address={address} connectWallet={connectWallet} />) : (<Connect connectWallet={connectWallet} />)
      }
    </Wrapper>
  )
}
const Connect = ({ connectWallet }) => {
  return <>
    <Head>
      <title>Connect Wallet</title>
    </Head>
    <div style={{
      height: '100vh',
      maxWidth: '100vw',
      backgroundColor: '#0a0b0d',
      color: 'white',
      display: 'grid',
      placeItems: 'center'
    }} > <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
        <button style={{
          border: '1px solid #282b2f',
          padding: '0.8rem',
          fontSize: '1.3rem',
          fontWeight: 500,
          borderRadius: '0.4rem',
          backgroundColor: '#3773f5',
          color: 'white',
          cursor: 'pointer'
        }} onClick={() => connectWallet('injected')} >Connect Wallet</button>
        <div style={{
          fontSize: '1.1rem',
          textAlign: 'center',
          marginTop: '1rem',
          fontWeight: 500,
          color: 'white',
        }} >
          You need Chrome to be <br /> able to run this app.
        </div>
      </div>
    </div>
  </>
}


const Wrapper = styled.div`
  display:flex;
  height:100vh;
  max-width:100vw;
  background-color:#0a0b0d;
  color:white;
  display:grid;
  place-items:center;
`
