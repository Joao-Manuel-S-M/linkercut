import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons

// Imgs
import img1 from '@imgs/img1.png'

// Services & Utils
import { server } from "@services/index";
import { goTo, util } from "@utils/index"

// Components

function Header({ prop }: any) {
    const { OpenMenu } = prop

    return (
        <Wrapper
            style={{
                backgroundImage: `url("${img1}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="h-screen flex flex-col justify-center items-center bg-[#000] bg-opacity-[58%]">
                <p className="py-[1vh] px-[8vw] text-black1 bg-white1 rounded-[10vw] text-[4vw] uppercase mb-[3.5vh]">Formação</p>
                <p className="font-one text-white1 text-[22vw] mb-[2vh] leading-[8vh]">BOMBEIRO</p>
                <p className="text-white1 text-[8.2vw] leading-[5vh] mb-[2vh]">Profissional Civil</p>
                <button className="bg-red1 text-white1 py-[1vh] px-[7vw] rounded-[2vw]" onClick={() => goTo(window.innerHeight)}>SAIBA MAIS</button>
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
