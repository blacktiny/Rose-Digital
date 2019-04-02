import React from 'react';
import moment from 'moment';

export default ({ title, time }) => (
  <div className="blog-title">
    <h1 className="title noHighlight">{title}</h1>
    <div className="date">{moment(time).format('MMMM D, YYYY')}</div>
  </div>
)