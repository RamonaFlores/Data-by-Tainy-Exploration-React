import React, {useEffect, useRef, useState} from 'react'
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useWindowScroll} from 'react-use'
import gsap from 'gsap';
//Creating an array with the navbar items prevents the code from getting too messy.
const navItems = ['Nexus','Vault','Prologue','About','Contact'];


const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const { y: currentScrollY} = useWindowScroll();
    useEffect(() => {
        //If the user is at the top the navbar will be normally visible.
        if(currentScrollY=== 0) {
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav');
        //if the user is just scrolling down
        }else if (currentScrollY>lastScrollY) {
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav');
        }else if (currentScrollY<lastScrollY) {
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY)

    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive(prev => !prev);


    }
    //Logic to play the audio
    useEffect(() => {
        if(isAudioPlaying){
            audioElementRef.current.play();

        }else {
            audioElementRef.current.pause();
        }

    },[isAudioPlaying]);
    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16
        border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src='/img/logo.png' alt='Logo' className='w-10' />
                        <Button
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />

                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item) => (
                                <a key={item} className='nav-hover-btn' href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button className='ml-10 flex items-center space-x-0.5'
                                onClick={toggleAudioIndicator}>
                                <audio ref={audioElementRef}
                                        className='hidden'
                                        src='/audio/AndreaTeQuiero.mp3'
                                       loop
                                />
                                    {[1,2,3,4].map((bar)=> (
                                        <div key={bar}
                                             className={`indicator-line ${isIndicatorActive ? 'active' : '' }`}
                                             style={{animationDelay:`${bar * 0.1 }s`}}
                                        />


                                    ))}


                        </button>


                    </div>



                </nav>

            </header>
        </div>
    )
}
export default Navbar
