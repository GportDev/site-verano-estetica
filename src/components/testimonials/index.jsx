import { Subtitle, TestimonialSection, Imagem, Card, Testimonial, Swiper, Text, Avatar, AvatarPicture } from "../styles/styles"
import Alanna from "../../assets/images/allana01.jpg"
import Gabriel from "../../assets/images/foto-avatar-redondo.png"

function Testimonials() {
  return(
    <>
      <TestimonialSection>
        <Subtitle margin="0 auto 4rem">
          Resultados e relatos dos nossos amados clientes
        </Subtitle>
        <Swiper>
          <Testimonial>
            <Imagem src={Alanna} width="32rem"/>
            <Card margin="2.5rem auto 0" width="26rem" padding="1.5rem">
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
          </Testimonial>
          <Testimonial>
            <Imagem src={Alanna} width="32rem"/>
            <Card margin="2.5rem auto 0" width="26rem" padding="1.5rem">
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
          </Testimonial>
        </Swiper>
      </TestimonialSection>
    </>
  )
}

export default Testimonials