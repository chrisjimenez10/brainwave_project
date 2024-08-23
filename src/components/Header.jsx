import Button from './Button';
import { useLocation } from 'react-router-dom';
import { brainwave } from "../assets"; //Vite uses Webpack under the hood, so we are using the built-in feature from Webpack called "file-loader/url-loader" that allows importing files as modules --> NOTE: In our assets directory, we have an index.js file that is importing ALL the files/images as modules (saved into variables) AND exporting them all so we can simply import from any other file using the variable/module name and the "/assets" directory (The importing is coming from that index.js file --> Keeps things organized)
import { navigation } from '../constants';

const Header = () => {
    // Here, we are using the useLocation() Hook to use in our styling logic for the links in the <a><a/> tags to give the effect that when we click on a link and redirect to that URL, the other links turn a gray color while the link that MATCHES the URL pattern has a white color (Good UI/UX design) --> The pathname variable can use the methods from the useLocation() Hook, and we use the hash() method which identifies a URL fragment starting with a hashtag # --> NOTE: This is why our endpoints for all the links and redirections start with a hashtag # when we assigned the URL using the "href" attribute
    const pathname = useLocation();

  return (

    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Brainwave"/>
            </a>

            <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item)=>{
                        return(
                            <a key={item.id} href={item.url} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        )
                    })}
                </div>
            </nav>

        </div>

    </div>
  )
}

export default Header;