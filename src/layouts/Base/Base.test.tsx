import { screen } from '@testing-library/react'

import { Base } from '.'

import { render } from '@/utils/tests'

describe('<Base />', () => {
  it('should wrap all components with the correct base style', () => {
    // RENDER
    render(<Base />)

    // ASSERT
    expect(screen.getByTestId('main-layout')).toBeInTheDocument()
    expect(screen.getByTestId('main-layout')).toHaveClass('mx-auto my-[1.88rem] px-[2.38rem]')
  })
})
