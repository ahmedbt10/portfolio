import "./_offers.scss"
import onTimeSrc from "../../assets/tasks.png"
import qualitySrc from "../../assets/quality.png"
const Offers = () => {
  return (
    <section id="offers-section-container">
        <h1 className="h3">
            Regardless of <span className="primary-color">Project Size</span>,
            You will always get:
        </h1>
        <section id="offers-section">
            <ol id="offers-list">
                <div id="first-item" className="list-item-container">
                    <img src={onTimeSrc} alt="on-time icon" className="offer-icon"/>
                    <li className="list-item h4" >
                        On-time delevery
                    </li>
                    <p>
                    I know time is money so I don't 
                    want to waste yours. Or mine. So I guarantee 
                    that I will always deliver what you pay 
                    for as promised.
                    </p>
                </div>
                <div id="second-item" className="list-item-container">
                    <img src={qualitySrc} alt="on-time icon" className="offer-icon"/>
                    <li className="list-item h4" >
                        Quality
                    </li>
                    <p>
                    I don't want to put my name on something subpar 
                    so my first concern is always quality. No matter what, 
                    you will love the end result.
                    </p>
                </div>
            </ol>
        </section>
    </section>
  )
}

export default Offers