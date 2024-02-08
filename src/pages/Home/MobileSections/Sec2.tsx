import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons

// Imgs

// Services & Utils
import { server } from "@services/index";
import { util } from "@utils/index"

// Components

function Sect2({ func }: any) {
    //  code logic

    return (
        <Wrapper>
            <div className="bg-red1 py-[5vh]">
                <header>
                    <p className="text-white1 text-center text-[4vh] uppercase font-bold">inscreva-se agora!</p>
                    <p className="text-white1 text-center text-[3.2vh] pb-[1vh] font-bold">Está pensando em realizar o curso?</p>
                    <p className="text-white1 text-center text-[2.2vh] pb-[4vh] font-bold">Cadastre-se agora logo entraremos em contato</p>
                </header>
                <main className="flex flex-col items-center gap-[2vh]">
                    <input type="text" placeholder="NOME" className="w-[95%] rounded-[5px] py-[2vh] px-[5vw] placeholder:text-[4vw]" />
                    <input type="text" placeholder="E-MAIL" className="w-[95%] rounded-[5px] py-[2vh] px-[5vw] placeholder:text-[4vw]" />
                    <input type="text" placeholder="WHATSAPP" className="w-[95%] rounded-[5px] py-[2vh] px-[5vw] placeholder:text-[4vw] mb-[4vh]" />
                    <button className="bg-white1 py-[3.2vh] flex justify-center items-center w-[95%] rounded-[5px]
                    ">Quero receber mais informações</button>
                </main>
            </div>
            <div className="pb-[6vh]">
                <p className="text-center w-[80vw] mx-auto py-[5vh]">🔥 <br />
                    Faça sua matrícula agora mesmo e venha se qualificar com a melhor escola de formação da região.</p>
            </div>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex 
    flex-col 
    flex-grow
    h-full
`

export default Sect2;
