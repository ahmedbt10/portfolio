import leftArrow75 from "../assets/left-arrow-75.png"
import rightArrow75 from "../assets/right-arrow-75.png"

const Slider = ({children}:{children:JSX.Element}) => {
  return (
    <div id="slider">
      <button>
        <img src={leftArrow75} alt="left-arrow"  className="icon-btn" id="left-arrow" height="32" width="32"/>
      </button>
      {children}
      <button>
        <img src={rightArrow75} alt="right-arrow"  className="icon-btn" id="right-arrow" height="32" width="32"/>
      </button>
    </div>
  )
}

export default Slider