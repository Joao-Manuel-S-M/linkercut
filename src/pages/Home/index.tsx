import tw from "tailwind-styled-components"
import { useEffect, useRef, useState } from "react"

// Styles
import '@animations/animate-pulse.css'

// Icons

// Imgs

// Components

// Sections
import MHeader from "./MobileSections/Header"
import MSec1 from "./MobileSections/Sec1"
import MSec2 from "./MobileSections/Sec2"
import { Loading } from "@components/Loading/Loading";
import DHeader from "./DesktopSections/Header"
import DSec1 from "./DesktopSections/Sect1"

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
                <MSec1 />
                <MSec2 />
            </Mobile>
            {
                // mobileMenu && (<Menu prop={{ OpenMenu }} />)
            }
            {/* Desktop */}
            <Desktop className="lg:flex flex-col">
                {/* content here */}
                <DHeader />
                <DSec1 />
            </Desktop>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`
    bg-[#EFEFEF]
`

const Mobile = tw.section`
    lg:hidden
`
const Desktop = tw.section`
    hidden
`

export default Home;