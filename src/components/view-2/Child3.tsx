import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'

import { counter } from '../../atoms'
import { BorderBox } from '../../styles'

export const Child3 = () => {
    const count = useAtomValue(counter)
    const setCounter = useSetAtom(counter)
    return (
        <BorderBox>
            <h2>Child 3</h2>
            <p>{count}</p>
            <button
                onClick={useCallback(() => {
                    setCounter(0)
                }, [setCounter])}
            >
                Reset Count (Child3)
            </button>
        </BorderBox>
    )
}
