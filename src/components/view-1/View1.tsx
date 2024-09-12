import { Child1 } from './Child1'
import { Child2 } from './Child2'
import { BorderBox } from '../../styles'

export const View1 = () => {
    return (
        <BorderBox>
            <h1>View 1</h1>
            <Child1 />
            <Child2 />
        </BorderBox>
    )
}
