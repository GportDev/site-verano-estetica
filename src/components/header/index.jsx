import React from "react";
import { HeaderStyle, Menu, MenuItems, MenuItem, MenuLink, MenuHamb} from "./header";
import { LogoVerano } from "../styles/styles.js";
import Logo from "../../assets/images/Logo Verano.png"
import Scroll from 'react-scroll'
import { animateScroll as scroll} from 'react-scroll'

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

              <MenuLink
                activeClass="orangeActive"
                to="orangeIntro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="taning"
              >
                <MenuItem>Inicio</MenuItem>
              </MenuLink>

              <MenuLink 
                activeClass="orangeActive"
                to="orangeProcedures"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="taning">
                <MenuItem>Tratamentos</MenuItem>
              </MenuLink>

              <MenuLink 
                activeClass="orangeActive"
                to="orangeTestimonials"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="taning">
                <MenuItem>Relatos</MenuItem>
              </MenuLink>

              <MenuLink 
                activeClass="orangeActive"
                to="orangeAbout"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="taning"
              >
                <MenuItem>Sobre</MenuItem>
              </MenuLink>

              <MenuLink 
                activeClass="orangeActive"
                to="orangeContact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500} 
                className="taning"
              >
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
              <MenuLink 
                activeClass="active"
                to="purpleIntro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MenuItem>Inicio</MenuItem>
              </MenuLink>
              <MenuLink 
                activeClass="active"
                to="platforms"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MenuItem>Plataformas</MenuItem>
              </MenuLink>
              <MenuLink 
                activeClass="active"
                to="procedures"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MenuItem>Procedimentos</MenuItem>
              </MenuLink>
              <MenuLink 
                activeClass="active"
                to="purpleTestimonials"
                spy={true}
                smooth={true}
                duration={500}
              >
                <MenuItem>Relatos</MenuItem>
              </MenuLink>
              <MenuLink 
                activeClass="active"
                to="purpleAbout"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MenuItem>Sobre</MenuItem>
              </MenuLink>
              <MenuLink 
                activeClass="active"
                to="purpleContact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MenuItem>Contato</MenuItem>
              </MenuLink>
            </MenuItems>
          }
        </Menu>
    </HeaderStyle>
  );
}

export default Header