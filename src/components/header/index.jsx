import React from "react";
import { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink} from "./header";
import { LogoVerano } from "../styles/styles.js";
import Logo from "../../assets/images/Logo Verano.png"
import { MenuHamb } from "../services/styles";

function Header(props) {
  return(props.orange) ? (
    <HeaderStyle>
        <Menu>
          <a href="/">
            <LogoVerano alt="Logo Verano Estética Avaançada" src={Logo}/>
          </a>
          {window.screen.width <= 800 ?
            <a href="#/verano-bronze/mobile-menu">
              <MenuHamb color="var(--Dark-orange)"/>
            </a>
            : 
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
          }
        </Menu>
    </HeaderStyle>
  ) : (
    <HeaderStyle>
        <Menu>
          <a href="/">
            <LogoVerano alt="Logo Verano Estética Avaançada" src={Logo}/>
          </a>
          {window.screen.width <= 800 ?
            <a href="#/verano-estetica/mobile-menu">
              <MenuHamb color="var(--Dark-orange)"/>
            </a>
             :
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
          }
        </Menu>
    </HeaderStyle>
  );
}

export default Header