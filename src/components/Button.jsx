import React from 'react'
import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({ className, href, onClick, children, px, white}) => {
    //Here, we are creating a classes variable that will hold the styling elements of the button --> NOTE: To ensure this complex component is highly re-usable, we use the Logical OR (||) and ternary operator to check if ANY of the props that are destructured in this component are being being passed/exist from Parent component and assigning that value or assigning a DEFAULT
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const renderButton = () => (
        <button className={classes}>
            {/* The children prop is very powerful and it is ANYTHING that is INSIDE the Component Tags in the Parent Component that gets passed within the children prop*/}
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    )
    //We can create a function and then return the invocation so it is automatically rendered in the Parent component, or we can simply return the button element like we are used to --> NOTE: The advantages of defining a function and return the invocation are - 1.Readability, 2.Reusability, 3.Debugging, 4.Organization
    return renderButton();
}

export default Button