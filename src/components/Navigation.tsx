import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
        margin: 0;
        min-width: 500px;
    }
    li {
        background-color: #000;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #6a3e3e;
        }

        a {
            text-decoration: none;
            color: #fff;
        }
    }
`

export const Navigation = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/">Start</NavLink>
                </li>
                <li>
                    <NavLink to="/view-1">View 1</NavLink>
                </li>
                <li>
                    <NavLink to="/view-2">View 2</NavLink>
                </li>
            </ul>
        </StyledNav>
    )
}
