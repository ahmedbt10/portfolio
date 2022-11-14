import Slider from "../../components/Slider"
import {useMediaQuery} from "@chakra-ui/react"
import "./_services.scss"
const Services = () => {
  const [isSmallerThan786] = useMediaQuery('(max-width: 786px)')
  const sections = <>
  <section className="service-section"></section>
  <section className="service-section"></section>
  <section className="service-section"></section>
</>
  return (
    <section id="services-section">
        <h1 className="h3-bold">Services</h1>
        <section id="services-section-container">
          {isSmallerThan786?sections:
            <Slider>   
                {sections}
            </Slider>
            }
        </section>
    </section>
  )
}

export default Services