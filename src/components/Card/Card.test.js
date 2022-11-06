import { render } from '@testing-library/react'
import Card from '../Card/Card'
import { MemoryRouter } from 'react-router-dom'

describe('render card details correctly', () => {
  test('render card title correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card title="Nasa"></Card>
      </MemoryRouter>,
    )
    expect(getByTestId('card-title').textContent).toBe('Nasa')
  })

  test('render card description correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card description="A collection of nasa movies"></Card>
      </MemoryRouter>,
    )
    expect(getByTestId('card-description').textContent).toBe(
      'A collection of nasa movies',
    )
  })

  test('render card popularity correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card popularity="2"></Card>
      </MemoryRouter>,
    )
    expect(getByTestId('card-popularity').textContent).toEqual('2')
  })

  test('render card release date correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card releaseDate="1983-01-01"></Card>
      </MemoryRouter>,
    )
    expect(getByTestId('card-release-date').textContent).toEqual('1983-01-01')
  })
})
