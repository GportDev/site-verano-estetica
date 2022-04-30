import styled from "styled-components"
import { FiMenu } from 'react-icons/fi';

/* ------ HEADER ------ */
export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`

export const Menu = styled.nav`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1170px;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuItems = styled.ul`
  text-align: center;
`

export const MenuItem = styled.li`
  text-align: center;
`

export const MenuLink = styled.a`
  font-family: 'Poppins';
  color: var(--Dark-purple);
  text-decoration: none;
  list-style: none;
  display: inline-block;
  justify-content: space-between;
  margin-left: 2.25rem;
  font-size: 1.15rem;
  &:hover {
    color: var(--Highlight-purple);
    transition: color 0.3s;
  }
  &.taning {
    :hover {
      color: var(--Strong-orange);
      transition: color 0.3s;
    }
  }
`

export const MenuHamb = styled(FiMenu)`
  color: ${props => props.color};
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`