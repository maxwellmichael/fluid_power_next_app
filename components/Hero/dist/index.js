"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Slider_1 = require("../Slider");
var Hero = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46" },
            React.createElement("div", { className: "mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0" },
                React.createElement("div", { className: "flex sm:flex-col sm:gap-0 lg:items-center lg:gap-4 xl:gap-16.5" },
                    React.createElement("div", { className: "sm:w-full md:w-1/2" },
                        React.createElement("h3", { className: "mb-4.5 text-xl font-medium text-black dark:text-white" },
                            React.createElement("span", { className: "relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark " },
                                React.createElement("span", { className: "text-primary" }, "Fluid Power"),
                                " Technical Services")),
                        React.createElement("h1", { className: "mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero " }, "Create, Enhance & Sustain"),
                        React.createElement("p", null, "We, Fluid Power, are based out of the UAE. We possess state-of-the-art technology and years of expertise necessary to repair and maintain all kinds of hydraulic equipment. Additionally, we specialize in fabrication work primarily focused on A/V companies."),
                        React.createElement("div", { className: "mt-10" },
                            React.createElement("form", { onSubmit: handleSubmit },
                                React.createElement("div", { className: "flex flex-wrap gap-5" },
                                    React.createElement("input", { value: email, onChange: function (e) { return setEmail(e.target.value); }, type: "text", placeholder: "Enter your email address", className: "rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary" }),
                                    React.createElement("button", { "aria-label": "get started button", className: "flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho" }, "Get Started"))))),
                    React.createElement("div", { className: "animate_right sm:w-full md:w-1/2 lg:block" },
                        React.createElement("div", { className: "relative 2xl:-mr-7.5" },
                            React.createElement(image_1["default"], { src: "/images/shape/shape-01.png", alt: "shape", width: 46, height: 246, className: "absolute -left-11.5 top-0" }),
                            React.createElement(image_1["default"], { src: "/images/shape/shape-02.svg", alt: "shape", width: 36.9, height: 36.7, className: "absolute bottom-0 right-0 z-10" }),
                            React.createElement(image_1["default"], { src: "/images/shape/shape-03.svg", alt: "shape", width: 21.64, height: 21.66, className: "absolute -right-6.5 bottom-0 z-1" }),
                            React.createElement("div", { className: "relative aspect-[700/444] w-full" },
                                React.createElement(Slider_1["default"], null)))))))));
};
exports["default"] = Hero;
