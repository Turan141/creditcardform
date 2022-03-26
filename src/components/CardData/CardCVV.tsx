import React from 'react'

export const CardCVV = () => {
  const maxLengthCheck = (object: any) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      )
    }
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
            onInput={maxLengthCheck}
          />
        </label>
      </div>
    </div>
  )
}
