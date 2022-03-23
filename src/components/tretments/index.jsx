import { CardImg, EmptyImg, TanButtonFilled, TanSubtitle, TanText } from "../../pages/verano-bronze/styles"
import { Card, ColumnSection, SwiperDiv } from "../styles/styles"
import NatTanCardImg from "../../assets/images/bronze/bronze-natural-card.png"
import MoonBathCardImg from "../../assets/images/bronze/banho-de-lua-card.png"

function Tretments() {
  return (
    <ColumnSection>
      <TanSubtitle className="SectionTitle">Tratamentos</TanSubtitle>
      <TanText margin='4rem'>
        Pioneira no bronzeamento natural em São José dos Campos, a Verano Bronze conta com <strong>profissionais dedicadas, espaço aconchegante e experiência inexquecível!</strong>
        <br/><br/>
        Nossos tratamentos são:
      </TanText>
        <SwiperDiv>
          <Card className="service taning">
            <TanSubtitle margin="0 0 4rem" lineHeight="2.25rem" fontWeight="600">Bronzeamento gelado</TanSubtitle>
            <EmptyImg />
            <TanText margin="0 0 1.5rem">
              Bronzeamento para qualquer época do ano, <strong>não precisa de luz solar.</strong>
            </TanText>
            <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/bronzeamento-gelado" className="platform">Saiba mais</TanButtonFilled>
          </Card>
          <Card className="service taning">
            <TanSubtitle margin="0 0 4rem" lineHeight="2.25rem" fontWeight="600">Bronzeamento natural</TanSubtitle>
            <CardImg src={NatTanCardImg}/>
            <TanText margin="0 0 1.5rem">
              Bronzeamento 100% natural, com <strong>luz do sol</strong> e produtos de primeita qualidade
            </TanText>
            <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/bronzeamento-natural" className="platform">Saiba mais</TanButtonFilled>
          </Card>
          <Card className="service taning">
            <TanSubtitle margin="0 0 4rem" lineHeight="4.25rem" fontWeight="600">Banho de lua</TanSubtitle>
            <CardImg src={MoonBathCardImg}/>
            <TanText margin="0 0 1.5rem">
              Clareamento de pelos do corpo todo.
            </TanText>
            <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/banho-de-lua" className="platform">Saiba mais</TanButtonFilled>
          </Card>
        </SwiperDiv>
    </ColumnSection>
  )
}

export default Tretments