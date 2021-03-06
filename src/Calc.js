import { Web3Context } from "web3-hooks"
import { useContext, useState } from "react"
import { CalcContext } from "./App"

function Calc() {
  const [web3State] = useContext(Web3Context)
  const Calc = useContext(CalcContext)
  const [calc, setCalc] = useState(0)

  const handleClickAdd = async () => {
    try {
      const tx = await Calc.add()
      await tx.wait()
      const currCalc = await Calc.calc()
      setCalc(currCalc)
    } catch (e) {
      console.log(e)
    }
  }



  const handleClickGet = async () => {
    try {
      const currCalc = await Calc.calc()
      setCalc(currCalc)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickIncrement = async () => {
    try {
      const tx = await Calc.increment()
      await tx.wait()
      const currCalc = await Calc.calc()
      setCalc(currCalc)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickDecrement = async () => {
    try {
      const tx = await Calc.decrement()
      await tx.wait()
      const currCalc = await Calc.calc()
      setCalc(currCalc)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickDonate = async () => {

  }

  return (
    <>
      {Calc && web3State.chainId === 4 ? (

        <div className="text-warning text-center">
          <h1 >
            calc
          </h1>
          <div>
            <button className="text-warning px-4" onClick={handleClickAdd}>Add calc</button>
          </div>
          <div>
            <button className="text-warning px-4" onClick={handleClickAdd}>Div calc</button>
          </div>
          <div>
            <button className="text-warning px-4" onClick={handleClickAdd}>Mult calc</button>
          </div>
          <div>
            <button className="text-warning px-4" onClick={handleClickAdd}>Sub calc</button>
          </div>
          <p> calc: {calc.toString()} </p>

          <button className="text-warning px-4" onClick={handleClickGet}>Get calc</button>
          <button className="text-warning px-4" onClick={handleClickDecrement}><strong>-</strong></button>
          <button className="text-warning px-4" onClick={handleClickIncrement}><strong>+</strong></button>
        </div>
      ) : (
        <p className="text-warning px-4">CAN INIT CONTRACT</p>

      )}
      <div className="tip-button text-center mt-2">
        <input className='text-danger'
          id="Donate"
          type="number"
          placeholder="ether ammount"

        />
        <button className="text-warning " onClick={handleClickDonate} src="https://cdn.rawgit.com/eth-button/eth-button/09673e85d517452e18a5248b96115bc552a0ac01/dist/eth-button.js" data-address="{0x9AB7466b1a6eA0C7D27b3de65Ed84ee1e28D9273}" data-meta="eth-button">Donate</button>

      </div>

    </>
  )
}

export default Calc