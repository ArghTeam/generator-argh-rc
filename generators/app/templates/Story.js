import React from 'react'
import {storiesOf} from '@storybook/react'

import Story from '../src/components/<%= name %>'


storiesOf('<%= name %>', module)
  .add('initial', () => <<%= name %> role={'administrator'}/>)
