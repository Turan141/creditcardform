import * as React from 'react'
import '../../App.css'
type propsType = {
  setCardMonth: (arg: any) => void
  setActive: (arg: any) => void
  active: any
}

export const ViewsDatePicker: React.FC<propsType> = ({
  setCardMonth,
  setActive,
  active,
}) => {
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setCardMonth(e.target.value)
      setActive({ ...active, month: true })
    }
  }
  return (
    <div className="height">
      <label>
        Expire Date:
        <input className="datePicker" type="month" onChange={dateHandler} />
      </label>
    </div>
  )
}
