import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'jotai'
import { App } from './App'

test('renders App component', () => {
    import '@testing-library/jest-dom/extend-expect'; // Add this import

    render(
        <BrowserRouter>
            <Provider>
                <App />
            </Provider>
        </BrowserRouter>
    )

    // Assert that the component renders without throwing any errors
    expect(screen.getByText('App')).toBeInTheDocument()

    // Assert that the initial count is displayed correctly
    expect(screen.getByText('App count: 0')).toBeInTheDocument()

    // Assert that the initial text output is displayed correctly
    expect(screen.getByText('App textoutput:')).toBeInTheDocument()
})

test('increments count when button is clicked', () => {
    render(
        <BrowserRouter>
            <Provider>
                <App />
            </Provider>
        </BrowserRouter>
    )

    // Find the increment button
    const incrementButton = screen.getByText('Increment Count (App)')

    // Click the increment button
    fireEvent.click(incrementButton)

    // Assert that the count is incremented
    expect(screen.getByText('App count: 1')).toBeInTheDocument()
})
