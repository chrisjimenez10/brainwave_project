import Button from './Button';
import ButtonGradient from '../assets/svg/ButtonGradient';
import MenuSvg from "../assets/svg/MenuSvg";
import { useLocation } from 'react-router-dom';
import { brainwave } from "../assets"; //Vite uses Webpack under the hood, so we are using the built-in feature from Webpack called "file-loader/url-loader" that allows importing files as modules --> NOTE: In our assets directory, we have an index.js file that is importing ALL the files/images as modules (saved into variables) AND exporting them all so we can simply import from any other file using the variable/module name and the "/assets" directory (The importing is coming from that index.js file --> Keeps things organized)
import { navigation } from '../constants';
import { HamburgerMenu } from "./design/Header";
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';


const Header = () => {
    // Here, we are using the useLocation() Hook to use in our styling logic for the links in the <a><a/> tags to give the effect that when we click on a link and redirect to that URL, the other links turn a gray color while the link that MATCHES the URL pattern has a white color (Good UI/UX design) --> The pathname variable can use the methods from the useLocation() Hook, and we use the hash() method which identifies a URL fragment starting with a hashtag # --> NOTE: This is why our endpoints for all the links and redirections start with a hashtag # when we assigned the URL using the "href" attribute
    const pathname = useLocation();
    //State
    const [openNavigation, setOpenNavigation] = useState(false);
    //Function
    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false);
            enablePageScroll()
        }else{
            setOpenNavigation(true);
            disablePageScroll();
        }
    };
    const handleClick = () => {
        if(!openNavigation) return;
        enablePageScroll();
        //Function passed to onClick attribute to navigation links <a></a> tags, so when we click on them we exit from the Hamburger Menu UI
        setOpenNavigation(false);
    };

  return (

    // Here, we are creating a STICKY Header with the properties of "fixed" which removes from normal document flow and positions it relative to the viewport (visible when we scroll down/up) and with the position "top-0, left-0, w-full" we ensure it covers the FULl width of the screen and that it it's aligned at the top edge and left edge of the viewport --> NOTE: Critical to include "z-50" so that the Header is ON TOP of any other element in the screen/viewport (Bigger z-index, Higher priority/More on Top)
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Brainwave"/>
            </a>

            <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item)=>{
                        return(
                            <a key={item.id} onClick={handleClick} href={item.url} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        )
                    })}
                </div>
                <HamburgerMenu />
            </nav>

            <a href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
            New Account
            </a>

            <Button className="hidden lg:flex" href="#login">
                Sign In
            </Button>

            <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation}/>
            </Button>

        </div>
        <ButtonGradient />
    </div>
  )
}

export default Header;