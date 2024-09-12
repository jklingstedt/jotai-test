import { useAtomValue, useSetAtom } from 'jotai'

import { useCallback } from 'react'
import { counter } from '../../atoms'
import { BorderBox } from '../../styles'

export const Child1 = () => {
    const count = useAtomValue(counter)
    const setCounter = useSetAtom(counter)
    return (
        <BorderBox>
            <h2>Child1</h2>
            <p>{count}</p>
            <button
                onClick={useCallback(() => {
                    setCounter((count: number) => count * 2)
                }, [setCounter])}
            >
                Multiply Count x 2 (Child1)
            </button>
        </BorderBox>
    )
}
