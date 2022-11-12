import "./_worksection.scss"
import HeadingWorkSection from "./worksection-components/HeadingWorkSection"
import WorkShow from "./worksection-components/WorkShow"
const WorkSection = () => {
  return (
    <section id="work-section" className="big-section">
        <HeadingWorkSection/>
        <WorkShow/>
    </section>
  )
}

export default WorkSection