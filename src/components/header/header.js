import styled from "styled-components"

/* ------ HEADER ------ */
export const HeaderStyle = styled.header`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #f9f9f9;
  width: 100%;
  &.scroll {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  }
`
export const MenuWrapper = styled.div`
  margin: 0 auto;
  padding: 0 8.5rem;
  width: 1440px;
`

export const Menu = styled.nav`
  height: 4.5rem;
  width: 100%;
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