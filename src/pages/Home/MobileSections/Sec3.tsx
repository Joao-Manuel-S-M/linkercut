import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons
import logo3 from '@icons/logo3.svg'
import zap from '@icons/zap.svg'
import mail from '@icons/mail.svg'
import map from '@icons/map.svg'
import face from '@icons/face.svg'
import insta from '@icons/insta.svg'
import mail2 from '@icons/mail2.svg'

// Imgs

// Services & Utils
import { server } from "@services/index";
import { util } from "@utils/index"

// Components

function Sec3({ func }: any) {
    //  code logic

    return (
        <Wrapper>
            <footer className="flex flex-col justify-between flex-grow">
                <img src={logo3} alt="" className="mx-auto mt-[-50px] w-[120px]" />
                <div>
                    <p className="text-center font-bold">ONFIRE | Cursos & Treinamentos</p>
                    <p className="text-center text-[3.8vw] font-bold">📍SEU FUTURO COMEÇA AQUI</p>
                </div>
                <div>
                    <p className="text-center font-bold text-[5vw] pb-[8px]">Fale conosco</p>
                    <div className="flex justify-center gap-[2vw]">
                        <img src={zap} alt="" />
                        <p className="font-bold text-[4.2vw]">(21) 98881-3888</p>
                    </div>
                    <div className="flex justify-center gap-[2vw]">
                        <img src={mail} alt="" />
                        <p className="font-bold text-[4.2vw]">contato@onfirecursos.com</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={map} alt="" />
                    <p className="text-center font-bold text-[4vw]">Rua Alfredo dos Anjos, 47 <br /> Centro, São João de Meriti - RJ, 25520-060</p>
                </div>
                <div className="flex justify-center gap-[2vw]">
                    <img src={insta} alt="insta" className="w-[15vw]" onClick={() => window.location.href = "https://www.instagram.com/onfire.cursos/"} />
                    <img src={face} alt="face" className="w-[15vw]" onClick={() => window.location.href = "https://www.facebook.com/onfirecursosetreinamentos?mibextid=ZbWKwL"} />
                    <img src={mail2} alt="email" className="w-[15vw]" onClick={() => window.location.href = "mailto:contato@onfirecursos.com.br"} />
                </div>
                <footer className="py-[2vh] bg-[#EFEFEF]">
                    <p className="text-center font-bold text-[3vw]">© Copyright 2023 by onfire</p>
                    <p className="text-center font-bold text-[2.8vw]">Criado por <a href="https://victorpereiira.com/">victorpereiira</a></p>
                </footer>
            </footer>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex 
    flex-col 
    flex-grow
    h-screen
    bg-white1
`

export default Sec3;
