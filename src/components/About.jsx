import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        //timeline allows to precisely create the animations
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger : '#clip',
                start : 'center center',
                //This means that the animation will trigger 800 pixels past center -center
                end : '+=800 center',
                scrub:0.5,
                pin: true,
                //This adds padding that pushes the other elements down so all the content
                //catches up perfectly after the animation and there's no under scrolling
                pinSpacing: true
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })
    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>
                    DATA LOADING</h2>
                <AnimatedTitle title="a k<b>a</b>l<b>e</b>id<b>o</b>sc<b>o</b>p<b>e</b> of regueton’s p<b>a</b>st, pr<b>e</b>s<b>e</b>nt, and f<b>u</b>t<b>u</b>r<b>e</b>"
                containerClass='mt-5 !text-black text-center'/>

                <div className='about-subtext'>
                    <p> A fearless playground where Tainy bends genres, challenges norms</p>
                    <p> and redefines urbano’s DNA for every listener, from nostalgic old-school fans to the digital generation</p>

                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img
                        src='img/img.png'
                        alt='Background'
                        className='absolute left-0 top-0 size-full object-cover'
                    />

                </div>
            </div>
        </div>
    )
}
export default About
