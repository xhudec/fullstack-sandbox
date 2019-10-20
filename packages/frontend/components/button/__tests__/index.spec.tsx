import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import Button, { IButtonProps } from '..'

function renderButton(propOverrides: Partial<IButtonProps>): RenderResult {
  const testUtils = render(
    <Button onClick={() => {}} {...propOverrides}>
      {propOverrides.children || ''}
    </Button>
  )

  return testUtils
}

describe('<Button />', () => {
  it('should be defined', () => {
    expect(typeof Button).toBe('function')
  })

  it('should render a button with text', () => {
    const { getByText } = renderButton({ children: 'Click' })

    getByText('Click')
  })

  it('should trigger an onClick handler when clicked', () => {
    const onClickSpy = jest.fn()
    const { getByText } = renderButton({ children: 'test', onClick: onClickSpy })

    const buttonElement = getByText('test')
    fireEvent.click(buttonElement)

    expect(onClickSpy).toHaveBeenCalledTimes(1)
  })

  it('should not trigger an onClick handler when clicked and disabled', () => {
    const onClickSpy = jest.fn()
    const { getByText } = renderButton({ children: 'test', onClick: onClickSpy, isDisabled: true })

    const buttonElement = getByText('test')
    fireEvent.click(buttonElement)

    expect(onClickSpy).toHaveBeenCalledTimes(0)
  })
})
