import tw from "tailwind-styled-components"
import { useEffect, useRef, useState } from "react"

// Styles
import '@animations/animate-pulse.css'

// Icons

// Imgs

// Components

// Sections
import MHeader from "./MobileSections/Header"
import { Loading } from "@components/Loading/Loading";

// Structure
function Home() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const OpenMenu = () => setMobileMenu(!mobileMenu);

    return (
        <Wrapper>
            <Loading />
            <Mobile>
                {/* content here */}
                <MHeader prop={{ OpenMenu }} />
            </Mobile>
            {
                // mobileMenu && (<Menu prop={{ OpenMenu }} />)
            }
            {/* Desktop */}
            <Desktop className="lg:flex flex-col">
                {/* content here */}
            </Desktop>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`
    bg-black1
`

const Mobile = tw.section`
    lg:hidden
    px-[20px]
`
const Desktop = tw.section`
    hidden
`

export default Home;