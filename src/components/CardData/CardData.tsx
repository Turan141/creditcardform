import React from 'react'
import { CardID } from './CardID'
import { ViewsDatePicker } from './CardMonth'
import { CardCVV } from './CardCVV'
import { Amount } from './Amount'
import '../../App.css'

export const CardData = () => {
  return (
    <div className="cardData">
      <form className="formData">
        <CardID />
        <ViewsDatePicker />
        <CardCVV />
        <Amount />
        <button
          className="btn waves-effect waves-light height"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  )
}
