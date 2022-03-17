import React from "react";
import { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink, MenuWrapper} from "./header";
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
            <MenuLink href="#/verano-estetica/#Home">
              <MenuItem>Inicio</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#Platforms">
              <MenuItem>Plataformas</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#Produres">
              <MenuItem>Procedimentos</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#Testimonials">
              <MenuItem>Relatos</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#About">
              <MenuItem>Sobre</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#Contact">
              <MenuItem>Contato</MenuItem>
            </MenuLink>
          </MenuItems>
        </Menu>
      </MenuWrapper>
    </HeaderStyle>
  )
}

export default Header