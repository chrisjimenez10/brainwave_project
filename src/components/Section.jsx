import SectionSvg from "../assets/svg/SectionSvg";

//This Section Component creates the lines with the crosses that will serve as visually separating each of our sections --> NOTE: This is a highly reusable component where we created mulitple props to customize each section of our UI - Also, we have a "children" prop because in our sections with the exception of the Header, we will be wrapping all of the content INSIDE this Section component (therefore, we need to to include all the elements that we create for those individual sections)
const Section = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children
}) => {

  return (
    <div 
        id={id}
        className={`relative 
        ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} 
        ${className || ""}`}
        `}>
            {children}
        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"/>
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"/>

        {crosses && (
            <>
                <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`}/>
                <SectionSvg crossesOffset={crossesOffset}/>
            </>
        ) }
    </div>
  )

}

export default Section