import Form from "./formsection-components/Form"
import "./_formsection.scss"
const FormSection = () => {
  return (
    <section id="form-section">
        <h1 className="h3-bold">
            Got a project in mind ? 
            Use the <span className="secondary-color">Form</span> to give me the general 
            details and we will talk as soon as possible.
        </h1>
        <Form/>
    </section>
  )
}

export default FormSection