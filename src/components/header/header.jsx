import React from "react";
import { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink} from "../styles/header.js";
import { LogoVerano } from "../styles/styles.js";
import Logo from "../../assets/images/Logo Verano.png"

function Header() {
  return(
    <HeaderStyle>
      <Menu>
        <LogoVerano alt="Logo Verano Estética Avaançada" src={Logo} height='3rem' width='6.56rem' marginLeft='8.5rem'/>
        <MenuItems>
          <MenuLink href="#Home">
            <MenuItem>Inicio</MenuItem>
          </MenuLink>
          <MenuLink href="#Services">
            <MenuItem>Serviços</MenuItem>
          </MenuLink>
          <MenuLink href="#Testimonials">
            <MenuItem>Relatos</MenuItem>
          </MenuLink>
          <MenuLink href="#About">
            <MenuItem>Sobre</MenuItem>
          </MenuLink>
          <MenuLink href="#Contact">
            <MenuItem>Contato</MenuItem>
          </MenuLink>
        </MenuItems>
      </Menu>
    </HeaderStyle>
  )
}

export default Header