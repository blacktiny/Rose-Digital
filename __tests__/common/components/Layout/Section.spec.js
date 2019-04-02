import React from 'react'
import { fromJS } from 'immutable'
import Enzyme, { shallow } from 'enzyme'

import Section from '~layout/Section/index'

const fixture = {
  example: {
    result: fromJS({
      testing: 'data'
    })
  }
}

describe('Section', () => {
  it('should render a blank section without data', () => {
    const el = shallow(<Section section='case-studies' />)

    expect(el.length).toEqual(1)
  })
})
