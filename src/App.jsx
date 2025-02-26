// src/App.jsx
import React from "react";
import Com1p from "./components/com1p";
import Com2p from "./components/com2p";
import Com3p from "./components/com3p";
import Com4p from "./components/com4p";
import Com5p from "./components/com5p";
import Com6p from "../Com6p";
import Com7p from "./components/Com7p";
const App = () => {
  return (
    <div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "@media (max-width: 767px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#header-1 {\nheight: 100px !important;\n}\n#div-1 {\nposition: fixed !important; height: 30px !important; width: 100vw !important;\n}\n#div-2 {\nwidth: 100% !important;\n}\n#section-1 {\ndisplay: none !important;\n}\n#div-3 {\nflex-direction: row !important;\n}\n#div-4 {\nposition: fixed !important; height: 90px !important;\n}\n#div-5 {\nmargin-top: 30px !important; padding-top: 15px !important; padding-bottom: 15px !important; min-height: 75px !important;\n}\n#div-6 {\ndisplay: flex !important; padding: 0px !important;\n}\n#div-7 {\nwidth: 70px !important; display: flex !important; justify-content: space-between !important; padding-left: 12px !important;\n}\n#div-8 {\nwidth: 70px !important; display: flex !important; justify-content: space-between !important; padding-right: 0px !important; margin-right: 0.5rem !important;\n}\n#a-1 {\ndisplay: none !important;\n}\n#span-1 {\nmargin-left: 0.25rem !important; display: none !important;\n}\n#section-2 {\nheight: 0px !important; overflow-x: hidden !important; overflow-y: hidden !important; display: none !important;\n}\n#div-9 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-10 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-11 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-12 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-13 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-14 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-15 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-16 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-17 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-18 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-19 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-20 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-21 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-22 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-23 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-24 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-25 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-26 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-27 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-28 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-29 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-30 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-31 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-32 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-33 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-34 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-35 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-36 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-37 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-38 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-39 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-40 {\nheight: 1px !important; padding-bottom: 133% !important;\n}\n#div-41 {\nposition: absolute !important; top: 50% !important; left: 50% !important;\n}\n#div-42 {\nmargin-bottom: 2.5rem !important;\n}\n#div-43 {\npadding: 0px !important; margin: 0px !important;\n}\n#div-44 {\nflex-direction: column !important;\n}\n#section-3 {\nwidth: 100% !important;\n}\n#div-46 {\npadding-top: 1.5rem !important; padding-bottom: 1.5rem !important;\n}\n#div-47 {\nflex-direction: column !important;\n}\n#section-4 {\nwidth: 100% !important; padding: 1.5rem !important;\n}\n#div-48 {\nwidth: 100% !important; padding: 1.5rem !important;\n}\n}\n@media (max-width: 82em) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#a-2 {\nmin-width: 100% !important;\n}\n#a-3 {\nmin-width: 100% !important;\n}\n#a-4 {\nmin-width: 100% !important;\n}\n#a-5 {\nmin-width: 100% !important;\n}\n#a-6 {\nmin-width: 100% !important;\n}\n#a-7 {\nmin-width: 100% !important;\n}\n}\n@media (min-width: 1280px) {\n#div-45 {\ngrid-column-start: span 2 !important; grid-column-end: span 2 !important;\n}\n}\n",
      }}
    />
  

  <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 767px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nmargin-top: 30px !important; padding-top: 15px !important; padding-bottom: 15px !important; min-height: 75px !important;\n}\n#div-2 {\ndisplay: flex !important; padding: 0px !important;\n}\n#div-3 {\nwidth: 70px !important; display: flex !important; justify-content: space-between !important; padding-right: 0px !important; margin-right: 0.5rem !important;\n}\n#a-1 {\ndisplay: none !important;\n}\n#span-1 {\nmargin-left: 0.25rem !important; display: none !important;\n}\n#section-1 {\nheight: 0px !important; overflow-x: hidden !important; overflow-y: hidden !important; display: none !important;\n}\n#div-4 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-5 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-6 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-7 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-8 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-9 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-10 {\npadding-left: 0.5rem !important; padding-right: 0.5rem !important;\n}\n#div-11 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-12 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-13 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-14 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-15 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-16 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-17 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n#div-18 {\ndisplay: flex !important; flex-direction: column !important; height: 100% !important; overflow-x: scroll !important; overflow-y: scroll !important;\n}\n}\n",
          }}
        />

        <div
          className="border-b-2 bg-white z-50 text-base font-light left-0 fixed top-0 w-screen border-neutral-100 border-solid"
          id="div-1"
        >
          <div className="items-center justify-between justify-items-center px-6 w-full m-auto sm:max-w-[40.00rem] md:max-w-3xl md:relative md:pl-6 md:pr-6 md:pt-5 md:pb-5 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl" id="div-2">
            <div className="text-gray-800 font-medium">
              <div className="w-32 m-auto md:w-40">
                <a className="items-center justify-center flex" href="https://www.flowerbx.com/">
                  <img className="cursor-pointer w-40 h-auto max-w-full" src="https://www.flowerbx.com/static/version1739798790/frontend/Flowerbx/default_hyva/en_GB/images/logo.svg" alt="Logo" />
                </a>
              </div>
            </div>

            <div className="items-center order-3 flex md:absolute md:top-[1.50rem] md:right-[2.00rem]" id="div-3">
              <div className="font-medium uppercase">
                <a href="https://www.flowerbx.com/flowerbx-loyalty" id="a-1">
                  Loyalty
                </a>
              </div>

              <span className="inline-block lg:ml-5" id="span-1">
                <svg className="w-5 h-5" fill="none" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1667 16.3333C13.8486 16.3333 16.8333 13.3486 16.8333 9.66667C16.8333 5.98477 13.8486 3 10.1667 3C6.48477 3 3.5 5.98477 3.5 9.66667C3.5 13.3486 6.48477 16.3333 10.1667 16.3333Z" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 18L14.875 14.375" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <div className="inline-block ml-1 sm:ml-3 lg:ml-5">
                <a href="https://www.flowerbx.com/customer/account/">
                  
                </a>
              </div>

              <a className="inline-block ml-1 sm:ml-3 lg:ml-5" href="https://www.flowerbx.com/checkout/cart/index/">
                <svg className="cursor-pointer w-5 h-5" fill="none" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.375 4H3.625C3.27982 4 3 4.27982 3 4.625V15.875C3 16.2202 3.27982 16.5 3.625 16.5H17.375C17.7202 16.5 18 16.2202 18 15.875V4.625C18 4.27982 17.7202 4 17.375 4Z" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.625 6.875C13.625 7.7038 13.2958 8.49866 12.7097 9.08471C12.1237 9.67076 11.3288 10 10.5 10C9.6712 10 8.87634 9.67076 8.29029 9.08471C7.70424 8.49866 7.375 7.7038 7.375 6.875" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Остальные секции шапки */}
          <div className="w-full">
            <div>
              <section className="justify-center px-6 flex w-full m-auto text-sm text-stone-950 font-bold uppercase sm:max-w-[40.00rem] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl" id="section-1">
                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-4">
                  <a>Flowers</a>
                </div>

                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-5">
                  <a>Express Delivery</a>
                </div>

                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-6">
                  <a>Subscriptions</a>
                </div>

                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-7">
                  <a>Occasions</a>
                </div>

                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-8">
                  <a>Vases</a>
                </div>

                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-9">
                  <a>Events</a>
                </div>

                <div className="pb-4 pt-2 md:pl-6 md:pr-6" id="div-10">
                  <a>Bespoke Services</a>
                </div>
              </section>

              <div className="relative">
                {/* Дополнительные секции, оставляем без изменений */}
                <section className="left-[100vw] absolute top-0 z-30 w-full overflow-hidden">
                  <div className="border-t-neutral-200 border-t-2 w-full border-solid md:pb-8 md:flex" id="div-11">
                    <div className="md:w-2/3">
                      <div className="md:flex md:ml-80 md:justify-left">
                        <div className="flex-grow text-xs font-bold uppercase md:max-w-[33%]">
                          <ul className="list-none">
                            <li className="list-item mt-10 mx-3 mb-6">
                              <span className="items-center flex">
                                Flowers
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                            <li className="list-item my-6 mx-3">
                              <span className="items-center flex">
                                Express Delivery
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                            <li className="list-item my-6 mx-3">
                              <span className="items-center flex">
                                Subscriptions
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                            <li className="list-item my-6 mx-3">
                              <span className="items-center flex">
                                Occasions
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                            <li className="list-item my-6 mx-3">
                              <span className="items-center flex">
                                Vases
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                            <li className="list-item my-6 mx-3">
                              <span className="items-center flex">
                                Events
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                            <li className="list-item my-6 mx-3">
                              <span className="items-center flex">
                                Bespoke Services
                                <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex-grow md:max-w-[33%]">
                          <ul className="list-none"></ul>
                        </div>
                        <div className="flex-grow md:max-w-[33%]">
                          <ul className="list-none"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Остальные секции меню можно оставить без изменений */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="box-border text-base font-light h-[530.75rem] leading-6 overflow-x-auto overflow-y-scroll w-[119.00rem] bg-white">
      <div className="h-[530.75rem] w-[119.00rem]">
        <header className="h-32 w-[148.75rem]" id="header-1">
          <div className="w-[148.75rem] md:h-0">
           
              <div className="bottom-[72.75rem] left-[1.88rem] mt-2 absolute right-[146.88rem] top-[0.75rem] z-50 md:absolute  md:top-[0.75rem] md:left-[2.00rem] md:mt-2">
                <div className="bottom-[71.75rem] cursor-pointer h-5 justify-center left-[1.88rem] fixed right-[133.00rem] top-[1.25rem] w-56 flex" id="div-2">
                  <div className="h-5 leading-4 w-4">
                    
                  </div>
  
                  
                </div>
              </div>
            
          </div>
          <div className="w-[148.75rem]">
            <div className="w-[148.75rem]"></div>
          </div>
          <div className="w-[148.75rem]">
            <section className="bottom-[70.25rem] text-gray-700 h-6 left-[1.25rem] fixed right-[138.75rem] top-[2.13rem] w-36 z-[45] md:fixed  md:top-[2.13rem] md:left-[1.25rem]" id="section-1">
              <div className="text-stone-950 cursor-pointer text-xs h-6 leading-[1.13rem] w-36">
                <div className="items-center gap-x-[0.38rem] h-6 px-4 w-36 flex" id="div-3">
                 
  
                  <div
                    className="self-start h-6 order-2 uppercase w-14 flex"
                    style={{
                      letterSpacing: "2px",
                    }}>
                   
  
                   
                  </div>
                </div>
              </div>
            </section>
          </div>
  
          <div className="w-[148.75rem]" />
  
          <div className="h-32 w-full md:mb-0" id="div-4">
            
              <div className="items-center h-20 justify-between justify-items-center max-w-screen-2xl py-5 px-6 relative w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl md:relative md:pl-6 md:pr-6 md:pt-5 md:pb-5 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl" id="div-6">
                <div id="div-7">
                 
                
  
                <div className="h-12 w-40">
                  <div className="h-12 w-40 m-auto md:w-40">
                    <a
                      className="items-center text-gray-800 cursor-pointer font-medium h-12 justify-center leading-[1.38rem] w-40 flex"
                      href="https://www.flowerbx.com/"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <img
                        className="max-w-full w-40 overflow-clip"
                        src="https://www.flowerbx.com/static/version1739798790/frontend/Flowerbx/default_hyva/en_GB/images/logo.svg"
                        style={{
                          overflowClipMargin: "content-box",
                        }}
                      />
                    </a>
                  </div>
                </div>
  
                <div className="items-center bottom-[2.13rem] h-7 left-[82.00rem] order-3 absolute right-[1.88rem] top-[1.50rem] w-48 flex md:absolute  md:top-[1.50rem] md:right-[2.00rem]" id="div-8">
                  <div className="h-7 w-20">
                    <a
                      className="cursor-pointer font-medium leading-7 uppercase"
                      href="https://www.flowerbx.com/flowerbx-loyalty"
                      id="a-1"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      Loyalty
                    </a>
                  </div>
  
                  <span className="h-5 ml-5 w-6 inline-block lg:ml-5" id="span-1">
                    <svg className="h-5 w-6 overflow-hidden" fill="none" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.1667 16.3333C13.8486 16.3333 16.8333 13.3486 16.8333 9.66667C16.8333 5.98477 13.8486 3 10.1667 3C6.48477 3 3.5 5.98477 3.5 9.66667C3.5 13.3486 6.48477 16.3333 10.1667 16.3333Z" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
  
                      <path d="M18.5 18L14.875 14.375" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
  
                  <div className="h-5 ml-1 relative w-6 inline-block sm:ml-3  lg:ml-5">
                    <a className="cursor-pointer h-5 w-6" href="https://www.flowerbx.com/customer/account/">
                      <svg className="h-5 w-6 overflow-hidden" fill="none" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0781 13C12.8395 13 15.0781 10.7614 15.0781 8C15.0781 5.23858 12.8395 3 10.0781 3C7.3167 3 5.07812 5.23858 5.07812 8C5.07812 10.7614 7.3167 13 10.0781 13Z" fill="none" stroke="#211000" strokeMiterlimit="10" />
  
                        <path d="M2.5 17.375C3.26792 16.0447 4.37253 14.9399 5.70278 14.1718C7.03303 13.4037 8.54204 12.9993 10.0781 12.9993C11.6142 12.9993 13.1232 13.4037 14.4535 14.1718C15.7837 14.9399 16.8883 16.0447 17.6562 17.375" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
  
                  <a className="cursor-pointer h-5 ml-1 relative w-6 inline-block sm:ml-3  lg:ml-5" href="https://www.flowerbx.com/checkout/cart/index/">
                    <svg className="h-5 w-6 overflow-hidden" fill="none" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.375 4H3.625C3.27982 4 3 4.27982 3 4.625V15.875C3 16.2202 3.27982 16.5 3.625 16.5H17.375C17.7202 16.5 18 16.2202 18 15.875V4.625C18 4.27982 17.7202 4 17.375 4Z" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
  
                      <path d="M13.625 6.875C13.625 7.7038 13.2958 8.49866 12.7097 9.08471C12.1237 9.67076 11.3288 10 10.5 10C9.6712 10 8.87634 9.67076 8.29029 9.08471C7.70424 8.49866 7.375 7.7038 7.375 6.875" fill="none" stroke="#211000" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
  
              <div className="h-11 w-full">
                <div className="h-11 w-[150.00rem]">
                  <section className="h-11 justify-center max-w-screen-2xl px-6 relative w-full flex m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl" id="section-2">
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-28 md:pl-6  md:pr-6"
                      id="div-9"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span>Flowers</span>
                      </a>
                    </div>
  
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-44 md:pl-6  md:pr-6"
                      id="div-10"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span>Express Delivery</span>
                      </a>
                    </div>
  
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-40 md:pl-6  md:pr-6"
                      id="div-11"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span>Subscriptions</span>
                      </a>
                    </div>
  
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-32 md:pl-6  md:pr-6"
                      id="div-12"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span>Occasions</span>
                      </a>
                    </div>
  
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-24 md:pl-6  md:pr-6"
                      id="div-13"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span>Vases</span>
                      </a>
                    </div>
  
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-24 md:pl-6  md:pr-6"
                      id="div-14"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span>Events</span>
                      </a>
                    </div>
  
                    <div
                      className="text-stone-950 text-sm font-bold h-11 leading-[1.13rem] pb-4 px-6 pt-2 uppercase w-44 md:pl-6  md:pr-6"
                      id="div-15"
                      style={{
                        letterSpacing: "2px",
                      }}>
                      <a>
                        <span> Bespoke Services</span>
                      </a>
                    </div>
                  </section>
  
                  <div className="relative w-[150.00rem]">
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-80 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-16">
                        <div className="h-80 w-[100.00rem] md:w-2/3">
                          <div className="h-80 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-80 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-64 w-96 list-none">
                                <li
                                  className="text-xs font-bold h-4 leading-4 mb-6 mx-3 mt-10 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    Flowers
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    Express Delivery
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    Subscriptions
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    Occasions
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    Vases
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    Events
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <span className="items-center h-4 w-96 flex">
                                    {" "}
                                    Bespoke Services
                                    <svg className="h-3 w-3 overflow-hidden" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 5l7 7-7 7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-80 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="w-96 list-none"></ul>
                            </div>
  
                            <div className="flex-grow h-80 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="w-96 list-none"></ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-80 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-80 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-17">
                        <div className="h-80 w-[100.00rem] md:w-2/3">
                          <div className="h-80 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-80 max-w-[33%] w-64 md:max-w-[33%]">
                              <ul className="h-64 w-64 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-60 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Variety
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-60 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                    Shop All
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-60 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/mimosa">
                                    Mimosa
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-60 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/tulips">
                                    Tulips
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-60 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/roses">
                                    Roses
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-60 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-atelier">
                                    Super Bouquets
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-60 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/italian-ranunculus">
                                    Italian Ranunculus
                                  </a>
                                  {"                                                                                    "}
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-80 max-w-[33%] w-72 md:max-w-[33%]">
                              <ul className="h-64 w-72 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-64 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Edits
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-64 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/new-in">
                                    New In
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-64 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/seasons-best/pre-spring">
                                    Season's Best: Pre-Spring
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-64 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/by-price/under-60">
                                    Under £60
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-64 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/mixed-bouquets">
                                    Hand-tied Bouquets
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-64 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers?cat=727,726">
                                    50 & 100 Roses
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-64 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/1000-roses-vase-set">
                                    1000 Roses
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-80 max-w-[33%] w-56 md:max-w-[33%]">
                              <ul className="h-64 w-56 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-52 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  By Colour
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-52 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/colours/red-flowers">
                                    Red Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-52 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/colours/pink-flowers">
                                    Pink Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-52 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/colours/white-roses-flowers">
                                    White Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-52 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/colours/purple-flowers">
                                    Purple Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-52 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/colours/black-flowers">
                                    Black Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-52 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/shop-by-flower-colour">
                                    All colours
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-80 max-w-[33%] w-64 md:max-w-[33%]">
                              <ul className="h-52 w-64 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-56 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Floral Gifting
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flower-vase-gift-sets">
                                    Flower Gift Sets
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-gifting">
                                    Luxury Gifts
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/marie-chantal-gift-set">
                                    The Baby Gift Set
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/more-than-flowers">
                                    Chocolates & Gifts
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/plants">
                                    Plants & Orchids
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-80 max-w-[33%] w-60 md:max-w-[33%]">
                              <ul className="h-24 w-60 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-56 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  All products
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/plants/indoor-plants">
                                    Plants
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-56 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/funeral-sympathy-flowers">
                                    Sympathy Flowers
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-80 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-48 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-18">
                        <div className="h-40 w-[100.00rem] md:w-2/3">
                          <div className="h-40 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-40 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-24 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Need Flowers in a hurry?
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/same-day-delivery-flowers">
                                    Same Day Delivery - London
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/next-day-delivery-flowers">
                                    Next Day Delivery - Nationwide
                                  </a>
                                  {"                                                                                    "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-40 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-64 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-19">
                        <div className="h-60 w-[100.00rem] md:w-2/3">
                          <div className="h-60 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-60 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-44 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Discover FLOWERBX Subscriptions
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription">
                                    Discover all
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/signature">
                                    The Signature Subscription
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/prestige">
                                    The Prestige Subscription
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/seasonal">
                                    The Seasonal Subscription - Tulips
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-60 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-24 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Subscription Gifts
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription">
                                    Gift a Subscription
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flower-subscription/gifting">
                                    Subscription Gift Card
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-60 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-24 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Find out more
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/signature/what-to-expect">
                                    What to expect in your Subscription
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/start-your-subscription">
                                    Start your Gift Subscription
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-60 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-80 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-20">
                        <div className="h-72 w-[100.00rem] md:w-2/3">
                          <div className="h-72 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-32 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Most Popular
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/birthday">
                                    Birthday Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/engagement-flowers">
                                    Engagement Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/congratulations">
                                    Congratulations Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-52 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Shop all Occasions
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasion-flowers">
                                    Discover All Occasions
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/anniversary-flowers">
                                    Anniversary Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/wedding-flowers">
                                    Wedding Flowers
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/new-baby-flowers">
                                    New Baby Flowers
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/wedding-gifts">
                                    Wedding Gifts
                                  </a>
                                  {"                                                                                    "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-72 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-80 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-21">
                        <div className="h-72 w-[100.00rem] md:w-2/3">
                          <div className="h-72 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-52 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Vases
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/home-accessories/vases">
                                    All Vases
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/home-accessories/vases?material=5909">
                                    Glass Vases
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/home-accessories/vases?material=5911">
                                    Ceramic Vases
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/home-accessories/vases?material=5910">
                                    Brushed Metal
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/bailey-bud-vase-collection-p">
                                    Bailey Bud Vases
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-24 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Home Fragrances
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/home-accessories/home-fragrances">
                                    Candles
                                  </a>
                                  {"                                                                                    "}
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/home-accessories/home-fragrances">
                                    Room Spray
                                  </a>
                                  {"                                                                                    "}
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-32 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Accessories
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/floral-scissors">
                                    Floral Scissors
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flower-food">
                                    Flower Food
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/gardening-set">
                                    Gardening Set
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-72 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-96 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-22">
                        <div className="h-96 w-[100.00rem] md:w-2/3">
                          <div className="h-96 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-96 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-72 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Events
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/events-parties">
                                    Events & Parties
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/brand-activations">
                                    Brand Activations
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/installations">
                                    Installations
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/weddings">
                                    Weddings by FLOWERBX
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/workshops">
                                    Flower Workshops
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/occasions/funeral-sympathy-flowers ">
                                    Funeral Flowers
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services">
                                    Discover All
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-96 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-32 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Seasonal Events
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://flowerbx.com/flowerbx-services/spring-brand-activations">
                                    Spring Brand Events
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/mothers-day-brand-activations">
                                    Mother's Day Events
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/valentines-day-brand-corporate">
                                    Valentine's Day Events
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-96 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
  
                    <section className="left-[100vw] absolute right-[-150.00rem] w-full z-30 overflow-hidden">
                      <div className="border-t-neutral-200 border-t-2 h-80 pb-8 w-full flex border-solid md:pb-8  md:flex" id="div-23">
                        <div className="h-72 w-[100.00rem] md:w-2/3">
                          <div className="h-72 justify-left ml-80 w-[80.00rem] flex md:flex  md:ml-80 md:justify-left">
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-44 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Corporate & Gifting
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/corporate-brand-pr-gifting">
                                    Corporate, Brand & PR Gifting
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://flowerbx.com/flowerbx-services/spring-brand-activations">
                                    Spring Brand Activations
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/weekly-flower-deliveries">
                                    Weekly Flower Deliveries
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/">
                                    Discover All
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-52 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Seasonal
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/mothers-day-brand-activations">
                                    Mother's Day Activations
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/spring-brand-activations">
                                    International Women's Day Activations
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/valentines-day-brand-corporate">
                                    Valentine's Day Gifting
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/bespoke-christmas-services">
                                    Christmas Bespoke Services
                                  </a>
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/gallery/christmas">
                                    Christmas Gallery
                                  </a>
                                </li>
                              </ul>
                            </div>
  
                            <div className="flex-grow h-72 max-w-[33%] w-96 md:max-w-[33%]">
                              <ul className="h-14 w-96 list-none">
                                <li
                                  className="border-b-neutral-200 border-b-2 text-[0.50rem] h-5 leading-4 my-10 mx-3 relative uppercase w-96 list-item border-solid"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  Gallery
                                </li>
  
                                <li
                                  className="text-xs font-bold h-4 leading-4 my-6 mx-3 relative uppercase w-96 list-item"
                                  style={{
                                    letterSpacing: "2px",
                                  }}>
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/gallery/weekly-flowerbx-deliveries">
                                    View our Gallery
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
  
                        <div className="h-72 w-[50.00rem] md:w-1/3"></div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="h-32 w-[148.75rem]" />
  
            <section className="w-[148.75rem]"></section>
  
            <section className="w-[148.75rem]"></section>
          </div>
        </header>
        <main className="h-[486.75rem] relative w-[119.00rem]">
          <div className="w-[148.75rem]" />
  
          <div className="sticky w-[148.75rem] z-20">
            <section className="w-[148.75rem]"></section>
          </div>
          <div className="gap-x-[1.88rem] grid-cols-[119.00rem] grid-rows-[7771.23px_0px] h-[486.75rem] gap-y-4 w-[119.00rem] grid">
            <div className="h-[485.75rem] order-2 w-[119.00rem]">
              <div className="flex-col h-[43.13rem] justify-start w-[148.75rem] flex">
                <div className="h-[43.13rem] w-[148.75rem]">
                  <section className="h-[43.13rem] w-[148.75rem]">
                    <div className="w-[148.75rem]" />
  
                    <div className="h-[43.13rem] relative w-[148.75rem]">
                      <div className="w-[148.75rem]">
                        <button
                          className="items-center bg-zinc-100/[0.6] bottom-[19.75rem] cursor-pointer h-8 justify-center left-[1em] opacity-70 absolute right-[145.88rem] text-center top-1/2 w-8 z-[1] flex rounded-full"
                          style={{
                            appearance: "button",
                          }}
                        />
                        <button
                          className="items-center bg-zinc-100/[0.6] bottom-[19.75rem] cursor-pointer h-8 justify-center left-[145.88rem] opacity-70 absolute right-[1em] text-center top-1/2 w-8 z-[1] flex rounded-full"
                          style={{
                            appearance: "button",
                          }}
                        />
                      </div>
                      <div className="h-[43.13rem] relative select-none w-[148.75rem] overflow-hidden">
                        <ul
                          className="h-full w-[148.75rem] flex list-none"
                          style={{
                            backfaceVisibility: "hidden",
                          }}>
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-24">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-25">
                                 
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/tulips">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-26">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-27">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/2._DESKTOP_HEADER_1_.jpg?rand=1739534691" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/3._MOBILE_HEADER_3_.jpg?rand=1739534691"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-28">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-29">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/2._DESKTOP_HEADER_4_.jpg?rand=1739773888" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/2._MOBILE_HEADER_4_.jpg?rand=1739773888"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
  
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-30">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-31">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/1._DESKTOP_HEADER_5_.jpg?rand=1739773888" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/2._MOBILE_HEADER_3_.jpg?rand=1739773888"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/seasons-best/pre-spring">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
  
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-32">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-33">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/01-2025/4._DESKTOP_HEADER_4_.jpg?rand=1739534604" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/01-2025/4._MOBILE_HEADER_2_.jpg?rand=1739534604"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/next-day-delivery-flowers">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
  
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-34">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-35">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/01-2025/3._DESKTOP_HEADER_1_.jpg?rand=1739536444" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/01-2025/3._MOBILE_HEADER_4_.jpg?rand=1739536444"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/tulips">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
  
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-36">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-37">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/2._DESKTOP_HEADER_1_.jpg?rand=1739534691" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/3._MOBILE_HEADER_3_.jpg?rand=1739534691"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
  
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-38">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-39">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/2._DESKTOP_HEADER_4_.jpg?rand=1739773888" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/2._MOBILE_HEADER_4_.jpg?rand=1739773888"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="h-[43.13rem] relative w-[148.75rem] list-item"
                            style={{
                              flexShrink: "0",
                            }}>
                            <div className="h-[43.13rem] w-[148.75rem]">
                              <div className="h-[43.13rem] pb-[43.13rem] relative w-[148.75rem] overflow-hidden md:h-0  md:pb-96" id="div-40">
                                <div className="bottom-[-21.50rem] h-full left-[74.38rem] absolute right-[-74.25rem] top-[21.63rem] w-full md:absolute  md:top-1/2 md:left-1/2" id="div-41">
                                  <picture className="w-full">
                                    <source srcSet="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/1._DESKTOP_HEADER_5_.jpg?rand=1739773888" />
  
                                    <img
                                      className="w-full overflow-clip"
                                      src="https://www.flowerbx.com/media/wysiwyg/2025-homepage/02-2025/2._MOBILE_HEADER_3_.jpg?rand=1739773888"
                                      style={{
                                        overflowClipMargin: "content-box",
                                      }}
                                    />
                                  </picture>
  
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/seasons-best/pre-spring">
                                    <div className="h-full absolute w-full"></div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
  
                      <ul
                        className="items-center bottom-[0.5em] flex-wrap h-5 justify-center px-4 absolute top-[41.63rem] w-[148.75rem] z-[1] flex list-none"
                        style={{
                          pointerEvents: "none",
                        }}>
                        <li className="h-5 leading-4 w-3.5 inline-block">
                          <button
                            className="bg-stone-300 cursor-pointer h-2 opacity-70 relative text-center w-2 inline-block border-2 border-neutral-400 border-solid rounded-full m-1"
                            style={{
                              appearance: "button",
                            }}
                          />
                        </li>
                        <li className="h-5 leading-4 w-3.5 inline-block">
                          <button
                            className="cursor-pointer h-2 opacity-70 relative text-center w-2 inline-block border-2 border-neutral-400 border-solid rounded-full m-1"
                            style={{
                              appearance: "button",
                            }}
                          />
                        </li>
                        <li className="h-5 leading-4 w-3.5 inline-block">
                          <button
                            className="bg-stone-300 cursor-pointer h-2 opacity-70 relative text-center w-2 inline-block border-2 border-neutral-400 border-solid rounded-full m-1"
                            style={{
                              appearance: "button",
                            }}
                          />
                        </li>
                        <li className="h-5 leading-4 w-3.5 inline-block">
                          <button
                            className="bg-stone-300 cursor-pointer h-2 opacity-70 relative text-center w-2 inline-block border-2 border-neutral-400 border-solid rounded-full m-1"
                            style={{
                              appearance: "button",
                            }}
                          />
                        </li>
                        <li className="h-5 leading-4 w-3.5 inline-block">
                          <button
                            className="bg-stone-300 cursor-pointer h-2 opacity-70 relative text-center w-2 inline-block border-2 border-neutral-400 border-solid rounded-full m-1"
                            style={{
                              appearance: "button",
                            }}
                          />
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div className="flex-col h-44 justify-start w-[119.00rem] flex">
                <figure className="h-40 mb-3 w-[119.00rem]">
                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                    <img
                      className="max-w-full w-[119.00rem] hidden overflow-clip md:block"
                      src="https://www.flowerbx.com/media/wysiwyg/PRESS_LOGOS.jpg"
                      style={{
                        overflowClipMargin: "content-box",
                      }}
                    />
                  </a>
                </figure>
              </div>
              <div className="h-[41.00rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[41.00rem] justify-start w-[94.13rem] flex">
                  <div className="h-[41.00rem] w-[94.13rem]">
                    <section className="h-[35.38rem] w-[94.13rem]">
                      <div className="h-[35.38rem] ml-auto max-w-[calc(100%_-_0.75rem)] pl-3 w-[95.13rem] md:pl-6  md:max-w-[calc(((100%_-_1536px)/2)_+_1536px)] md:ml-[calc(((100%_-_1536px)/2))]">
                        <div className="w-[93.75rem]" />
  
                        <section className="h-[35.38rem] my-12 w-[93.75rem]">
                          <div className="h-[35.38rem] relative w-[93.75rem]">
                            <div className="float-right h-8 mr-36 mt-4 w-16">
                              <button
                                className="items-center bg-zinc-100/[0.6] cursor-pointer float-left h-8 justify-center opacity-70 relative text-center w-8 rounded-full"
                                style={{
                                  appearance: "button",
                                }}
                              />
                              <button
                                className="items-center bg-zinc-100/[0.6] cursor-pointer float-left h-8 justify-center ml-3 opacity-70 relative text-center w-8 rounded-full"
                                style={{
                                  appearance: "button",
                                }}
                              />
                            </div>
  
                            <div className="flex-col float-left h-5 mb-2 w-96 flex md:flex-row">
                              <h3
                                className="text-sm font-bold h-5 leading-[1.13rem] uppercase w-96"
                                style={{
                                  letterSpacing: "2px",
                                }}>
                                FLOWERBX PICKS: OUR TOP RECOMMENDATIONS OF THE WEEK
                              </h3>
                            </div>
  
                            <div className="clear-both h-[32.50rem] pr-36 relative select-none w-[93.75rem] overflow-hidden">
                              <ul
                                className="h-full w-[84.38rem] flex list-none"
                                style={{
                                  backfaceVisibility: "hidden",
                                }}>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7521/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/flower-subscription-signature">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/s/i/signature-hero_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/flower-subscription-signature">
                                          The Signature Subscription
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span className="h-6 uppercase w-64">
                                            <span>
                                              <span className="text-sm font-bold leading-[1.13rem]">£45.00</span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7146/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/l/a/large_pink_version_02.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                          The Rose Super Bouquet - Pink
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7066/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/glazed-vase-roses">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--white-glazed-set.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/glazed-vase-roses">
                                          Glazed Vase and Roses
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7053/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--sweet-avalanche-rose-vase-shot-medium-mayfair-onyx.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                          Roses and Luxury Vase Set
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£130.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/6677/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/f/r/fringed_tulip_coral_crush_fringed_tulip_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                          Coral Crush Fringed Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span>
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£60.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2636/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/r/o/rose_pink_sweet_avalanche_rose_vase_1__7.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[16.63rem] text-xs font-bold h-6 left-[10.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        10 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                          Pink Sweet Avalanche Rose
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span>
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£90.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7521/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/flower-subscription-signature">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/s/i/signature-hero_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/flower-subscription-signature">
                                          The Signature Subscription
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span className="h-6 uppercase w-64">
                                            <span>
                                              <span className="text-sm font-bold leading-[1.13rem]">£45.00</span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7146/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/l/a/large_pink_version_02.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                          The Rose Super Bouquet - Pink
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7066/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/glazed-vase-roses">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--white-glazed-set.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/glazed-vase-roses">
                                          Glazed Vase and Roses
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7053/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--sweet-avalanche-rose-vase-shot-medium-mayfair-onyx.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                          Roses and Luxury Vase Set
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£130.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/6677/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/f/r/fringed_tulip_coral_crush_fringed_tulip_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                          Coral Crush Fringed Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£60.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2636/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/r/o/rose_pink_sweet_avalanche_rose_vase_1__7.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.13rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        10 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                          Pink Sweet Avalanche Rose
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£90.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7521/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/flower-subscription-signature">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/s/i/signature-hero_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/flower-subscription-signature">
                                          The Signature Subscription
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span className="h-6 uppercase w-96">
                                            <span>
                                              <span className="text-sm font-bold leading-[1.13rem]">£45.00</span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7146/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/l/a/large_pink_version_02.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                          The Rose Super Bouquet - Pink
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-96">
                                        <div className="h-6 w-96">
                                          <p className="h-6 mb-5 w-96">
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7066/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/glazed-vase-roses">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--white-glazed-set.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/glazed-vase-roses">
                                          Glazed Vase and Roses
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-96">
                                        <div className="h-6 w-96">
                                          <p className="h-6 mb-5 w-96">
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7053/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--sweet-avalanche-rose-vase-shot-medium-mayfair-onyx.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                          Roses and Luxury Vase Set
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-96">
                                        <div className="h-6 w-96">
                                          <p className="h-6 mb-5 w-96">
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£130.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/6677/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/f/r/fringed_tulip_coral_crush_fringed_tulip_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                          Coral Crush Fringed Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span>
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£60.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2636/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/r/o/rose_pink_sweet_avalanche_rose_vase_1__7.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[16.63rem] text-xs font-bold h-6 left-[10.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        10 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                          Pink Sweet Avalanche Rose
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span>
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£90.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7521/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/flower-subscription-signature">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/s/i/signature-hero_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/flower-subscription-signature">
                                          The Signature Subscription
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span className="h-6 uppercase w-64">
                                            <span>
                                              <span className="text-sm font-bold leading-[1.13rem]">£45.00</span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7146/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/l/a/large_pink_version_02.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                          The Rose Super Bouquet - Pink
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7066/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/glazed-vase-roses">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--white-glazed-set.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/glazed-vase-roses">
                                          Glazed Vase and Roses
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7053/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/-/i-love-you-card-naomi-rose--sweet-avalanche-rose-vase-shot-medium-mayfair-onyx.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/small-mayfair-rose-vase-set">
                                          Roses and Luxury Vase Set
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£130.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/6677/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/f/r/fringed_tulip_coral_crush_fringed_tulip_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/coral-crush-fringed-tulip">
                                          Coral Crush Fringed Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span>
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£60.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2636/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/r/o/rose_pink_sweet_avalanche_rose_vase_1__7.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[16.63rem] text-xs font-bold h-6 left-[10.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        10 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/pink-sweet-avalanche-rose">
                                          Pink Sweet Avalanche Rose
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span>
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£90.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7521/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/flower-subscription-signature">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/s/i/signature-hero_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/flower-subscription-signature">
                                          The Signature Subscription
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-64">
                                        <div className="h-6 w-64">
                                          <span className="h-6 uppercase w-64">
                                            <span>
                                              <span className="text-sm font-bold leading-[1.13rem]">£45.00</span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-96 mr-3 max-w-[25.00rem] relative w-64 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/7146/" className="flex-col h-96 w-64 flex rounded-sm">
                                    <a className="cursor-pointer h-72 mb-1 relative w-64" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                      <img
                                        className="h-72 max-w-full object-contain w-64 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/l/a/large_pink_version_02.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-64 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-64"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/rose-super-bouquet-pink">
                                          The Rose Super Bouquet - Pink
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-11 w-64">
                                        <div className="h-6 w-64">
                                          <p className="h-6 mb-5 w-64">
                                            <span className="h-6 uppercase w-64">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£110.00</span>
                                              </span>
                                            </span>
                                          </p>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="h-[32.50rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[32.50rem] justify-start w-[94.13rem] flex">
                  <h1
                    className="text-3xl font-bold h-12 leading-8 py-3 text-center uppercase w-[94.13rem]"
                    style={{
                      letterSpacing: "4px",
                    }}>
                    SHOP TRENDING CATEGORIES
                  </h1>
                  <div className="self-stretch h-96 pb-5 w-[94.13rem]">
                    <div className="flex-wrap h-96 w-full flex">
                      <div className="flex-col h-96 justify-start max-w-full px-1.5 w-1/4 flex">
                        <figure className="h-96 mb-3 w-96 p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/new-in">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/narcissus_paperwhite_narcissus_vase_2.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-9 leading-[1.63rem] pb-3 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          NEW IN
                        </h2>
                      </div>
                      <div className="flex-col h-96 justify-start max-w-full px-1.5 w-1/4 flex">
                        <figure className="h-96 mb-3 w-96 p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/colours/pink-flowers">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/italian_ranunculus_ballet_slippers_italian_ranunculus_vase_4.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-9 leading-[1.63rem] pb-3 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          PINK EDIT
                        </h2>
                      </div>
                      <div className="flex-col h-96 justify-start max-w-full px-1.5 w-1/4 flex">
                        <figure className="h-96 mb-3 w-96 p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/tulips">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/siren_pink_double_tulip___royal_windsor_vase_1.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-9 leading-[1.63rem] pb-3 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          TULIPS
                        </h2>
                      </div>
                      <div className="flex-col h-96 justify-start max-w-full px-1.5 w-1/4 flex">
                        <figure className="h-96 mb-3 w-96 p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowers/roses">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/rose_pink_sweet_avalanche_rose_vase_1__7_1__3.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-9 leading-[1.63rem] pb-3 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          ROSES
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-80 justify-center w-[148.75rem] flex">
                <div className="h-80 w-[148.75rem]">
                  <div className="h-80 w-[148.75rem]">
                    <div className="bg-zinc-100 flex-col h-80 justify-start w-[148.75rem] flex">
                      <div className="h-80 max-w-7xl px-4 w-full ">
                        <h1
                          className="text-3xl font-bold h-16 leading-8 pt-8 text-center uppercase w-[78.13rem]"
                          style={{
                            letterSpacing: "4px",
                          }}>
                          DISCOVER THE WORLD OF FLOWERBX
                        </h1>
                        <div className="self-stretch h-64 pb-5 w-[78.13rem]">
                          <div className="flex-wrap h-60 w-full flex">
                            <div className="flex-col h-60 justify-start max-w-full w-1/5 flex">
                              <figure className="h-48 mb-3 text-center w-64">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                  <img
                                    className="max-w-full w-64 hidden overflow-clip md:block"
                                    src="https://www.flowerbx.com/media/wysiwyg/Delivery_1_4x_5.png"
                                    style={{
                                      overflowClipMargin: "content-box",
                                    }}
                                  />
                                </a>
                              </figure>
                              <div className="h-10 w-64">
                                <p className="h-6 mb-4 text-center w-64">
                                  <span>Express Delivery</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex-col h-60 justify-start max-w-full w-1/5 flex">
                              <figure className="h-48 mb-3 text-center w-64">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                  <img
                                    className="max-w-full w-64 hidden overflow-clip md:block"
                                    src="https://www.flowerbx.com/media/wysiwyg/Make_it_personal_1_4x_1.png"
                                    style={{
                                      overflowClipMargin: "content-box",
                                    }}
                                  />
                                </a>
                              </figure>
                              <div className="h-10 w-64">
                                <p className="h-6 mb-4 text-center w-64">
                                  <span>Complimentary Gift Wrapping</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex-col h-60 justify-start max-w-full w-1/5 flex">
                              <figure className="h-48 mb-3 text-center w-64">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                  <img
                                    className="max-w-full w-64 hidden overflow-clip md:block"
                                    src="https://www.flowerbx.com/media/wysiwyg/Artboard_134_2_4x_1.png"
                                    style={{
                                      overflowClipMargin: "content-box",
                                    }}
                                  />
                                </a>
                              </figure>
                              <div className="h-10 w-64">
                                <p className="h-6 mb-4 text-center w-64">
                                  <span>Named-Day Delivery</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex-col h-60 justify-start max-w-full w-1/5 flex">
                              <figure className="h-48 mb-3 text-center w-64">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                  <img
                                    className="max-w-full w-64 hidden overflow-clip md:block"
                                    src="https://www.flowerbx.com/media/wysiwyg/Tell_a_friend_1_4x_1.png"
                                    style={{
                                      overflowClipMargin: "content-box",
                                    }}
                                  />
                                </a>
                              </figure>
                              <div className="h-10 w-64">
                                <p className="h-6 mb-4 text-center w-64">
                                  <span>Direct from the Grower</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex-col h-60 justify-start max-w-full w-1/5 flex">
                              <figure className="h-48 mb-3 text-center w-64">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                  <img
                                    className="max-w-full w-64 hidden overflow-clip md:block"
                                    src="https://www.flowerbx.com/media/wysiwyg/Carbon_neutral_1_4x_1.png"
                                    style={{
                                      overflowClipMargin: "content-box",
                                    }}
                                  />
                                </a>
                              </figure>
                              <div className="h-10 w-64">
                                <p className="h-6 mb-4 text-center w-64">
                                  <span>100% Carbon Neutral</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-44 max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-44 justify-start w-[94.13rem] flex">
                  <h1
                    className="text-3xl font-bold h-16 leading-8 pb-3 pt-8 text-center uppercase w-[94.13rem]"
                    style={{
                      letterSpacing: "4px",
                    }}>
                    Find your Flower Subscription
                  </h1>
                  <div className="h-14 pb-3 px-5 w-[94.13rem]">
                    <p className="h-6 mb-5 text-center w-[91.63rem]">Enjoy fresh flowers, delivered on repeat, with our curated edit of seasonal and core collection bouquets from £45.</p>
                  </div>
                  <div className="h-16 max-w-full pb-3 text-center w-[94.13rem]">
                    <div className="h-11 mb-2 mr-2 max-w-full w-48 inline-block">
                      <a
                        className="items-center bg-stone-950 text-white cursor-pointer h-11 max-w-full min-w-[12.50rem] py-2 px-4 uppercase w-48 inline-block rounded md:pl-6  md:pr-6"
                        href="https://www.flowerbx.com/luxury-flower-subscription"
                        id="a-2"
                        style={{
                          letterSpacing: "2px",
                        }}>
                        <span>SUBSCRIBE NOW</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[42.25rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[42.25rem] justify-start w-[94.13rem] flex">
                  <div className="self-stretch h-[42.25rem] pb-3 w-[94.13rem]">
                    <div className="flex-wrap h-[41.63rem] w-full flex">
                      <div className="flex-col h-[41.63rem] justify-start max-w-full w-1/3 flex">
                        <figure className="h-[32.50rem] mb-3 w-[31.38rem] p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/signature">
                            <img
                              className="max-w-full w-[30.13rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Rectangle_35_1.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-12 leading-[1.63rem] py-3 text-center uppercase w-[31.38rem]"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          The Signature Subscription
                        </h2>
                        <div className="h-11 w-[31.38rem]">
                          <p className="h-6 mb-5 text-center w-[31.38rem]">
                            <em className="italic">Perfect for: Bringing floral beauty to everyday moments</em>
                          </p>
                        </div>
                        <div className="h-12 max-w-full text-center w-[31.38rem]">
                          <div className="h-11 mb-2 mr-2 max-w-full w-48 inline-block">
                            <a
                              className="items-center bg-stone-950 text-white cursor-pointer h-11 max-w-full min-w-[12.50rem] py-2 px-4 uppercase w-48 inline-block rounded md:pl-6  md:pr-6"
                              href="https://www.flowerbx.com/luxury-flower-subscription/signature"
                              id="a-3"
                              style={{
                                letterSpacing: "2px",
                              }}>
                              <span>SHOP NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col h-[41.63rem] justify-start max-w-full w-1/3 flex">
                        <figure className="h-[32.50rem] mb-3 w-[31.38rem] p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/prestige">
                            <img
                              className="max-w-full w-[30.13rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Rectangle_34_1__1.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-12 leading-[1.63rem] py-3 text-center uppercase w-[31.38rem]"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          The Prestige Subscription
                        </h2>
                        <div className="h-11 w-[31.38rem]">
                          <p className="h-6 mb-5 text-center w-[31.38rem]">
                            <em className="italic">Perfect for: Flower lovers with premium style</em>
                          </p>
                        </div>
                        <div className="h-12 max-w-full text-center w-[31.38rem]">
                          <div className="h-11 mb-2 mr-2 max-w-full w-48 inline-block">
                            <a
                              className="items-center bg-stone-950 text-white cursor-pointer h-11 max-w-full min-w-[12.50rem] py-2 px-4 uppercase w-48 inline-block rounded md:pl-6  md:pr-6"
                              href="https://www.flowerbx.com/luxury-flower-subscription/prestige"
                              id="a-4"
                              style={{
                                letterSpacing: "2px",
                              }}>
                              <span>SHOP NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col h-[41.63rem] justify-start max-w-full w-1/3 flex">
                        <figure className="h-[32.50rem] mb-3 w-[31.38rem] p-3">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/luxury-flower-subscription/seasonal">
                            <img
                              className="max-w-full w-[30.13rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Tulip-Subs---SB1547_FB_024.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-12 leading-[1.63rem] py-3 text-center uppercase w-[31.38rem]"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          The Seasonal Subscription
                        </h2>
                        <div className="h-11 w-[31.38rem]">
                          <p className="h-6 mb-5 text-center w-[31.38rem]">
                            <em className="italic">Now in season: Tulips</em>
                          </p>
                        </div>
                        <div className="h-12 max-w-full text-center w-[31.38rem]">
                          <div className="h-11 mb-2 mr-2 max-w-full w-48 inline-block">
                            <a
                              className="items-center bg-stone-950 text-white cursor-pointer h-11 max-w-full min-w-[12.50rem] py-2 px-4 uppercase w-48 inline-block rounded md:pl-6  md:pr-6"
                              href="https://www.flowerbx.com/luxury-flower-subscription/seasonal"
                              id="a-5"
                              style={{
                                letterSpacing: "2px",
                              }}>
                              <span>SHOP NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-16 max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-16 justify-start w-[94.13rem] flex">
                  <h1
                    className="text-3xl font-bold h-16 leading-8 py-5 text-center uppercase w-[94.13rem]"
                    style={{
                      letterSpacing: "4px",
                    }}>
                    THE SEASONAL EDITS
                  </h1>
                </div>
              </div>
              <div className="h-[46.50rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[46.50rem] justify-start w-[94.13rem] flex">
                  <div className="self-stretch h-[46.50rem] w-[94.13rem]">
                    <div className="flex-wrap h-[46.50rem] w-full flex">
                      <div className="flex-col h-[46.50rem] justify-start max-w-full w-2/4 flex">
                        <figure className="h-[45.75rem] mb-3 mx-3 w-[45.88rem]">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-atelier">
                            <img
                              className="max-w-full w-[45.88rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Group_537_1_.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="flex-col h-[46.50rem] justify-start max-w-full w-2/4 flex">
                        <figure className="h-[45.88rem] mb-3 mx-3 w-[45.88rem]">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/seasons-best/pre-spring">
                            <img
                              className="max-w-full w-[45.88rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Group_536.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[41.00rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[41.00rem] justify-start w-[94.13rem] flex">
                  <div className="h-[41.00rem] w-[94.13rem]">
                    <section className="h-[35.38rem] w-[94.13rem]">
                      <div className="h-[35.38rem] ml-auto max-w-[calc(100%_-_0.75rem)] pl-3 w-[95.13rem] md:pl-6  md:max-w-[calc(((100%_-_1536px)/2)_+_1536px)] md:ml-[calc(((100%_-_1536px)/2))]">
                        <div className="w-[93.75rem]" />
  
                        <section className="h-[35.38rem] my-12 w-[93.75rem]">
                          <div className="h-[35.38rem] relative w-[93.75rem]">
                            <div className="float-right h-8 mr-36 mt-4 w-16">
                              <button
                                className="items-center bg-zinc-100/[0.6] cursor-pointer float-left h-8 justify-center opacity-70 relative text-center w-8 rounded-full"
                                style={{
                                  appearance: "button",
                                }}
                              />
                              <button
                                className="items-center bg-zinc-100/[0.6] cursor-pointer float-left h-8 justify-center ml-3 opacity-70 relative text-center w-8 rounded-full"
                                style={{
                                  appearance: "button",
                                }}
                              />
                            </div>
  
                            <div className="flex-col float-left h-5 mb-2 w-56 flex md:flex-row">
                              <h3
                                className="text-sm font-bold h-5 leading-[1.13rem] uppercase w-56"
                                style={{
                                  letterSpacing: "2px",
                                }}>
                                DISCOVER OUR NEWEST EDITS
                              </h3>
                            </div>
  
                            <div className="clear-both h-[32.50rem] pr-36 relative select-none w-[93.75rem] overflow-hidden">
                              <ul
                                className="h-full w-[84.38rem] flex list-none"
                                style={{
                                  backfaceVisibility: "hidden",
                                }}>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2995/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/mimosa-branches">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/m/i/mimosa_vase_5.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mimosa-branches">
                                          Mimosa
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/3597/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/canary-dutch-tulip">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/d/u/dutch_tulip_canary_dutch_tulip_wrap_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        5 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/canary-dutch-tulip">
                                          Canary Dutch Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£50.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2937/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/sunshine-narcissus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_sunshine_narcissus_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/sunshine-narcissus">
                                          Sunshine Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2933/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/t/italian_ranunculus_ballet_slippers_italian_ranunculus_vase_4.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                          Ballet Slippers Italian Ranunculus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£155.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2919/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/h/y/hyacinth_madamoiselle_hyacinth_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        4 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                          Mademoiselle Hyacinth
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£55.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2946/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/paperwhite-narcissus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_paperwhite_narcissus_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/paperwhite-narcissus">
                                          Paperwhite Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2775/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/petal-white-anemone">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/a/n/anemone_petal_white_anemone_stem_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/petal-white-anemone">
                                          Petal White Anemone
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£100.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2995/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/mimosa-branches">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/m/i/mimosa_vase_5.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mimosa-branches">
                                          Mimosa
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/3597/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/canary-dutch-tulip">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/d/u/dutch_tulip_canary_dutch_tulip_wrap_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        5 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/canary-dutch-tulip">
                                          Canary Dutch Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£50.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2937/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/sunshine-narcissus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_sunshine_narcissus_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/sunshine-narcissus">
                                          Sunshine Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2933/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/t/italian_ranunculus_ballet_slippers_italian_ranunculus_vase_4.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                          Ballet Slippers Italian Ranunculus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£155.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2919/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/h/y/hyacinth_madamoiselle_hyacinth_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        4 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                          Mademoiselle Hyacinth
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£55.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2946/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/paperwhite-narcissus">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_paperwhite_narcissus_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/paperwhite-narcissus">
                                          Paperwhite Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2775/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/petal-white-anemone">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/a/n/anemone_petal_white_anemone_stem_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/petal-white-anemone">
                                          Petal White Anemone
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£100.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2995/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/mimosa-branches">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/m/i/mimosa_vase_5.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mimosa-branches">
                                          Mimosa
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/3597/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/canary-dutch-tulip">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/d/u/dutch_tulip_canary_dutch_tulip_wrap_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        5 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/canary-dutch-tulip">
                                          Canary Dutch Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£50.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2937/" className="flex-col h-[32.50rem] w-full flex rounded-sm md:p-4">
                                    <a className="cursor-pointer h-96 mb-1 mx-auto relative w-96" href="https://www.flowerbx.com/sunshine-narcissus">
                                      <img
                                        className="max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_sunshine_narcissus_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/sunshine-narcissus">
                                          Sunshine Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
  
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2933/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/t/italian_ranunculus_ballet_slippers_italian_ranunculus_vase_4.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                          Ballet Slippers Italian Ranunculus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£155.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2919/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/h/y/hyacinth_madamoiselle_hyacinth_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        4 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                          Mademoiselle Hyacinth
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£55.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2946/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/paperwhite-narcissus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_paperwhite_narcissus_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/paperwhite-narcissus">
                                          Paperwhite Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2775/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/petal-white-anemone">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/a/n/anemone_petal_white_anemone_stem_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/petal-white-anemone">
                                          Petal White Anemone
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£100.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2995/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/mimosa-branches">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/m/i/mimosa_vase_5.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mimosa-branches">
                                          Mimosa
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/3597/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/canary-dutch-tulip">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/d/u/dutch_tulip_canary_dutch_tulip_wrap_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        5 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/canary-dutch-tulip">
                                          Canary Dutch Tulip
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£50.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2937/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/sunshine-narcissus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_sunshine_narcissus_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/sunshine-narcissus">
                                          Sunshine Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2933/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/t/italian_ranunculus_ballet_slippers_italian_ranunculus_vase_4.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        6 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus">
                                          Ballet Slippers Italian Ranunculus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£155.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2919/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/h/y/hyacinth_madamoiselle_hyacinth_vase_3.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        4 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/mademoiselle-hyacinth">
                                          Mademoiselle Hyacinth
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£55.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                                <li
                                  className="h-[32.50rem] mr-3 relative w-96 list-item"
                                  style={{
                                    flexShrink: "0",
                                  }}>
                                  <form action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2946/" className="flex-col h-[32.50rem] w-96 flex rounded-sm">
                                    <a className="cursor-pointer h-96 mb-1 relative w-96" href="https://www.flowerbx.com/paperwhite-narcissus">
                                      <img
                                        className="h-96 max-w-full object-contain w-96 overflow-clip"
                                        src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_paperwhite_narcissus_vase_2.jpg"
                                        style={{
                                          overflowClipMargin: "content-box",
                                        }}
                                      />
  
                                      <span
                                        className="bottom-[26.13rem] text-xs font-bold h-6 left-[19.50rem] leading-4 py-1 px-3 absolute uppercase w-24"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        3 Colours
                                      </span>
                                    </a>
  
                                    <div className="flex-col flex-grow h-20 min-h-[4.75rem] w-96 flex">
                                      <div
                                        className="items-center text-sm h-5 leading-[1.13rem] mt-1 uppercase w-96"
                                        style={{
                                          letterSpacing: "2px",
                                        }}>
                                        <a className="cursor-pointer" href="https://www.flowerbx.com/paperwhite-narcissus">
                                          Paperwhite Narcissus
                                        </a>
                                      </div>
  
                                      <div className="text-gray-900 h-6 w-96">
                                        <div className="h-6 w-96">
                                          <span>
                                            <span className="h-6 uppercase w-96">
                                              <span className="text-sm font-bold leading-[1.13rem]">From</span>
  
                                              <span>
                                                <span className="text-sm font-bold leading-[1.13rem]">£70.00</span>
                                              </span>
                                            </span>
                                          </span>
                                        </div>
                                        {"        "}
                                      </div>
                                    </div>
                                  </form>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-100 flex-col h-28 justify-start px-5 w-[148.75rem] flex">
                <h1
                  className="text-3xl font-bold h-16 leading-8 pb-3 pt-8 text-center uppercase w-[146.25rem]"
                  style={{
                    letterSpacing: "4px",
                  }}>
                  FLOWERBX BESPOKE
                </h1>
                <div className="h-11 px-8 w-[146.25rem]">
                  <p className="h-6 mb-5 text-center w-[142.50rem]">
                    <span>Take a look at our tailor-made services – whether you're planning a wedding, birthday, brand launch, or event the FLOWERBX team is here to bring your finest ideas to life in floral.</span>
                  </p>
                </div>
              </div>
              <div className="bg-neutral-100 flex-col h-[33.63rem] justify-start w-[148.75rem] flex">
                <div className="self-stretch h-96 w-[148.75rem]">
                  <div className="flex-wrap h-96 w-full flex">
                    <div className="flex-col h-96 justify-start max-w-full w-64 flex" />
                    <div className="flex-col h-96 justify-start max-w-full w-64 flex">
                      <figure className="h-96 mb-3 w-96">
                        <img
                          className="max-w-full w-96 hidden overflow-clip md:block"
                          src="https://www.flowerbx.com/media/wysiwyg/WEDDING-ICON-TRUSTED_1_2.png"
                          style={{
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </figure>
                      <div className="h-11 px-5 w-96">
                        <p className="h-6 mb-5 text-center w-96">A dedicated team of florists and account managers</p>
                      </div>
                    </div>
                    <div className="flex-col h-96 justify-start max-w-full w-64 flex">
                      <figure className="h-96 mb-3 w-96">
                        <img
                          className="max-w-full w-96 hidden overflow-clip md:block"
                          src="https://www.flowerbx.com/media/wysiwyg/WEDDING-ICONS-CONSULTATION_1_2.png"
                          style={{
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </figure>
                      <div className="h-11 px-5 w-96">
                        <p className="h-6 mb-5  text-center w-96">A bespoke consultation and quote to fit your brief</p>
                      </div>
                    </div>
                    <div className="flex-col h-96 justify-start max-w-full w-64 flex">
                      <figure className="h-96 mb-3 w-96">
                        <img
                          className="max-w-full  hidden overflow-clip md:block"
                          src="https://www.flowerbx.com/media/wysiwyg/WEDDING-ICON_1_2.png"
                          style={{
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </figure>
                      <div className="h-11 px-5 w-96">
                        <p className="h-6 mb-5   text-center w-96">Seasonal flowers and foliage, curated by experts</p>
                      </div>
                    </div>
                    <div className="flex-col h-96 justify-start max-w-full w-64 flex">
                      <figure className="h-96 mb-3 w-96">
                        <img
                          className="max-w-full w-96 hidden overflow-clip md:block"
                          src="https://www.flowerbx.com/media/wysiwyg/personalised-touches_1_.png"
                          style={{
                            overflowClipMargin: "content-box",
                          }}
                        />
                      </figure>
                      <div className="h-11 px-5 w-52">
                        <p className="h-6 mb-5   text-center w-96">Personalised touches to bring your occasion to life</p>
                      </div>
                    </div>
                    <div className="flex-col h-96 justify-start max-w-full w-64 flex" />
                  </div>
                </div>
                <div className="h-20 max-w-full py-5 text-center w-[148.75rem]">
                  <div className="h-10 mb-2 mr-2 max-w-full w-56 inline-block">
                    
                  </div>
                </div>
              </div>
              <div className="h-[33.50rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[33.50rem] justify-start w-[94.13rem] flex">
                  <div className="self-stretch h-[33.50rem] pb-3 w-[94.13rem]">
                    <div className="flex-wrap h-[32.88rem] w-full flex">
                      <div className="flex-col h-[32.88rem] justify-start max-w-full w-1/4 flex">
                        <figure className="h-[30.63rem] mb-3 pb-3 px-5 pt-5 w-96">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/events-parties">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_20_1_1_.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-7 leading-[1.63rem] px-5 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          EVENTS & PARTIES
                        </h2>
                      </div>
                      <div className="flex-col h-[32.88rem] justify-start max-w-full w-1/4 flex">
                        <figure className="h-[30.63rem] mb-3 pb-3 px-5 pt-5 w-96">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/corporate-brand-pr-gifting">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Group_94_2_1_.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-7 leading-[1.63rem] text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          CORPORATE GIFTING
                        </h2>
                      </div>
                      <div className="flex-col h-[32.88rem] justify-start max-w-full w-1/4 flex">
                        <figure className="h-[30.63rem] mb-3 pb-3 px-5 pt-5 w-96">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/installations">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_31_1_2_1_.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-7 leading-[1.63rem] px-5 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          INSTALLATIONS
                        </h2>
                      </div>
                      <div className="flex-col h-[32.88rem] justify-start max-w-full w-1/4 flex">
                        <figure className="h-[30.63rem] mb-3 pb-3 px-5 pt-5 w-96">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/weekly-flower-deliveries">
                            <img
                              className="max-w-full w-80 hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Rectangle_36_1_.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-7 leading-[1.63rem] px-5 text-center uppercase w-96"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          WEEKLY FLOWERS
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[42.75rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                <div className="flex-col h-[42.75rem] justify-start w-[94.13rem] flex">
                  <div className="self-stretch h-[42.75rem] w-[94.13rem]">
                    <div className="flex-wrap h-[42.75rem] w-full flex">
                      <div className="flex-col h-[42.75rem] justify-start max-w-full w-2/4 flex">
                        <figure className="h-[34.50rem] mb-3 py-3 px-5 w-[47.13rem]">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/weddings">
                            <img
                              className="max-w-full w-[44.63rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Rectangle_40.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-7 leading-[1.63rem] px-5 text-center uppercase w-[47.13rem]"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          Say 'I do' with FLOWERBX WEDDINGS
                        </h2>
                        <div className="h-24 px-5 pt-3 w-[47.13rem]">
                          <p className="h-6 mb-5 text-center w-[44.63rem]">Love-worthy flowers, from the personal details to the grand moments. </p>
  
                          <p className="h-6 mb-5 text-center w-[44.63rem]">
                            <span className="underline">
                              <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/weddings">
                                FIND OUT MORE
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex-col h-[42.75rem] justify-start max-w-full w-2/4 flex">
                        <figure className="h-[34.50rem] mb-3 py-3 px-5 w-[47.13rem]">
                          <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/workshops">
                            <img
                              className="max-w-full w-[44.63rem] hidden overflow-clip md:block"
                              src="https://www.flowerbx.com/media/wysiwyg/Armand-de-Brignac-ret_12_1_1_.jpg"
                              style={{
                                overflowClipMargin: "content-box",
                              }}
                            />
                          </a>
                        </figure>
                        <h2
                          className="text-xl font-bold h-7 leading-[1.63rem] px-5 text-center uppercase w-[47.13rem]"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          Get creative with a FLOWERBX WORKSHOP
                        </h2>
                        <div className="h-24 px-5 pt-3 w-[47.13rem]">
                          <p className="h-6 mb-5 text-center w-[44.63rem]">Our intimate flower masterclasses are ideal for every occasion.</p>
  
                          <p className="h-6 mb-5 text-center w-[44.63rem]">
                            <span className="underline">
                              <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/workshops">
                                FIND OUT MORE
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[39.88rem] justify-start w-[148.75rem] flex">
                <figure className="h-[38.63rem] my-3 w-[148.75rem]">
                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                    <img
                      className="max-w-full w-[135.00rem] hidden overflow-clip md:block"
                      src="https://www.flowerbx.com/media/wysiwyg/TESTIMONIAL_DESKTOP_3.jpg"
                      style={{
                        overflowClipMargin: "content-box",
                      }}
                    />
                  </a>
                </figure>
              </div>
              <div className="flex-col h-[55.13rem] justify-start w-[148.75rem] flex">
                <div className="h-[55.13rem] text-center w-[148.75rem]">
                  <div className="h-[52.38rem] w-[148.75rem]">
                    <div className="h-28 max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                      <div className="flex-col h-28 justify-start w-[94.13rem] flex">
                        <h2
                          className="text-xl font-bold h-12 leading-[1.63rem] py-3 uppercase w-[94.13rem]"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          FLOWERBX FLOWER AND GIFT DELIVERY
                        </h2>
                        <div className="h-16 w-[94.13rem]">
                          <p className="h-12 mb-4 w-[94.13rem]">
                            At FLOWERBX, we deliver fresh, seasonal, high-quality florals to your doorstep. We’re pleased to be able to offer a range of flexible delivery options, seven days a week, including nationwide standard and{" "}
                            <span className="underline">
                              <a className="cursor-pointer" href="https://www.flowerbx.com/same-day">
                                next-day
                              </a>
                            </span>{" "}
                            delivery across the UK and{" "}
                            <span className="underline">
                              <a className="cursor-pointer" href="https://www.flowerbx.com/same-day">
                                same-day
                              </a>
                            </span>{" "}
                            delivery, exclusively in London. Order flowers online with us, and you’ll receive seasonal, high-quality flowers every time – whether they are a treat for your home or sent as a gift.{" "}
                            <span className="underline">
                              <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                Discover the FLOWERBX range.
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[45.75rem] max-w-screen-2xl px-4 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
                      <div className="flex-col h-[45.75rem] justify-start mb-12 w-[94.13rem] flex">
                        <div className="self-stretch h-[45.75rem] w-[94.13rem]">
                          <div className="flex-wrap h-[45.75rem] w-full flex">
                            <div className="flex-col h-[45.75rem] justify-start max-w-full w-[45.25rem] flex m-4">
                              <figure className="h-[32.63rem] mb-7 w-[45.25rem]">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                  <img
                                    className="max-w-full w-[45.25rem] hidden overflow-clip md:block"
                                    src="https://www.flowerbx.com/media/wysiwyg/Mask_group_1-min.jpeg"
                                    style={{
                                      overflowClipMargin: "content-box",
                                    }}
                                  />
                                </a>
                              </figure>
                              <h2
                                className="text-xl font-bold h-9 leading-[1.63rem] pb-3 uppercase w-[45.25rem]"
                                style={{
                                  letterSpacing: "2px",
                                }}>
                                FLOWERBX LUXURY FLOWERS
                              </h2>
                              <div className="h-36 w-[45.25rem]">
                                <p className="h-24 mb-5 w-[45.25rem]">
                                  At FLOWERBX, we are seasoned experts in fashion-forward{" "}
                                  <span className="underline">
                                    <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                      flower varieties
                                    </a>
                                  </span>
                                  . Our bouquets usually feature just one type of flower, while our limited-edition mixed bouquets offer a curated approach to traditional hand-tied florals. We source flowers directly from their growers, keeping waste low and freshness and beauty our top priority. 
                                </p>
  
                                <p className="h-6 mb-4 w-[45.25rem]">
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/flowers">
                                    <span className="underline">Shop FLOWERBX Flowers</span>
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="flex-col h-[45.75rem] justify-start max-w-full w-[45.25rem] flex m-4">
                              
                              <h2
                                className="text-xl font-bold h-9 leading-[1.63rem] pb-3 uppercase w-[45.25rem]"
                                style={{
                                  letterSpacing: "2px",
                                }}>
                                SUSTAINABILITY & ETHICS
                              </h2>
                              <div className="h-36 w-[45.25rem]">
                                <p className="h-24 mb-5 w-[45.25rem]">
                                  We’re in the business of using flowers for good, so our bouquets and blooms always put the planet first. With a cut-to-order, zero-waste model and carbon-neutral flower delivery, we were awarded{" "}
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/b-corp">
                                    B Corp
                                  </a>{" "}
                                  status in 2024 for our commitment to positive environmental and social change. From our recycled packaging to compostable components, we’re forever innovating to improve all areas of our product and supply chain across FLOWERBX.
                                </p>
  
                                <p className="h-6 mb-4 w-[45.25rem]">
                                  <a className="cursor-pointer" href="https://www.flowerbx.com/our-mission">
                                    <span className="underline">Discover our mission</span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        <section className="w-[148.75rem]"></section>
  
        <footer className="h-[36.38rem] relative w-[148.75rem]">
          <div className="h-[36.38rem] w-[148.75rem]">
            <div className="bg-neutral-100 border-b-2 border-t-2 h-[36.38rem] w-[148.75rem] border-neutral-200 border-solid" id="div-42">
              <div className="max-w-screen-2xl px-6 w-full m-auto sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl"></div>
  
              <div className="h-[33.13rem] mb-12 mx-auto max-w-screen-2xl py-8 px-6 w-full sm:max-w-[40.00rem]  md:max-w-3xl lg:max-w-5xl lg:ml-auto lg:mr-auto lg:mb-12 lg:pt-8 lg:pb-8 xl:max-w-7xl 2xl:max-w-screen-2xl" id="div-43">
                <div className="h-96 w-[93.25rem] flex" id="div-44">
                  <section className="h-96 order-3 w-80">
                    <div className="h-48 px-1.5 w-80">
                      <h3 className="text-sm h-11 leading-[1.38rem] pb-5 uppercase w-80">Do you have a Question?</h3>
  
                      <p className="text-sm h-20 leading-5 pb-5 w-80">Do you have a special request? Or are you in doubt about something? Send a message to our Customer Support Team, who will do their best to reply as soon as possible.</p>
  
                      <button
                        className="items-center bg-stone-950 text-white gap-x-2 cursor-pointer text-sm font-medium h-16 leading-[1.13rem] py-7 px-16 text-center w-56 flex rounded-md md:pl-6  md:pr-6"
                        style={{
                          appearance: "button",
                        }}>
                        <span className="text-lg h-5 pr-1.5 w-6" />
  
                        <span className="h-5 uppercase w-16">Ask Away?</span>
                      </button>
                    </div>
                  </section>
  
                  <section className="h-96 w-80">
                    <div className="h-96 w-80 flex">
                      <div className="h-96 w-80 gap-[1.88rem] col-span-2" id="div-45">
                        <div className="h-96 w-80">
                          <div
                            className="text-sm h-96 leading-[1.38rem] w-80"
                            style={{
                              letterSpacing: "2px",
                            }}>
                            <h3 className="h-11 pb-5 uppercase w-80">Popular shortcuts</h3>
  
                            <ul className="font-bold h-96 uppercase w-80 list-none">
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/about-us/our-brand">
                                  About Us
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/corinthia-london-flower-boutique">
                                  Visit our store
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services">
                                  Bespoke Services
                                </a>
                              </li>
  
                             
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/flowerbx-services/weddings">
                                  Weddings by FLOWERBX
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/valentines-day">
                                  Valentine's Day
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/the-cut">
                                  Editorial
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/b-corp">
                                  B Corp
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/our-mission">
                                  Our Mission
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/contact-us">
                                  Contact Us
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/frequently-asked-questions">
                                  Frequently Asked Questions
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/delivery-info">
                                  Delivery
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/about-us/legal-info">
                                  Terms & Conditions
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/privacy-policy-cookie-restriction-mode">
                                  Privacy & Cookies
                                </a>
                              </li>
  
                              <li className="h-8 py-1 w-80 list-item">
                                <a className="cursor-pointer" href="https://www.flowerbx.com/careers-page">
                                  Careers
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {"            "}
                      </div>
                    </div>
                  </section>
  
                  <section className="border-t-2 text-gray-700 h-14 absolute top-[33.00rem] w-[148.75rem] border-neutral-200 border-solid lg:absolute  lg:bottom-0 lg:left-0 lg:w-full" id="section-3">
                    <div className="h-14 py-4 px-6 relative w-[96.00rem] m-auto lg:w-full  lg:mr-auto lg:ml-auto lg:pr-6 lg:pl-6 lg:pt-4 lg:pb-4" id="div-46">
                      <div className="gap-x-[0.38rem] h-6 w-[93.25rem] flex" id="div-47">
                        
  
                        <div
                          className="self-start cursor-pointer flex-grow text-xs font-bold h-6 order-2 pl-3 underline uppercase w-[85.25rem] lg:pl-3"
                          style={{
                            letterSpacing: "2px",
                          }}>
                          
                        </div>
                      </div>
                    </div>
                  </section>
  
                  <section className="items-center flex-col flex-grow h-96 justify-items-center order-2 px-4 relative w-[51.50rem] flex lg:flex  lg:flex-col lg:items-center lg:pl-4 lg:pr-4" id="section-4">
                    <div className="h-56 relative w-96">
                      <div
                        className="text-sm h-36 leading-[1.38rem] order-1 w-96 lg:w-96"
                        id="div-48"
                        style={{
                          letterSpacing: "2px",
                        }}>
                        <h3 className="h-16 pb-5 uppercase w-96">Sign up to join FLOWERBX LOYALTY and receive £10 off your first purchase</h3>
  
                        <form action="https://api.ometria.com/forms/signup " className="h-20 w-96">
                          <div className="h-20 relative w-96">
                            <input className="bg-white cursor-text text-base h-16 leading-6 mb-2 py-6 px-3 w-full inline-block border-2 border-neutral-200 border-solid rounded-md overflow-clip" defaultValue="" placeholder="Enter your email address" type="email" />
  
                            <div className="w-96">
                              <button
                                className="bottom-[0.50rem] cursor-pointer h-16 left-[19.88rem] leading-[0.88rem] absolute text-center w-16 p-7"
                                style={{
                                  appearance: "button",
                                }}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
  
                      <div className="h-20 w-96">
                        <h3 className="h-14 pt-8 uppercase w-96">connect with us on social</h3>
  
                        <div className="gap-x-2 h-9 pt-5 w-full flex">
                          <a className="cursor-pointer h-5 w-28 flex" href="https://www.instagram.com/theflowerbx/?hl=en">
                            <span className="h-5 leading-4 w-5" />
  
                            <span className="text-xs h-5 leading-[1.13rem] pl-1.5 uppercase w-24">@theflowerbx</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  
      <iframe
        className="bottom-[698.88rem] absolute right-[148.75rem] top-[-624.88rem] overflow-clip"
        src="https://www.flowerbx.com/about:blank"
        style={{
          overflowClipMargin: "content-box",
        }}
      />
  
      <div className="w-[148.75rem]" />
      <div className="w-[148.75rem]" />
      <div className="w-[148.75rem]" />
      <div className="w-[148.75rem]" />
    </div>
  </div>
  
    
  );
};

export default App;
