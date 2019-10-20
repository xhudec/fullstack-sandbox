import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '..'

const stories = storiesOf('Button', module)

stories
  .add('base', () => <Button onClick={action('clicked')}>Click Me!</Button>)
  .add('disabled', () => (
    <Button isDisabled onClick={action('clicked')}>
      Disabled
    </Button>
  ))
