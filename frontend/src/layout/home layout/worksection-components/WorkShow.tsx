import phone from "../../../assets/phone.png"
import laptop from "../../../assets/laptop.png"
import Button from "../../../components/Button"
const WorkShow = () => {
  return (
    <section id="work-show">
        <section id="display-devices-section">
            <img src={phone} alt="phone" id="phone-img"/>
            <img src={laptop} alt="laptop" id="laptop-img"/>
        </section>
        <section id="work-description-section">
            <h2 className="h4" id="work-name">Agyle Intelligence</h2>
            <div className="separator">
                <p id="work-description">
                    A platform for automating data collection 
                    and reporting throughout teams, operations 
                    and supply chains.
                </p>
                <Button content="Visit Website" src="" id="secondary-btn"/>
            </div>
        </section>
    </section>
  )
}

export default WorkShow