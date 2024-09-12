import { useAtomValue, useSetAtom } from 'jotai'

import { useCallback } from 'react'
import { counter, textoutputer } from '../../atoms'
import { BorderBox, StyledInput } from '../../styles'

export const Child1 = () => {
    const count = useAtomValue(counter)
    const setCounter = useSetAtom(counter)
    const text = useAtomValue(textoutputer)
    const setTextOutput = useSetAtom(textoutputer)

    const handleTextChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setTextOutput(event.target.value)
        },
        [setTextOutput]
    )

    return (
        <BorderBox>
            <h2>Child 1</h2>
            <p>{count}</p>
            <button
                onClick={useCallback(() => {
                    setCounter((count: number) => count * 2)
                }, [setCounter])}
            >
                Multiply Count x 2 (Child1)
            </button>
            <p>Text Outputer</p>
            <StyledInput type="text" onChange={handleTextChange} value={text} />
        </BorderBox>
    )
}
