"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const App_1 = require("./App");
require("./ui/style/config.css");
require("./ui/style/index.css");
client_1.default.createRoot(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(App_1.default, {}));
