import tw from "tailwind-styled-components"

// Animation
import './loading.css'
import '@animations/animate-pulse.css'

// Icons
import logo from '@icons/logo.svg'

export function Loading() {
    setTimeout(() => {
        let elementToRemove: any = document.getElementById("loading");
        if (elementToRemove) {
            elementToRemove.parentNode.removeChild(elementToRemove);
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
    absolute
    top-0
    bg-white1
`

