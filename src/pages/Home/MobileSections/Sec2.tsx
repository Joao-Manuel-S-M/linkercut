import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";

import axios from "axios"
axios.defaults.baseURL = 'https://grcqm5z45bbma5vdp7dkmh24ma0qmxdv.lambda-url.us-east-1.on.aws';


// Animation

// Icons
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

function Sect2({ func }: any) {
    //  code logic
    const [loadingModal, setLoadingModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [errorModal, setErrorModal] = useState(false)

    const [NoValueModal, setNoValueModal] = useState(false)
    const [AdcMsg, setAdcMsg] = useState("Por Favor Preencha todos os campos")

    async function submit() {
        const name: any = document.querySelector("#name")
        const email: any = document.querySelector("#email")
        const phone: any = document.querySelector("#phone")

        if (!name.value || !email.value || !phone.value) {
            setNoValueModal(!NoValueModal)
        } else {
            setLoadingModal(!loadingModal)
            await axios.post('/init',
                {
                    name: name.value,
                    email: email.value,
                    phone: Number(phone.value),
                }, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    setLoadingModal(false)
                    setModal(!modal)
                })
                .catch(function (error) {
                    setLoadingModal(!loadingModal)
                    setErrorModal(!errorModal)
                });
        }
    }

    return (
        <Wrapper>
            <div className="bg-red1 py-[5vh]">
                <header>
                    <p className="text-white1 text-center text-[6vw] font-bold uppercase">inscreva-se agora!</p>
                    <p className="text-white1 text-center text-[2.3vh] pb-[1vh] font-bold">Está pensando em realizar o curso?</p>
                    <p className="text-white1 text-center text-[1.6vh] pb-[4vh] font-bold">Cadastre-se agora logo entraremos em contato</p>
                </header>
                <main className="flex flex-col items-center gap-[2vh]">
                    <input id="name" type="text" placeholder="NOME" className="w-[95%] rounded-[5px] py-[2vh] px-[5vw] placeholder:text-[4vw]" />
                    <input id="email" type="text" placeholder="E-MAIL" className="w-[95%] rounded-[5px] py-[2vh] px-[5vw] placeholder:text-[4vw]" />
                    <input id="phone" type="number" placeholder="WHATSAPP" className="w-[95%] rounded-[5px] py-[2vh] px-[5vw] placeholder:text-[4vw] mb-[4vh]" />
                    <button className="bg-white1 py-[3.2vh] flex justify-center items-center w-[95%] rounded-[5px]
                    " onClick={submit}>Quero receber mais informações</button>
                </main>
            </div>
            <div className="pb-[6vh]">
                <p className="text-center w-[80vw] mx-auto py-[5vh]">🔥 <br />
                    Faça sua matrícula agora mesmo e venha se qualificar com a melhor escola de formação da região.</p>
            </div>
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
    h-full
`

export default Sect2;
