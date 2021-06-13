import './App.css';
import { useContext, useState } from 'react'
import { Web3Context } from 'web3-hooks'
import { ethers } from "ethers"

import Calc from './Calc'




function Dapp() {
  const [web3State, login] = useContext(Web3Context)
  const [ethBalance, setEthBalance] = useState(0)
  const [address, setAddress] = useState(ethers.constants.AddressZero)
  const [eth2Send, setEth2Send] = useState(0)

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address)
      setEthBalance(balance.toString())
      console.log(ethers.utils.formatEther(balance))
    } catch (e) {
      console.log(e)

    }
  }

  const handleClickSend = async () => {
    const weiAmount = ethers.utils.parseEther(eth2Send)
    try {
      const tx = await web3State.signer.sendTransaction({ to: address, value: weiAmount })
      await tx.wait()
      console.log('TX MINED')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="text-white text-center">
        <div className="container text-danger text-center">
          <div className="row">
            <p >Metamask installed: {web3State.isMetaMask ? 'yes' : 'no'}</p>
            <p>Web3: {web3State.isWeb3 ? 'injected' : 'no-injected'}</p>
            <p>Logged: {web3State.isLogged ? 'yes' : 'no'}</p>
            {!web3State.isLogged && (
              <>
                <button onClick={login}>login</button>
              </>
            )}
          </div>
          <hr />
        </div>
        <p>Network id: {web3State.chainId}</p>
        <p>Network name: {web3State.networkName}</p>
        <hr />
        <p>Account: {web3State.account}</p>
        <p>Balance: {web3State.balance} ETH</p>
        <hr />
        <div>
          <label htmlFor="balanceOf">Balance of: &nbsp;&nbsp; </label>
          <input className='text-danger' id="balanceOf" type="text" value={address} placeholder="ethereum address" onChange={(event) => setAddress(event.target.value)} />
          <button className='text-danger' onClick={handleClickGetBalance}>  get Balance</button>
          <hr />
          <p >Balance of: {address} -- {ethBalance} ETHER(S)</p>
        </div>
        <hr />
        <div >
          <label className="ms-5" htmlFor="eth2send"> Send to : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {address} <hr /> How much do you want to send :  </label>
          <input className='text-danger'
            id="eth2Send"
            type="text"
            placeholder="ether ammount"
            value={eth2Send}
            onChange={(event) => setEth2Send(event.target.value)}
          />
          <button className='text-danger' onClick={handleClickSend}>send</button>
        </div>
      </div>
      <hr />
      <Calc />
      <hr />
      <hr />
      <hr />



      <p className="text-center text-danger fs-1">Hardfuck BAD ASS ! ! YEAH ! </p>
    </>
  )
}

export default Dapp;

