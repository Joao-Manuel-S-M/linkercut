import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons
import vetor1 from '@icons/vetor1.svg'

// Imgs

// Services & Utils
import { server } from "@services/index";
import { util } from "@utils/index"

// Components

function Home({ func }: any) {
    //  code logic

    return (
        <Wrapper>
            <img src={vetor1} alt="" />
            <main>

            </main>
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

export default Home;
