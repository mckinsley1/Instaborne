"use strict";
(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 1181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Heroes/ServiceHero.tsx


function ServiceHero() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#03252F] w-full "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overflow-hidden py-40  bg-[#03252F]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto max-w-7xl px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto max-w-2xl lg:mx-0 lg:pl-8 h-[100px] max-sm:h-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-4xl font-bold tracking-tight text-white sm:text-6xl",
                                children: "Nos services"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-2 text-lg leading-8 text-gray-300 font-extralight",
                                children: [
                                    "Pour que vos projets se r\xe9alisent en toute tranquillit\xe9, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        className: "max-sm:hidden"
                                    }),
                                    "nous r\xe9pondons \xe0 chacun des besoins exprim\xe9s par nos clients."
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Sections/Advantage.tsx


function Advantage() {
    const values = [
        {
            name: "Notre \xe9quipe vous accompagne depuis votre l’arriv\xe9e chez votre concessionnaire afin de coordonner l’achat de votre v\xe9hicule et nos services.",
            value: "Accompagnement",
            icon: "/accompagnement.svg"
        },
        {
            name: "Instaborne s’adapte \xe0 votre situation. De la demande d’installation jusqu’au service apr\xe8s vente c’est vous qui d\xe9cidez des conditions.",
            value: "Adaptation client",
            icon: "/adaptationClient.svg"
        },
        {
            name: "Notre service de base assure de r\xe9pondre \xe0 tous vos besoins. Et s’il y a de nouvelles demandes, on s’adapte afin de vous y satisfaire.",
            value: "Possibilit\xe9s infinies",
            icon: "possibiliteInfini.svg"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto flex flex-col bg-[#FAFAFA] py-20 lg:px-14 px-0",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto  max-w-2xl   max-w-[1280px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("dl", {
                    className: "lg:px-8 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3 lg:divide-x items-start",
                    children: values.map((value)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col-reverse lg:pl-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    className: "text-base leading-7 text-black font-light text-center max-md:px-2",
                                    children: value.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                    className: "text-2xl font-bold leading-9 text-black text-center",
                                    children: value.value
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                    className: "text-2xl font-bold leading-9 text-black place-self-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: value.icon
                                    })
                                })
                            ]
                        }, value.name))
                })
            })
        })
    });
}
/* harmony default export */ const Sections_Advantage = (Advantage);

// EXTERNAL MODULE: ./components/Sections/InstalltionCTA.tsx
var InstalltionCTA = __webpack_require__(8031);
;// CONCATENATED MODULE: ./components/Sections/Service.tsx


function Services() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}
/* harmony default export */ const Service = (Services);

;// CONCATENATED MODULE: ./pages/services.tsx






