import React from 'react';
import moment from 'moment';

export default ({ time }) => {
  let offset = '';

  const mins = moment().diff(moment(time), 'minutes');
  const hours = moment().diff(moment(time), 'hours');
  const days = moment().diff(moment(time), 'days');
  const months = moment().diff(moment(time), 'months');
  const years = moment().diff(moment(time), 'years');
  if (years >= 1) {
    offset = `${years} year${years > 1 ? 's' : ''}`
  } else if (months >= 1) {
    offset = `${months} month${months > 1 ? 's' : ''}`
  } else if (days >= 1) {
    offset = `${days} day${days > 1 ? 's' : ''}`
  } else if (hours >= 1) {
    offset = `${hours} hour${hours > 1 ? 's' : ''}`
  } else if (mins >= 1) {
    offset = `${mins} min${mins > 1 ? 's' : ''}`
  }
  return (
    <div className="time-offset">
      {offset}
    </div>
  )
}
