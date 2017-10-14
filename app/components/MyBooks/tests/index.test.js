import React from 'react'
import { shallow } from 'enzyme'

import MyBooks from '../index'

describe('<MyBooks />', () => {
  it('should render <BookContainer />', () => {
    const renderedComponent = shallow(
      <MyBooks />
    )
    expect(renderedComponent.find('BookContainer').length).toEqual(1)
  })
})
