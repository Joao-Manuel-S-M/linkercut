import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

// Animation

// Icons
import vetor1 from '@icons/vetor1.svg'
import check from '@icons/check.svg'

// Imgs

// Services & Utils
import { server } from "@services/index";
import { util } from "@utils/index"

// Components

function Home({ func }: any) {
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
            <img src={vetor1} alt="" className="mb-[5vh] w-full" />
            <main style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className="bg-white1 w-[92vw] mx-auto px-[4vw] py-[5vh] flex justify-between rounded-[10px]">
                <section className="w-[50vw]">
                    <div>
                        <h2 className="text-red1 text-[2.8vw]  leading-[7vh] font-bold uppercase mb-[1.6vh]">Formação de bombeiro
                            profissional civil</h2>
                        <p className="text-[1.2vw]  mb-[5vh] uppercase w-[500px]">Se torne um Bombeiro Profissional Civil e aprenda a prevenir acidentes, técnicas de resgate e salvamento, combater incêndios e salvar vidas.</p>
                    </div>
                    <div>
                        <p className="text-[1.4vw] uppercase mb-[1vh] leading-[4vh]">turmas</p>
                        <ul className="pb-[5vh]">
                            {
                                data1.map(el => {
                                    return (
                                        <li className="flex gap-[1vw] items-center">
                                            <div className="w-[8px] h-[8px] bg-red1 rounded-full"></div>
                                            <p className="text-[1.2vw]">{el}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <p className="text-[1.4vw] uppercase mb-[1vh] leading-[1vh]">DURAÇÃO DO CURSO: 80 horas</p>
                        <p className="text-[0.8vw] uppercase mb-[2vh] font-bold">Obs: Aulas práticas em todos os módulos.</p>
                        <ul className="pb-[5vh]">
                            {
                                data2.map(el => {
                                    return (
                                        <li className="flex gap-[1vw] items-center">
                                            <img src={check} alt="" className="w-[1.2vw]" />
                                            <p className="text-[1.2vw]">{el}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="pb-[16vh]">
                        <p className="text-[1.2vw] text-end">O SEU FUTURO COMEÇA AQUI!</p>
                        <p className="text-[2vw] text-end uppercase font-bold">Inscrições abertas</p>
                        <p className="text-end uppercase">Começo PREVISTO: 16/03/2024</p>
                    </div>
                    <div>
                        <p className="text-center text-[3.2vh] uppercase font-bold pb-[3vh]" >inscreva-se agora!</p>
                        <div style={{
                            border: "1px solid #5A5A5A",
                            borderRadius: "10px"
                        }}
                            className="w-[38vw] py-[4vh] px-[2vw]">
                            <p className="text-center text-[1.6vw] font-bold">Está pensando em realizar o curso?</p>
                            <p className="text-center pb-[3vh]">Cadastre-se agora logo entraremos em contato</p>
                            <div>
                                <input type="text" style={{ border: "1px solid #5A5A5A" }} className="w-full rounded-[10px] py-[0.8vh] pl-[10px] mb-[1.2vh]" placeholder="NOME" />
                                <input type="text" style={{ border: "1px solid #5A5A5A" }} className="w-full rounded-[10px] py-[0.8vh] pl-[10px] mb-[1.2vh]" placeholder="E-MAIL" />
                                <input type="text" style={{ border: "1px solid #5A5A5A" }} className="w-full rounded-[10px] py-[0.8vh] pl-[10px] mb-[2vh]" placeholder="WHATSAPP" />
                            </div>
                            <button className="w-full rounded-[10px] bg-red1 text-white1 py-[2vh] text-center">Quero receber mais informações</button>
                        </div>
                    </div>
                </section>
            </main>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex 
    flex-col 
    flex-grow
    pb-[10vh]
`

export default Home;
