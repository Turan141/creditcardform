import React from 'react'
type cardIdProps = {
  setCardAmount: (arg: number) => void
  setActive: (arg: any) => void
  active: any
}
export const Amount: React.FC<cardIdProps> = ({
  setCardAmount,
  setActive,
  active,
}) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardAmount(+e.target.value)
    setActive({ ...active, amount: true })
  }

  return (
    <div>
      <div>
        <label>
          Cash Amount:
          <input
            type="number"
            name="amount"
            required
            onChange={inputHandler}
            autoComplete="off"
          />
        </label>
      </div>
    </div>
  )
}
