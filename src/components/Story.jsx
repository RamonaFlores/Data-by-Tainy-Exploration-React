import React, {useRef} from 'react'
import AnimatedTitle from "./AnimatedTitle.jsx";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners.jsx";
import Button from "./Button.jsx";
const Story = () => {
    const frameRef=useRef('null');
    const handleMouseLeave= () => {
        const element=frameRef.current;
        gsap.to(element, {
            duration:0.3,
            rotateX:0,
            rotateY:0,
            ease:"power1.inOut"
        })

    }
    const handleMouseMove=(event) => {
        const {clientX, clientY} = event;
        const element=frameRef.current;
        if(!element) return;
        const rect= element.getBoundingClientRect();
        const x= clientX - rect.left;
        const y= clientY - rect.top;

        const centerX= rect.width/2;
        const centerY= rect.height/2;

        const rotateX= ((y-centerY)/ centerY) * -10;
        const rotateY= ((x-centerX)/centerX)*10
        gsap.to(element, {
            duration:0.3,
            rotateX,rotateY,
            transformPerspective:500,
            ease:"power1.inOut"
        })

    }
    return (
        <section
            id='story'
            className='min-h-dvh w-screen bg-black
            text-blue-50'
        >
            <div className='flex size-full flex-col items-center py-10
            pb-24 '>
                <p className='font-general text-sm uppercase md:text-[10px]'>
                    "Loading our experiences, emotions and memories"
                </p>
                <div className='relative size-full'>
                    <AnimatedTitle
                        title=' st<b>o</b>ry of a HUMAN ANDROID'
                        sectionId='story'
                        containerClass='mt-5 pointer-events-none mix-blend-difference
                        relative z-10'/>
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <video
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src='videos/patricio.mp4'
                                    loop
                                    muted
                                    autoPlay
                                    className=' object-contain '/>
                            </div>

                        </div>
                        <RoundedCorners/>
                    </div>
                </div>
                <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                    <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                            Each song on the album represents
                            a feeling or memory that Sena experiences.
                            As we witness Sena’s cyborg-human transformation
                            through the upload process we reflect on what it means to be human.


                        </p>
                        <Button
                            id="realm-button"
                            title="READ MORE"
                            containerClass="mt-5"
                            onClick={() => window.open('https://data-loading.co/pages/data-archives', '_blank')}
                        />
                    </div>
                </div>

            </div>
            <div id="album" className="my-20 flex justify-center bg-black">

                <div
                    className="relative w-full max-w-4xl rounded-lg bg-black py-10 px-5 text-blue-50 sm:overflow-hidden">
                    {/* Container for iframe */}
                    <div className="flex flex-col items-center sm:items-start w-full">
                        {/* Spotify iframe */}
                        <iframe
                            style={{borderRadius: "12px"}}
                            src="https://open.spotify.com/embed/album/2X6WyzpxY70eUn3lnewB7d?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story
