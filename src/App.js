import React from 'react'
import Dapp from './Dapp'
import { useContract } from 'web3-hooks'

import { calcAbi, calcAddress } from './contracts/Calc'

export const calcContext = React.createContext(null)
export const CalcContext = React.createContext(null)

function App() {

  const calc = useContract(calcAddress, calcAbi)
  return (

    <CalcContext.Provider value={calc}>
      <Dapp />
    </CalcContext.Provider>
  )
}

export default App