import React from 'react'

type cardIdProps = {
  setCardCVV: (arg: number) => void
  setActive: (arg: any) => void
}

export const CardCVV: React.FC<cardIdProps> = ({ setCardCVV }) => {
  const checkAndApply = (e: any): void => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
    setCardCVV(+e.target.value)
  }
  return (
    <div>
      <div>
        <label>
          Card CVV:
          <input
            type="number"
            name="cardid"
            required
            maxLength={3}
            onInput={checkAndApply}
          />
        </label>
      </div>
    </div>
  )
}
