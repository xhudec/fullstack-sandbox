import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

// automatically import all files ending in *.stories.tsx
const req = require.context('../components', true, /.stories.tsx?$/)

function loadStories() {
  req.keys().forEach(req)
}

addParameters({
  options: {
    theme: themes.light,
  },
})

configure(loadStories, module)
