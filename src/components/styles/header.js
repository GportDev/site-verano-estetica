import styled from "styled-components"

/* ------ HEADER ------ */
const HeaderStyle = styled.header`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #f9f9f9;
  width: 100%;
  &.scroll {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  }
`

const Menu = styled.nav`
  height: 4.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItems = styled.ul`
  text-align: center;
  margin-right: 8.5rem;
`
const MenuItem = styled.li`
  text-align: center;
`

const MenuLink = styled.a`
  font-family: 'Poppins';
  color: #23042F;
  text-decoration: none;
  list-style: none;
  display: inline-block;
  justify-content: space-between;
  margin-left: 2.25rem;
  font-size: 1.25rem;
  &:hover {
    color: #D465E7;
    transition: color 0.3s;
  }
`
export { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink }