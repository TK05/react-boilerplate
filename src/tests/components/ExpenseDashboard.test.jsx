import React from 'react'
import { shallow } from 'enzyme'

import DashboardPage from '../../components/DashboardPage'

/* eslint-disable no-undef */
test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
