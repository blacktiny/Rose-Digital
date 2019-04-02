import React from 'react'
import moment from 'moment'

import Title from '~layout/Title'

export default ({ title, date }) => (
  <div className={date ? '' : 'title-margin-bottom'}>
    <Title title={title} />
    <p className='publish-date'>{date && moment(date).format('MMMM D, YYYY')}</p>
  </div>
)
