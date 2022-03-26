import * as React from 'react'
import { DatePicker, Space } from 'antd'
import moment from 'moment'

type propsType = {
  setCardMonth: (arg: any) => void
  setActive: (arg: any) => void
}

export const ViewsDatePicker: React.FC<propsType> = ({ setCardMonth }) => {
  const dateHandler = (e: any | null) => {
    setCardMonth(e.target.value)
  }
  return (
    <div className="height">
      <input type="date" onChange={dateHandler} />
    </div>
  )
}
