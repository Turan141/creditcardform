import React from 'react'
type cardIdProps = {
  setCardAmount: (arg: number) => void
  setActive: (arg: any) => void
}
export const Amount: React.FC<cardIdProps> = ({ setCardAmount }) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardAmount(+e.target.value)
  }
  return (
    <div>
      <div>
        <label>
          Cash Amount:
          <input type="number" name="amount" required onChange={inputHandler} />
        </label>
      </div>
    </div>
  )
}
