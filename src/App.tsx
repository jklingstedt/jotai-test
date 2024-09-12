import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { counter, textoutputer } from './atoms'

import { Navigation } from './components/Navigation'
import { Start } from './components/start'
import { View1 } from './components/view-1/View1'
import { View2 } from './components/view-2/View2'
import { BorderBox } from './styles'

export const App = () => {
    const [count, setCounter] = useAtom(counter)
    const [textoutput] = useAtom(textoutputer)

    return (
        <Router>
            <BorderBox>
                <Navigation />
                <h1>App</h1>
                <p>App count: {count}</p>
                <p>App textoutput: {textoutput}</p>
                <button onClick={useCallback(() => setCounter(count + 1), [count, setCounter])}>
                    Increment Count (App)
                </button>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/view-1" element={<View1 />} />
                    <Route path="/view-2" element={<View2 />} />
                </Routes>
            </BorderBox>
        </Router>
    )
}

export default App
