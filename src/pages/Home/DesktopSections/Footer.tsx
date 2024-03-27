import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons
import logo from '@icons/logo.svg'
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

function Footer({ func }: any) {
    //  code logic

    return (
        <Wrapper>
            <img src={logo3} alt="" className="w-[5.2vw] mx-auto mt-[-5vh]" />
            <section className="flex pt-[3vh] pb-[7vh]">
                <div className="flex w-[50vw] justify-center">
                    <div className="w-[300px]">
                        <img src={logo} alt="" />
                        <p className="font-bold">ONFIRE | Cursos & Treinamentos</p>
                        <p className="text-[1vw]">📍SEU FUTURO COMEÇA AQUI</p>
                    </div>
                </div>
                <div className=" w-[50vw]">
                    <div className="w-[300px] mx-auto">
                        <p className="font-bold text-[1.5vw] pb-[8px]">Fale conosco</p>
                        <div className="flex gap-[1vw] mb-[1vh]">
                            <img src={zap} alt="" className="w-[1.2vw]" />
                            <p className="font-bold text-[1.2vw]">(21) 98881-3888</p>
                        </div>
                        <div className="flex gap-[1vw] mb-[1vh]">
                            <img src={mail} alt="" className="w-[1.2vw]" />
                            <p className="font-bold text-[1.2vw]">contato@onfirecursos.com</p>
                        </div>
                        <div className="flex gap-[1vw]">
                            <img src={map} alt="" className="w-[20px]" />
                            <p className=" font-bold text-[1.2vw]">Rua Alfredo dos Anjos, 47 - Centro, São João de Meriti - RJ, 25520-060</p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ borderTop: "0.6vh solid rgb(239, 239, 239)" }}
                className="py-[1vh] flex items-center">
                <footer className=" py-[2vh] w-[50vw]">
                    <div className="w-[22.5vw] mx-auto">
                        <p className="font-bold text-[1vw]">© Copyright 2023 by onfire</p>
                        <p className="font-bold text-[0.8vw]">Criado por <a href="https://victorpereiira.com/">victorpereiira</a></p>
                    </div>
                </footer>
                <div className="w-[50vw]">
                    <div className="flex justify-center gap-[2vw] pr-[10vw] items-center">
                        <img src={insta} alt="insta" className="w-[3vw] cursor-pointer" onClick={() => window.location.href = "https://www.instagram.com/onfire.cursos/"} />
                        <img src={face} alt="face" className="w-[3vw] cursor-pointer" onClick={() => window.location.href = "https://www.facebook.com/onfirecursosetreinamentos?mibextid=ZbWKwL"} />
                        <img src={mail2} alt="email" className="w-[3vw] cursor-pointer" onClick={() => window.location.href = "mailto:contato@onfirecursos.com.br"} />
                    </div>
                </div>
            </section>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex 
    flex-col 
    flex-grow\\
    h-full
    bg-white1
`

export default Footer;
