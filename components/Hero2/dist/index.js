"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Hero2() {
    return (react_1["default"].createElement("section", { className: "relative bg-[url(/images/hero/hero-banner-1.jpg)] bg-cover bg-center bg-no-repeat" },
        react_1["default"].createElement("div", { className: "absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r" }),
        react_1["default"].createElement("div", { className: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" },
            react_1["default"].createElement("div", { className: "max-w-xl text-center sm:text-left" },
                react_1["default"].createElement("h1", { className: "text-3xl font-extrabold sm:text-5xl" },
                    react_1["default"].createElement("span", { className: "relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark " },
                        react_1["default"].createElement("span", { className: "text-primary" }, "Fluid Power"),
                        " Technical Services")),
                react_1["default"].createElement("p", { className: "mt-4 max-w-lg sm:text-xl/relaxed" }, "We -Fluid Power is based out of UAE, we have the state-of-the-art technology and years of expertise necessary to Repair & maintain all kinds of hydraulic equipment, and Fabrication work mainly focused on A/V companies."),
                react_1["default"].createElement("div", { className: "mt-8 flex flex-wrap gap-4 text-center" },
                    react_1["default"].createElement("a", { href: "#", className: "block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" }, "Get Started"),
                    react_1["default"].createElement("a", { href: "#", className: "block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" }, "Learn More"))))));
}
exports["default"] = Hero2;
