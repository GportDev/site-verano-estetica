import React from "react";
import { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink, MenuWrapper} from "../styles/header.js";
import { LogoVerano } from "../styles/styles.js";
import Logo from "../../assets/images/Logo Verano.png"

function Header() {
  return(
    <HeaderStyle>
      <MenuWrapper>
        <Menu>
          <a href="/">
            <LogoVerano alt="Logo Verano Estética Avaançada" src={Logo} height='3rem' width='6.56rem'/>
          </a>
          <MenuItems>
            <MenuLink href="#Home" color="#23042F" hoverColor="#D465E7;">
              <MenuItem>Inicio</MenuItem>
            </MenuLink>
            <MenuLink href="#Services" color="#23042F" hoverColor="#D465E7;">
              <MenuItem>Serviços</MenuItem>
            </MenuLink>
            <MenuLink href="#Testimonials" color="#23042F" hoverColor="#D465E7;">
              <MenuItem>Relatos</MenuItem>
            </MenuLink>
            <MenuLink href="#About" color="#23042F" hoverColor="#D465E7;">
              <MenuItem>Sobre</MenuItem>
            </MenuLink>
            <MenuLink href="#Contact" color="#23042F" hoverColor="#D465E7;">
              <MenuItem>Contato</MenuItem>
            </MenuLink>
          </MenuItems>
        </Menu>
      </MenuWrapper>
    </HeaderStyle>
  )
}

export default Header