const snippets: CodeSnippet[] = [
  {
    source: `<a href="https://codepen.io/Pikachurin" id="with-love" target="_blank">Made by Gabriel Quintino</a>

<div id="gameboy">
    <div id="top">
        <div id="bottom-groove"></div>
        <div id="left-groove"></div>
        <div id="right-groove"></div>
    </div>
    <div id="screen">
        <div id="header"></div>
        <div id="led"></div>
        <div id="main"></div>
        <span id="name">Nintendo <i>GAME BOY</i></span>
    </div>
    <div id="a-b-buttons">
        <div class="left button"></div>
        <div class="right button"></div>
    </div>
    <div id="start-select-buttons">
        <div class="left button"></div>
        <div class="right button"></div>
    </div>
    <div id="d-pad">
        <div id="left-right" class="button">
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
            <div class="center detail"></div>
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
        </div>
        <div id="up-down" class="button">
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
            <div class="center detail"></div>
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
            <div class="thumb detail"></div>
        </div>
    </div>
    <div id="sound">
        <div class="groove"></div>
        <div class="groove"></div>
        <div class="groove"></div>
        <div class="groove"></div>
        <div class="groove"></div>
        <div class="groove"></div>
    </div>
</div>

<style>
    @media screen and (max-width: 600px) {
        #gameboy {
            transform: scale(0.7);
        }

        #gameboy:hover {
            transform: scale(0.8);
        }
    }
</style>`,
    language: "html"
  },
  {
    source: `/* Globals */
:root {
  --fab-radius: 30px;
  --fab-inset-radius: 35px;
  --inset-ratio: calc(140 / 50);
  --appbar-background: #540C8E;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  scrollbar-width: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #313437;
}

svg {
  position: absolute;
}

button {
  background: none;
  border: none;
  outline: none;
}

/* Components */
#phone {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #C1C1C1;
  box-shadow: rgba(0, 0, 0, 0.75) 1px 4px 5px;
  overflow: hidden;
  resize: both;
  height: 500px;
  width: 270px;
  border-radius: 15px;
  border: #404040 outset 2px;
  padding: 0px 5px;
}

#top-section {
  display: flex;
  align-items: center;
  margin: 15px;
}

#camera {
  height: 5px;
  width: 5px;
  background: black;
  border-radius: 50%;
  margin-right: 10px;
}

#sound-bar {
  height: 5px;
  width: 40px;
  border-radius: 10px;
  border: #B0B0B0 ridge 1px;
}

#home-button {
  margin: 15px;
  height: 20px;
  width: 50px;
  border-radius: 10px;
  border: #B0B0B0 outset 1px;
}

#screen {
  background: white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  border: black inset 1px;
}

#status-bar {
  position: relative;
  width: 100%;
  color: #5E5E5E;
  background: #E8E8E8;
  font-size: 0.6em;
  padding: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation: status-bar-slide 0.2s ease-out both;
}

#status-bar * {
  margin-left: 0.5em;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  overflow: auto;
  padding-bottom: 60px;
}

#app h1 {
  font-size: 25px;
  padding: 13px;
  font-weight: 400;
  text-align: left;
}

.user {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  animation: fade 0.2s linear both;
}

.user div {
  margin-left: 10px;
}

.avatar {
  display: inline;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.info {
  width: 100%;
  text-align: left;
}

.info p {
  font-size: 1.25em;
}

.info span {
  font-size: 0.75em;
  color: gray;
}

#app-bar {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

#fab {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  transition: margin-bottom 0.5s;
}

#fab button {
  width: calc(2 * var(--fab-radius));
  height: calc(2 * var(--fab-radius));
  border-radius: 50%;
  background: black;
  color: white;
  font-size: 1.5em;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app-bar-action-bar {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 50px;
  padding: 20px;
  font-size: 1em;
  color: white;
  background: var(--appbar-background);
  display: flex;
  align-items: center;
  transition: top 0.5s;
}

#app-bar-action-bar.left {
  justify-content: flex-start;
}

#app-bar-action-bar.right {
  justify-content: flex-end;
}

#app-bar-fab-inset {
  background: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(2.4 * var(--fab-inset-radius));
  height: 50px;
  filter: url("#smooth");
}

#app-bar-fab-inset .bowl {
  flex-shrink: 0;
  clip-path: url("#clip");
  height: var(--fab-inset-radius);
  width: calc(var(--inset-ratio) * var(--fab-inset-radius));
}

#app-bar-fab-inset .bowl .top,
#app-bar-fab-inset .bowl .bottom {
  width: 100%;
  transition: height 0.5s;
}

#app-bar-fab-inset .bowl .top {
  background: none;
}

#app-bar-fab-inset .bowl .bottom {
  background: var(--appbar-background);
}

#app-bar-fab-inset .filler {
  background: var(--appbar-background);
  width: calc(var(--inset-ratio) * var(--fab-inset-radius));
  transition: height 0.5s;
}

/* Scroll States */
#app-bar.hidden #fab {
  margin-bottom: 0;
}

#app-bar.visible #fab {
  margin-bottom: 10px;
}

#app-bar.hidden #app-bar-action-bar {
  top: 50px;
}

#app-bar.visible #app-bar-action-bar {
  top: 0px;
}

#app-bar.hidden #app-bar-fab-inset .bowl .top,
#app-bar.visible #app-bar-fab-inset .bowl .bottom {
  height: 100%;
}

#app-bar.visible #app-bar-fab-inset .bowl .top,
#app-bar.hidden #app-bar-fab-inset .bowl .bottom,
#app-bar.hidden #app-bar-fab-inset .filler{
  height: 0;
}

#app-bar.visible #app-bar-fab-inset .filler {
  height: calc(100% - var(--fab-inset-radius));
}

/* Animations */
@keyframes status-bar-slide {
  from {
    top: -25px;
  }

  to {
    top: 0px;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`,
    language: "css"
  },
  {
    source: `import React from 'react'
import ReactDOM from 'react-dom'

import AppController from './contexts/AppContext'
import ScreenNavigator from './contexts/ScreenContext'

import App from './App'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <AppController>
      <ScreenNavigator>
        <App/>
      </ScreenNavigator>
    </AppController>
  </React.StrictMode>,
  document.getElementById('root')
)`,
    language: "javascript"
  },
  {
    source: `                        eval(\`var{sin:A,
                  cos:B,sqrt:C,pow:D,round:E,c
              eil:F,PI:_a}=Math,G=(x,y,z,X,Y,Z)=>{
            var a=B(Y),b=B(Z),c=B(X),d=A(Z),e=A(X),f
          =A(Y),C=e*f,D=c*f;return[x*a*b+y*(-C*b+c*d)+
        z*(D*b+e*d),-x*a*d+y*(C*d+c*b)+z*(-D*d+e*b),-x*f
      -y*e*a+z*c*a];},H=(w,h)=>{var b=[];while(h){b.push(n
    ew Array(w).fill(0));h--;}return b;};_b = document.query
    Selector("canvas").getContext("2d"),_c=_a/2,_d=15,_e=_d*
  0.55,_f=0,_g=0,_h=_c/3,_i=H(F(500/_e),F(500/_d)),_j=H(F(500/
  _e),F(500/_d)),draw=_=>{let a=2*_a;while(a>0) {let b=2*_a;wh
  ile(b>0){var[c,d,e]=G((30*B(b)*B(a)+2*B(a)*30)/2,(30*B(b)*A(
a)+2*A(a)*30)/2,30*A(b)/2,_f        ,_g,_h),[f,g,h]=G(B(b)*B(a),
B(b)*A(a),A(b),_f,_g,_h),i            =1/C(D(120-c,2)+D(0-d,2)+D
(0-e,2)),j=f*B(_c/2)*B(_                a/3)+g*B(_c/2)*A(_a/3)+h
*A(_c/2),k=(d*350)/(120-                c),l=-(e*350)/(120-c),m=
E((250 + k) / _e),n=E((2                50 + l)/_d);if(_i[n][m]<
i){_i[n][m]=i;_j[n][m]=(                j+1)/2;}b-=_a*2/60}a-=_a
*2/150;}_f+=0.03;_g+=0;_h-            =0.01;_b.fillStyle="black"
;_b.fillRect(0,0,500,500);_j        .forEach((a,y)=>a.forEach((b
  ,x)=>{_b.font=\`\$\{_d\}px Consolas\`;_b.fillStyle='white';_
  b.fillText(" .,-~:;!=*#$@"[E(b*12)],x*_e,y*_d);_i[y][x]=0;_j
  [y][x]=0;}));};setInterval(draw,50/3);\`.replaceAll("\n","").
    replaceAll("  ",""));/*---------------------------------
    --------------------------------------------------------
      ----------------------------------------------------
        The Donut Ended Up Being Bigger Than I Expected!
          --------------------------------------------
            ----------------------------------------
                --------------------------------
                      ------------------*/
`,
    language: "javascript"
  }
]

export default snippets
