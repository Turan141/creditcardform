import React from 'react'

export const CardID = () => {
  return (
    <div>
      <label>
        Card ID:
        <input type="text" name="cardid" required maxLength={16} />
      </label>
    </div>
  )
}
