import Section from "./Section";

const Footer = () => {
  return (
    //Here, we are using the ! (IMPORTANT) which resets/gives priority to these CSS declarations (Since the Section component has existing px, py values)
    <Section crosses className="!px-0 !py-10">

    </Section>
  )
}

export default Footer