function services() {
    const listeSatisfaction = [
        {
            titre: "Prise de rendez-vous en ligne ou par t\xe9l\xe9phone."
        },
        {
            titre: "Ramassage de la borne chez le concessionnaire"
        },
        {
            titre: "Choix du jour et de l'horaire de passage pour l'installation de la borne."
        },
        {
            titre: "Synchronisation entre l'installation et la livraison du v\xe9hicule."
        },
        {
            titre: "Application des normes d'installation li\xe9 \xe0 votre environnement."
        },
        {
            titre: "Suivi post-installation."
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ServiceHero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Advantage, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-white text-black",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center items-center gap-14 mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-20 max-sm:py-6 lg:max-w-7xl lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col-reverse max-lg:flex-col-reverse items-center min-lg:pt-14 gap-14 w-auto lg:grid lg:grid-cols-[auto_auto] lg:gap-x-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-start gap-5 leading-1 max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-bold text-3xl text-[#03252F]",
                                            children: "Une prise en charge depuis votre concessionnaire"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 font-light text-base text-[#52525B]",
                                                    children: "Nos repr\xe9sentants sont disponibles en tout temps pour faciliter la coordination lors de votre achat chez votre concessionnaire."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 font-light text-base text-[#52525B]",
                                                    children: "Leur mission, en collaboration avec le concessionnaire, est de s'assurer de faciliter les \xe9changes d'information et la coordination entre la livraison et l'installation de la borne."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 font-light text-base text-[#52525B]",
                                                    children: "Chacun des repr\xe9sentants ont suivi une formation Instaborne, afin d'acqu\xe9rir un savoir-faire en mati\xe8re de conseil, mais aussi, d'\xeatre sensibilis\xe9 \xe0 l'importance de vous soutenir dans vos choix afin de prendre des d\xe9cisions \xe9clair\xe9es."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-[540px] h-[340px] bg-white max-lg:w-full max-lg:h-full flex",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "object-cover w-full h-full rounded-3xl ",
                                            src: "/serviceDealerphip.webp",
                                            alt: "Dealerphip purchase"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full bg-[#03252F]/90 p-12 rounded-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col max-lg:flex-col-reverse items-center min-lg:pt-14 gap-14 w-auto max-lg:w-full lg:grid lg:grid-cols-[auto_auto] lg:gap-x-16 lg:self-baseline",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col items-start gap-5 leading-1 max-w-2xl max-lg:w-full lg:col-start-[2] lg:row-start-[1]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "font-bold text-3xl text-white",
                                                children: "Satisfaction client"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex flex-col gap-3 ",
                                                children: listeSatisfaction.map((lS, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex flex-row items-center gap-2 p-0",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    width: "18",
                                                                    height: "14",
                                                                    viewBox: "0 0 16 12",
                                                                    fill: "#02B5A1",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        "fill-rule": "evenodd",
                                                                        "clip-rule": "evenodd",
                                                                        d: "M15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L5 9.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893Z",
                                                                        fill: "##02B5A1"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "mt-2 font-light text-base text-white",
                                                                children: lS.titre
                                                            })
                                                        ]
                                                    }, i))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-[540px] h-[340px] bg-[#03252F] max-lg:w-full rounded-lg",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "object-cover w-full h-full rounded-3xl",
                                                src: "/satisfactionClient.jpeg",
                                                alt: "Thumbs up"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col-reverse max-lg:flex-col-reverse items-center min-lg:pt-14 gap-14 w-auto max-lg:w-full lg:grid lg:grid-cols-[auto_auto] lg:gap-x-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-start gap-5 leading-1 max-w-2xl max-lg:w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-bold text-3xl text-[#03252F]",
                                            children: "Acc\xe8s \xe0 une gamme \xe9largie de solutions"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col gap-3 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 font-light text-base text-[#52525B]",
                                                    children: "Instaborne vous assure en tout temps un service de qualit\xe9 avec son \xe9quipe d'expert qualifi\xe9 et sp\xe9cialis\xe9 en borne de recharge \xe9lectrique."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 font-light text-base text-[#52525B]",
                                                    children: "Cette \xe9quipe d'expert \xe0 la capacit\xe9 de r\xe9pondre aux besoins des clients, et, est \xe9galement en mesure de r\xe9soudre de nouvelles probl\xe9matiques rencontr\xe9 sur le terrain afin de vous satisfaire."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-2 font-light text-base text-[#52525B]",
                                                    children: "Pour plus d'autonomie, et afin de vous familiariser avec le service, Instaborne vous mets \xe0 disposition une vid\xe9o explicative. Un point de service est \xe9galement offert dans votre succursale, pour informer, clients et visiteurs sur les avantages d'une borne de recharge \xe0 domicile, ainsi que le processus d'installation."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-[540px] h-[340px] bg-white max-lg:w-full max-lg:h-full",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "object-cover w-full rounded-3xl",
                                            src: "/serviceCarCharging.jpg",
                                            alt: "Car getting plug in"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Service, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(InstalltionCTA/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const pages_services = (services);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,31], () => (__webpack_exec__(1181)));
module.exports = __webpack_exports__;

})();