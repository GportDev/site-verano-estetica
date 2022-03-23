import React from "react";
import { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink, MenuWrapper} from "./header";
import { LogoVerano } from "../styles/styles.js";
import Logo from "../../assets/images/Logo Verano.png"

function Header(props) {
  return(props.orange) ? (
    <HeaderStyle>
      <MenuWrapper>
        <Menu>
          <a href="/">
            <LogoVerano alt="Logo Verano Estética Avaançada" src={Logo} height='3rem' width='6.56rem'/>
          </a>
          <MenuItems>
            <MenuLink href="#/verano-estetica/#HomeBronze" className="taning">
              <MenuItem>Inicio</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#Tretments" className="taning">
              <MenuItem>Tratamentos</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#Results" className="taning">
              <MenuItem>Relatos</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#AboutBronze" className="taning">
              <MenuItem>Sobre</MenuItem>
            </MenuLink>
            <MenuLink href="#/verano-estetica/#ContactBronze" className="taning">
              <MenuItem>Contato</MenuItem>
            </MenuLink>
          </MenuItems>
        </Menu>
      </MenuWrapper>
    </HeaderStyle>
  ) : (
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
  );
}

export default Header