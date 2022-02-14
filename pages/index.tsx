import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";

import ScrollController from "components/ScrollController";

export default function Home() {
    return (
        <ScrollController>
            <div className="bg-white flex items-center justify-between p-5 shadow fixed w-full">
                <div>
                    <h1 className="hidden md:block text-3xl font-special font-bold">
                        Gabriel Quintino
                    </h1>
                    <h2 className="hidden md:block text-blue text-sm font-bold">
                        JavaScript / Typescript Developer
                    </h2>
                </div>
                <div className="font-bold text-black">
                    <a href="#projects" className="px-5">Projects</a>
                    <a href="#contacts" className="px-5">Contact</a>
                    <a href="./resume.pdf" download className="px-5">Resume</a>
                </div>
            </div>
            <div className="w-full h-screen flex flex-row items-center justify-center">
                <div className="w-full lg:w-3/5 p-14 md:p-28">
                    <h1 className="font-bold text-3xl md:text-5xl mb-4">Hello, World!</h1>
                    <p className="font-sans text-lg md:text-2xl">
                        My name is <b>Gabriel Quintino</b> and I&apos;m a <b>JavaScript</b> and <b>Typescript</b> developer.
                    </p>
                </div>

                <img className="lg:w-2/5 w-0 h-full" src="./avatar.png" alt="My avatar"/>
            </div>
            <div id="projects" className="p-14 bg-black text-white">
                <h3 className="text-5xl font-bold mb-4">Projects</h3>

                <div className="w-full flex flex-col md:flex-row items-center">
                    <img src="https://codepen.io/Pikachurin/pen/ExZBMRV/image/large.png" alt="Pure CSS Game Boy" width="500" className="rounded"/>  

                    <div className="p-4">
                        <h1 className="font-bold text-3xl">
                            Pure CSS Game Boy
                        </h1>
                        <p>
                            Game Boy illustration made using only CSS and HTML
                        </p>
                        <p className="text-xs">
                            HTML - CSS
                        </p>
                        <a href="https://codepen.io/Pikachurin/pen/ExZBMRV" target="_blank" className="text-3xl mt-2" rel="noreferrer">
                            <FontAwesomeIcon icon={faCodepen}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-14 bg-white">
                <div className="w-full flex flex-col md:flex-row items-center">
                    <div className="w-full text-right p-4">
                        <h1 className="font-bold text-3xl">
                            Collatz Conjecture
                        </h1>
                        <p className="text-right">
                            Implementation of the <a className="font-bold" href="https://www.youtube.com/watch?v=EYLWxwo1Ed8">Collatz Conjecture</a> using JavaScript
                        </p>
                        <p className="text-xs text-right">
                            JavaScript - Canvas
                        </p>
                        <a href="https://codepen.io/Pikachurin/pen/zYqxKXo" target="_blank" className="text-3xl mt-2" rel="noreferrer">
                            <FontAwesomeIcon icon={faCodepen}/>
                        </a>
                    </div>

                    <img src="https://codepen.io/Pikachurin/pen/zYqxKXo/image/large.png" alt="Pure CSS Game Boy" width="500" className="rounded"/>
                </div>
            </div>
            <div className="p-14 bg-black text-white">
                <div className="w-full flex flex-col md:flex-row items-center">
                    <img src="https://codepen.io/Pikachurin/pen/vYymvmZ/image/large.png" alt="Pure CSS Game Boy" width="500" className="rounded"/>

                    <div className="p-4">
                        <h1 className="font-bold text-3xl">
                            Donut.JS
                        </h1>
                        <p>
                            JavaScript implementation of the Donut.c code
                        </p>
                        <p className="text-xs">
                            Canvas - JavaScript
                        </p>
                        <a href="https://codepen.io/Pikachurin/pen/vYymvmZ" target="_blank" className="text-3xl mt-2" rel="noreferrer">
                            <FontAwesomeIcon icon={faCodepen}/>
                        </a>
                        <a href="https://github.com/Billocap/Donut-JS" target="_blank" className="text-3xl ml-2" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-14 bg-white">
                <div className="w-full flex flex-col md:flex-row items-center">
                    <div className="w-full text-right p-4">
                        <h1 className="font-bold text-3xl">
                            JQuery Slide Show
                        </h1>
                        <p className="text-right">
                            Slide show implemented using JQuery
                        </p>
                        <p className="text-xs text-right">
                            HTML - CSS - JavaScript - JQuery
                        </p>
                        <a href="https://codepen.io/Pikachurin/pen/KKddLqz" target="_blank" className="text-3xl mt-2" rel="noreferrer">
                            <FontAwesomeIcon icon={faCodepen}/>
                        </a>
                    </div>

                    <img src="https://codepen.io/Pikachurin/pen/KKddLqz/image/large.png" alt="Pure CSS Game Boy" width="500" className="rounded"/>
                </div>
            </div>
            <footer id="contacts" className="bg-black p-14 text-white text-sm flex flex-col sm:flex-row">
                <div className="w-full flex flex-col">
                    <p className="text-xl font-bold mb-2">Social Media</p>
                    <a href="https://github.com/Billocap" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    <a href="https://codepen.io/Pikachurin" target="_blank" rel="noreferrer">
                        Codepen
                    </a>
                    <a href="https://vercel.com/pikachurin" target="_blank" rel="noreferrer">
                        Vercel
                    </a>
                    <a href="https://codesandbox.io/dashboard/home?workspace=27277791-d022-474c-a5d0-5463cf09073c" target="_blank" rel="noreferrer">
                        CodeSandbox
                    </a>
                </div>
                <div className="w-full flex flex-col">
                    <p className="text-xl font-bold mb-2 mt-2 md:mt-0">Contact Me</p>
                    <a href="mailto:pikachurando@pm.me" target="_blank" rel="noreferrer">
                        pikachurando@pm.me
                    </a>
                    <a href="https://www.linkedin.com/in/pikachurin" target="_blank" rel="noreferrer">
                        linkedin.com/in/pikachurin
                    </a>
                </div>
            </footer>
        </ScrollController>
    );
};
