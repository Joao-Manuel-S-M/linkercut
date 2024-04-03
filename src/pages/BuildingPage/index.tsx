import React, { useEffect } from "react";

//icons
import instagram from "@icons/instagram.svg";
import linkedin from "@icons/linkedin.svg";
import "./style.css";

//libs
import 'aos/dist/aos.css';
import Aos from "aos";

const index = () => {

    useEffect(() => {
        Aos.init();
      }, []);

	return (
		<div className="bg-brand2 w-[100vw] h-[100vh] flex justify-center items-center">
			<div className="flex flex-col items-center">
				<h1 className=" text-brand1 text-[30px] pulsing" data-aos="fade-down" data-aos-duration="800">
					Linker
					<span className="text-brand3">Cut</span>
				</h1>
				<span className="text-brand1 text-[10px] mt-3 pulsing" data-aos="fade-left">
					Site in build...
				</span>

				<div className="flex gap-4 mt-2 " data-aos="fade-right">
					<img
						src={instagram}
						alt="Icon Instagram"
						className="hover:scale-125 transition-all"
					/>
					<img
						src={linkedin}
						alt="Icon Linkedin"
						className="hover:scale-125 transition-all"
					/>
				</div>
			</div>

			<p className="absolute bottom-[20px] text-[10px] text-brand1 text-center">
				@LinkerCut todos os direitos reservados.
			</p>
		</div>
	);
};

export default index;

