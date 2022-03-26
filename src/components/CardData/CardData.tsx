import React, { useState } from 'react'
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
  const [active, setActive] = useState({
    id: false,
    month: false,
    cvv: false,
    amount: false,
  })

  const sumbitHandle = (e: any) => {
    e.preventDefault()
    console.log(cardId, cardCVV, cardAmount, cardMonth)
  }

  return (
    <div className="cardData">
      <form className="formData">
        <CardID cardId={cardId} setCardId={setCardId} setActive={setActive} />
        <ViewsDatePicker setCardMonth={setCardMonth} setActive={setActive} />
        <CardCVV setCardCVV={setCardCVV} setActive={setActive} />
        <Amount setCardAmount={setCardAmount} setActive={setActive} />
        <button
          className="btn waves-effect waves-light height"
          type="submit"
          name="action"
          onClick={sumbitHandle}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  )
}
