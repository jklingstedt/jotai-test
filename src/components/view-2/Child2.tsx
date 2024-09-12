import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'

import { counter } from '../../atoms'
import { BorderBox } from '../../styles'
import { Child3 } from './Child3'

export const Child2 = () => {
    const count = useAtomValue(counter)
    const setCounter = useSetAtom(counter)
    return (
        <BorderBox>
            <h2>Child 2</h2>
            <p>{count}</p>
            <button
                onClick={useCallback(() => {
                    setCounter((count: number) => count - 1)
                }, [setCounter])}
            >
                Decrement Count (Child2)
            </button>
            <Child3 />
        </BorderBox>
    )
}
