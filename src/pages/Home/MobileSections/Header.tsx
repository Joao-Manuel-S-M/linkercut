import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons

// Imgs

// Services & Utils
import { server } from "@services/index";
import { util } from "@utils/index"

// Components

function Header({ prop }: any) {
    const { OpenMenu } = prop

    return (
        <Wrapper>
            {/* content here...*/}
            <div className="h-screen flex justify-center items-center">
                <p className="text-center">Header</p>
            </div>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex 
    flex-col 
    flex-grow
    h-screen
`

export default Header;
