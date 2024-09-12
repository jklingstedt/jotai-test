import { Child1 } from './Child1'
import { Child2 } from './Child2'
import { BorderBox } from '../../styles'

export const View2 = () => {
    return (
        <BorderBox>
            <h1>View 2</h1>
            <Child1 />
            <Child2 />
        </BorderBox>
    )
}
