"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
//icons
const instagram_svg_1 = require("@icons/instagram.svg");
const linkedin_svg_1 = require("@icons/linkedin.svg");
require("./style.css");
//libs
require("aos/dist/aos.css");
const aos_1 = require("aos");
const index = () => {
    (0, react_1.useEffect)(() => {
        aos_1.default.init();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-brand2 w-[100vw] h-[100vh] flex justify-center items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsxs)("h1", { className: " text-brand1 text-[30px] pulsing", "data-aos": "fade-down", "data-aos-duration": "800", children: ["Linker", (0, jsx_runtime_1.jsx)("span", { className: "text-brand3", children: "Cut" })] }), (0, jsx_runtime_1.jsx)("span", { className: "text-brand1 text-[10px] mt-3 pulsing", "data-aos": "fade-left", children: "Site in build..." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 mt-2 ", "data-aos": "fade-right", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://www.instagram.com/linkercut/", target: "_blank", children: (0, jsx_runtime_1.jsx)("img", { src: instagram_svg_1.default, alt: "Icon Instagram", className: "hover:scale-125 transition-all" }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://www.linkedin.com/company/linkercut/ ", target: "_blank", children: (0, jsx_runtime_1.jsx)("img", { src: linkedin_svg_1.default, alt: "Icon Linkedin", className: "hover:scale-125 transition-all" }) })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "absolute bottom-[20px] text-[10px] text-brand1 text-center", children: "@LinkerCut todos os direitos reservados." })] }));
};
exports.default = index;
