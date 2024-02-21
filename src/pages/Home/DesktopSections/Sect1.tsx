import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";


import axios from "axios"
axios.defaults.baseURL = 'https://grcqm5z45bbma5vdp7dkmh24ma0qmxdv.lambda-url.us-east-1.on.aws';

// Animation

// Icons
import vetor3 from '@icons/vetor1.svg'
import check from '@icons/check.svg'
import logo from "@icons/logo.svg"
import face from '@icons/face.svg'
import insta from '@icons/insta.svg'
import mail2 from '@icons/mail2.svg'
import refresh from '@icons/refresh.svg'

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

    const [loadingModal, setLoadingModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [errorModal, setErrorModal] = useState(false)

    const [NoValueModal, setNoValueModal] = useState(false)
    const [AdcMsg, setAdcMsg] = useState("Por Favor Preencha todos os campos")

    const [InputValue1, setInputValue1] = useState("")
    const [InputValue2, setInputValue2] = useState("")
    const [InputValue3, setInputValue3] = useState("")


    async function submit() {
        console.log(InputValue1);
        if (!InputValue1 || !InputValue2 || !InputValue3) {
            setNoValueModal(!NoValueModal)
        } else {
            setLoadingModal(!loadingModal)
            await axios.post('/init',
                {
                    name: InputValue1,
                    email: InputValue2,
                    phone: Number(InputValue3),
                }, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    setLoadingModal(false)
                    setModal(!modal)
                })
                .catch(function (error) {
                    setErrorModal(!errorModal)
                    // window.location.reload()
                });
        }
    }


    return (
        <Wrapper>
            <img src={vetor3} alt="" className="mb-[5vh]" />
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
                                <input id="name" onChange={(event: any) => setInputValue1(event.target.value)} type="text" style={{ border: "1px solid #5A5A5A" }} className="w-full rounded-[10px] py-[0.8vh] pl-[10px] mb-[1.2vh]" placeholder="NOME" />
                                <input id="email" onChange={(event: any) => setInputValue2(event.target.value)} type="text" style={{ border: "1px solid #5A5A5A" }} className="w-full rounded-[10px] py-[0.8vh] pl-[10px] mb-[1.2vh]" placeholder="E-MAIL" />
                                <input id="phone" onChange={(event: any) => setInputValue3(event.target.value)} type="text" style={{ border: "1px solid #5A5A5A" }} className="w-full rounded-[10px] py-[0.8vh] pl-[10px] mb-[2vh]" placeholder="WHATSAPP" />
                            </div>
                            <button onClick={submit} className="w-full rounded-[10px] bg-red1 text-white1 py-[2vh] text-center">Quero receber mais informações</button>
                        </div>
                    </div>
                </section>
            </main>
            {
                loadingModal && (
                    <div
                        className="bg-[#000] h-screen w-full flex justify-center items-center fixed top-0 bg-opacity-70 ">
                        <div className="flex flex-col items-center justify-center gap-[15px] w-[280px] h-[300px] bg-white1 rounded-[10px] p-[20px]">
                            <p className="text-center text-[14px]">Processando dados...</p>
                            <img src={refresh} alt="" className="w-[30px] animate-spin" />
                        </div>
                    </div>
                )
            }
            {
                modal && (
                    <div onClick={() => {
                        setModal(!modal)
                        window.location.reload()
                    }}
                        className="bg-[#000] h-screen w-full flex justify-center items-center fixed top-0 bg-opacity-70 ">
                        <div className="flex flex-col items-center justify-center gap-[15px] w-[280px] h-[300px] bg-white1 rounded-[10px] p-[20px]">
                            <img src={logo} alt="" className="w-[100px]" />
                            <p className="text-center text-[14px]">Em breve nossa equipe vai <br /> entrar em  contato com você</p>
                            <footer className="flex justify-center gap-[15px]">
                                <img src={insta} alt="insta" className="w-[45px]" onClick={() => window.location.href = "https://www.instagram.com/onfire.cursos/"} />
                                <img src={face} alt="face" className="w-[45px]" onClick={() => window.location.href = "https://www.facebook.com/onfirecursosetreinamentos?mibextid=ZbWKwL"} />
                                <img src={mail2} alt="email" className="w-[45px]" onClick={() => window.location.href = "mailto:contato@onfirecursos.com.br"} />
                            </footer>
                        </div>
                    </div>
                )
            }
            {
                NoValueModal && (
                    <div onClick={() => setNoValueModal(!NoValueModal)}
                        className="bg-[#000] h-screen w-full flex justify-center items-center fixed top-0 bg-opacity-70 ">
                        <div className="flex flex-col items-center justify-center gap-[15px] w-[280px] h-[300px] bg-white1 rounded-[10px] p-[20px]">
                            <p className="font-bold">Parece que algo deu errado</p>
                            <p className="text-center text-[14px]">{AdcMsg}</p>
                            <button className="bg-[#eee] py-[10px] px-[60px] rounded-[20px]">OK</button>
                        </div>
                    </div>
                )
            }
            {
                errorModal && (
                    <div onClick={() => {
                        setErrorModal(!errorModal)
                        setLoadingModal(!loadingModal)
                        setTimeout(() => window.location.reload(), 300)
                    }}
                        className="bg-[#000] h-screen w-full flex justify-center items-center fixed top-0 bg-opacity-70 ">
                        <div className="flex flex-col items-center justify-center gap-[15px] w-[280px] h-[300px] bg-white1 rounded-[10px] p-[20px]">
                            <p className="font-bold">Parece que algo deu errado</p>
                            <p className="text-center text-[14px]">Entre em contato conosco atráves das redes abaixo:</p>
                            <footer className="flex justify-center gap-[15px]">
                                <img src={insta} alt="insta" className="w-[45px]" onClick={() => window.location.href = "https://www.instagram.com/onfire.cursos/"} />
                                <img src={face} alt="face" className="w-[45px]" onClick={() => window.location.href = "https://www.facebook.com/onfirecursosetreinamentos?mibextid=ZbWKwL"} />
                                <img src={mail2} alt="email" className="w-[45px]" onClick={() => window.location.href = "mailto:contato@onfirecursos.com.br"} />
                            </footer>
                        </div>
                    </div>
                )
            }
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
