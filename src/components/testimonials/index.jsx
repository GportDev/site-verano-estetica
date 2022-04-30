import { Subtitle, Text } from "../styles/styles"
import { TestimonialSection, Avatar, Card, Imagem, AvatarPicture, Container, SwiperDiv } from "./styles"
import { TanSubtitle, TanText } from "../../pages/verano-bronze/styles"

import Alanna from "../../assets/images/allana01.jpg"
import Gabriel from "../../assets/images/foto-avatar-redondo.png"
import Resultado1 from "../../assets/images/bronze/bronze-nat-resultado1.jpg"
import Resultado2 from "../../assets/images/bronze/bronze-nat-resultado2.jpg"


function Testimonials(props) {
  return(props.orange) ? (
    <>
      <TestimonialSection>
        <TanSubtitle margin="0 auto 4rem">
          Resultados e relatos dos nossos amados clientes
        </TanSubtitle>
            <Imagem src={Resultado1}/>
            <Card>
              <Text align="Center" fontSize="1rem">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates recusandae ad sunt temporibus, deserunt illum soluta, praesentium perferendis magnam odio, dicta expedita reiciendis rem in ex nam sequi voluptatibus.
              </Text>
              <Avatar>
                <AvatarPicture src={Gabriel}/>
                <TanText fontSize="1.5rem">
                  Gabriel Porteiro
                </TanText>
              </Avatar>
            </Card>
            <Imagem src={Resultado2}/>
            <Card>
              <Text align="Center" fontSize="1rem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex at vel perferendis, animi enim, iste deleniti adipisci similique eum quia ratione magni voluptas voluptate magnam accusantium. Debitis ut quasi hic!
              </Text>
              <Avatar>
                <AvatarPicture src={Gabriel}/>
                <TanText fontSize="1.5rem">
                  Gabriel Porteiro
                </TanText>
              </Avatar>
            </Card>
      </TestimonialSection>
    </>
  ) : (
    <>
      <TestimonialSection>
        <Subtitle margin="0 auto 4rem">
          Resultados e relatos dos nossos amados clientes
        </Subtitle>
          <SwiperDiv>

              <Container>
                <Imagem src={Alanna}/>
                <Card>
                  <Text align="Center" fontSize="1rem">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates recusandae ad sunt temporibus, deserunt illum soluta, praesentium perferendis magnam odio, dicta expedita reiciendis rem in ex nam sequi voluptatibus.
                  </Text>
                  <Avatar>
                    <AvatarPicture src={Gabriel}/>
                    <Text fontSize="1.5rem">
                      Gabriel Porteiro
                    </Text>
                  </Avatar>
                </Card>
              </Container>


              <Container>
                <Imagem src={Alanna}/>
                <Card>
                  <Text align="Center" fontSize="1rem">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex at vel perferendis, animi enim, iste deleniti adipisci similique eum quia ratione magni voluptas voluptate magnam accusantium. Debitis ut quasi hic!
                  </Text>
                  <Avatar>
                    <AvatarPicture src={Gabriel}/>
                    <Text fontSize="1.5rem">
                      Gabriel Porteiro
                    </Text>
                  </Avatar>
                </Card>
              </Container>
              
          </SwiperDiv>
      </TestimonialSection>
    </>
  )
}

export default Testimonials