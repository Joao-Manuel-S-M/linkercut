import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons
import vetor1 from '@icons/vetor1.svg'
import check from '@icons/check.svg'

// Imgs

// Services & Utils
import { server, sec1Data } from "@services/index";
import { util } from "@utils/index"

// Components

function Home({ func }: any) {
    //  code logic
    const data1 = [
        "Sábado de 8:00 às 17:00",
        "Domingo de 08:00 às 17:00",
        "Segunda e Quarta de 18:30 às 22:30"
    ]


    const data2 = [
        "Material Didático Digital Grátis",
        "Homologação Grátis",
        "Certificado Grátis",
        "Camisa do Curso Grátis"
    ]


    return (
        <Wrapper>
            <img src={vetor1} alt="" className="mb-[5vh]" />
            <main style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className="w-[92vw] mx-auto px-[4vw] py-[5vh]
            ">
                <h2 className="text-red1 text-[5.4vw] text-center leading-[5.8vh] font-bold uppercase mb-[1.6vh]">Formação de bombeiro
                    profissional civil</h2>
                <p className="text-[3.4vw] text-center mb-[5vh] uppercase">Se torne um Bombeiro Profissional Civil e aprenda a prevenir acidentes, técnicas de resgate e salvamento, combater incêndios e salvar vidas.</p>
                <p className="text-[4.2vw] uppercase mb-[1vh]">turmas</p>
                <ul className="pb-[5vh]">
                    {
                        data1.map(el => {
                            return (
                                <li className="flex gap-[2.5vw] items-center">
                                    <div className="w-[8px] h-[8px] bg-red1 rounded-full"></div>
                                    <p className="text-[4vw]">{el}</p>
                                </li>
                            )
                        })
                    }
                </ul>

                <div>
                    <p className="text-[4.2vw] uppercase mb-[0.2vh]">DURAÇÃO DO CURSO: 80 horas</p>
                    <p className="text-[2.8vw] uppercase mb-[0.2vh] font-bold">Obs: Aulas práticas em todos os módulos.</p>
                    <ul>
                        {
                            data2.map(el => {
                                return (
                                    <li className="flex gap-[2.5vw] items-center">
                                        <img src={check} alt="" className="w-[5vw]" />
                                        <p className="text-[4vw]">{el}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
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
