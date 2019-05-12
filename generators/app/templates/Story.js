import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import <%= name %> from '../components/<%= name %>'


storiesOf('<%= name %>', module)
  .add('initial', () => <<%= name %> />)
