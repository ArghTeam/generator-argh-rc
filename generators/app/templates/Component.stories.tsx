import React from 'react'
import { storiesOf } from '@storybook/react'

import <%= name %> from '.'


storiesOf('<%= name %>', module)
  .add('initial', () => <<%= name %> />)
