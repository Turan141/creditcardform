import React from 'react'

type cardIdProps = {
  setCardId: (arg: number) => void
  setActive: (arg: any) => void
  active: any
}

export const CardID: React.FC<cardIdProps> = ({
  setActive,
  setCardId,
  active,
}) => {
  const checkAndApply = (e: any): void => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }

    if (e.target.value.length === e.target.maxLength) {
      setCardId(+e.target.value)
      setActive({ ...active, id: true })
    }
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
