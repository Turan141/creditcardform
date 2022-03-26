import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import Stack from '@mui/material/Stack'

export function ViewsDatePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <div className="height">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} className="width">
          <DatePicker
            views={['year', 'month']}
            label="Expire date:"
            minDate={new Date('2012-03-01')}
            maxDate={new Date('2025-06-01')}
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  )
}
