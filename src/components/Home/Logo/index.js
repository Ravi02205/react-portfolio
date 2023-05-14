import './index.scss';
import LogoS from '../../../assets/images/logo-r-space.png';
import { useEffect, useRef } from 'react';
const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        outlineLogoRef.current.classList.add('path');
    }, []);

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="R" />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet">

                <g className='svg-container' transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                    fill="transparent" stroke="none">
                    <path ref={outlineLogoRef} d="M1365 4943 c-342 -13 -804 -56 -967 -89 l-28 -6 0 -2229 0 -2229 650
0 650 0 0 865 0 865 44 0 c68 0 192 -19 261 -41 131 -40 238 -156 305 -331 18
-46 77 -256 130 -468 125 -491 179 -667 247 -812 l36 -78 674 0 c370 0 673 2
673 5 0 3 -15 36 -34 73 -46 91 -101 266 -207 662 -176 652 -191 706 -240 830
-98 249 -221 419 -382 529 l-48 33 77 44 c299 170 509 443 595 773 26 100 36
339 20 480 -30 251 -135 485 -296 659 -179 194 -490 348 -831 411 -260 48
-464 61 -914 59 -190 -1 -376 -3 -415 -5z m792 -74 c407 -33 707 -121 948
-277 99 -65 249 -220 309 -320 103 -172 154 -358 162 -587 9 -220 -27 -399
-114 -570 -112 -222 -348 -445 -577 -546 -41 -18 -75 -38 -75 -45 0 -6 14 -17
31 -24 50 -21 147 -87 201 -138 111 -102 225 -290 293 -482 28 -79 90 -300
200 -715 81 -308 158 -569 191 -648 13 -33 24 -62 24 -64 0 -2 -186 -3 -414
-3 l-413 0 -28 62 c-64 141 -152 444 -274 935 -63 257 -100 363 -158 461 -73
123 -161 194 -298 239 -79 27 -84 27 -412 31 l-333 4 -2 -864 -3 -863 -398 -3
-397 -2 2 2172 3 2173 115 16 c139 20 434 47 625 58 212 12 648 12 792 0z
m-1607 -2239 l0 -2180 -60 0 -60 0 2 2173 3 2172 40 6 c22 3 48 7 58 8 16 1
17 -109 17 -2179z m2532 2075 c179 -76 337 -193 444 -328 259 -324 318 -846
140 -1223 -125 -263 -354 -486 -608 -590 -38 -15 -68 -31 -68 -35 0 -4 30 -24
68 -43 158 -84 284 -222 382 -421 81 -166 101 -228 249 -778 133 -494 202
-730 227 -778 25 -49 19 -59 -35 -59 -28 0 -53 6 -60 13 -33 41 -98 253 -256
842 -168 625 -220 767 -347 952 -52 76 -182 206 -236 239 -30 17 -42 34 -24
34 24 0 234 151 308 222 116 111 194 217 264 363 113 232 141 459 94 762 -55
360 -261 651 -585 828 -92 51 -76 51 43 0z m-1482 -3420 l0 -836 -57 3 -58 3
-3 833 -2 832 60 0 60 0 0 -835z m633 762 c106 -56 195 -178 253 -351 13 -38
55 -196 94 -350 86 -347 168 -635 220 -774 22 -58 40 -109 40 -114 0 -4 -22
-8 -50 -8 -61 0 -67 8 -122 162 -59 168 -118 376 -207 735 -45 177 -94 359
-111 405 -52 141 -134 261 -225 326 l-30 21 40 -10 c22 -6 66 -25 98 -42z"/>
                    <path d="M1650 4140 c-63 -4 -141 -11 -172 -15 l-58 -7 0 -609 0 -609 328 0
c354 0 456 9 594 53 222 71 375 225 423 428 33 141 11 346 -50 457 -79 145
-232 246 -439 288 -84 17 -453 26 -626 14z m473 -89 c197 -51 319 -153 378
-316 19 -50 22 -82 22 -195 1 -115 -3 -144 -21 -194 -30 -80 -74 -147 -133
-200 -135 -122 -311 -176 -571 -176 l-128 0 0 544 0 545 43 5 c96 13 117 14
222 11 68 -2 140 -12 188 -24z m-523 -531 l0 -550 -60 0 -60 0 0 544 0 545 23
4 c12 2 39 5 60 6 l37 1 0 -550z m846 480 c128 -64 210 -159 251 -290 23 -77
24 -265 0 -340 -38 -122 -123 -229 -233 -292 -56 -33 -174 -83 -174 -74 0 2
22 18 50 36 107 69 197 193 236 326 23 79 23 255 -1 344 -33 127 -113 243
-215 312 -48 33 5 19 86 -22z"/>
                </g>
            </svg>

        </div>
    )
}

export default Logo;
