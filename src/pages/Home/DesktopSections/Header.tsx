import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons

// Imgs
import bgimg_desktop from '@imgs/bgimg_desktop.png'

// Services & Utils
import { server } from "@services/index";
import { goTo, util } from "@utils/index"

// Components

function Home({ func }: any) {
    //  code logic

    return (
        <Wrapper
            style={{
                backgroundImage: `url(${bgimg_desktop})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="h-screen flex flex-col justify-center items-center bg-[#000] bg-opacity-[44%]">
                <p className="py-[1vh] px-[2vw] text-black1 bg-white1 rounded-[10vw] text-[1.2vw] uppercase mb-[1.5vh]">Formação</p>
                <p className="font-one text-white1 text-[9.2vw]  leading-[16vh]">BOMBEIRO</p>
                <p className="text-white1 text-[3.7vw] leading-[5vh] mb-[3vh]">Profissional Civil</p>
                <button className="bg-red1 text-white1 py-[1.5vh] px-[3vw] rounded-[0.8vw]" onClick={() => goTo(window.innerHeight)}>SAIBA MAIS</button>
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

export default Home;
