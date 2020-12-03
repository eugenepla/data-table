import React from 'react'
import moment from 'moment'

export const birthdayConvert = ({ date, age }) => {
  return <>
    {moment(date).format('dddd, M/D/YYYY, H:m:s A')}
    <br />
    {age} years
  </>
}