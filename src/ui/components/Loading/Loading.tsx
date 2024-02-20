import tw from "tailwind-styled-components"

// Animation
import './loading.css'
import '@animations/animate-pulse.css'

// Icons
import logo from '@icons/logo.svg'
import { goToTop } from "@utils/default";

export function Loading() {
    setTimeout(() => {
        let elementToRemove: any = document.getElementById("loading");
        if (elementToRemove) {
            elementToRemove.parentNode.removeChild(elementToRemove);
            goToTop()
        }
    }, 1500);

    return (
        <Wrapper className="loading" id="loading">
            <img src={logo} alt="" className="lg:w-[200px]" />
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`
    flex
    justify-center
    items-center
    w-full
    h-screen
    fixed
    top-0
    bg-white1
`

