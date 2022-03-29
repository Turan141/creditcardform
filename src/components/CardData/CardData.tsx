import React, { useState, useEffect, useReducer } from 'react'
import { CardID } from './CardID'
import { ViewsDatePicker } from './CardMonth'
import { CardCVV } from './CardCVV'
import { Amount } from './Amount'
import '../../App.css'

export const CardData = () => {
  const [cardId, setCardId] = useState(0)
  const [cardMonth, setCardMonth] = useState(0)
  const [cardCVV, setCardCVV] = useState(0)
  const [cardAmount, setCardAmount] = useState(0)
  const [buttonActive, setButtonActive] = useState(false)
  const [active, setActive] = useState({
    id: false,
    month: false,
    cvv: false,
    amount: false,
  })

  const sumbitHandle = (e: any) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (active.id && active.month && active.amount && active.cvv) {
      setButtonActive(true)
    }
    console.log(active)
  }, [active])

  return (
    <div className="cardData">
      <form className="formData">
        <CardID setCardId={setCardId} setActive={setActive} active={active} />
        <ViewsDatePicker
          setCardMonth={setCardMonth}
          active={active}
          setActive={setActive}
        />
        <CardCVV
          setCardCVV={setCardCVV}
          active={active}
          setActive={setActive}
        />
        <Amount
          setCardAmount={setCardAmount}
          active={active}
          setActive={setActive}
        />
        {!buttonActive ? (
          <p className="btn disabled">Sumbit</p>
        ) : (
          <button
            className="btn waves-effect waves-light height"
            type="submit"
            name="action"
            onClick={sumbitHandle}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        )}
      </form>
    </div>
  )
}
