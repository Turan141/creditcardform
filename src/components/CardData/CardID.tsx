import React from 'react'

type cardIdProps = {
  cardId: number
  setCardId: (arg: number) => void
  setActive: (arg: any) => void
}

export const CardID: React.FC<cardIdProps> = ({ cardId, setCardId }) => {
  const checkAndApply = (e: any): void => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
    setCardId(+e.target.value)
  }
  return (
    <div>
      <label>
        Card ID:
        <input
          type="number"
          name="cardid"
          required
          maxLength={16}
          onInput={checkAndApply}
        />
      </label>
    </div>
  )
}
