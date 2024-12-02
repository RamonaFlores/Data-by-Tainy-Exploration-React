import React from 'react'
import {TiLocationArrow} from "react-icons/ti";



const BentoTilt= ( { children, className = ''}) => {
    return (
        <div>{children}"</div>
    )
}


const BentoCard = ({src,title,description,isComingSoon,titleColor,descriptionColor}) => {
    return (
        <div className='relative size-full'>
            <video
                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
        <div className = {`relative z-10 flex size-full flex-col
        justify-between p-5 ${titleColor}`}>
            <div>
                <h1 className='bento-title special-font'> {title}</h1>
                {description && (
                    <p className={`mt-3 max-w-64 text-xs md:text-base ${descriptionColor}`}>
                        {description}
                    </p>
                )}
            </div>
        </div>

        </div>
    )

}


const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10 ">
                <div className="px-5 py-32  text-center">
                    <p className="font-circular-web text-lg text-blue-50">
                        The Human pulse of DATA
                    </p>

                    <p className="font-circular-web text-lg
                    text-blue-50 opacity-50 ">
                        Tainy  touched chords and wires I never thought music could
                        reach inside me. <b>DATA</b> is an album that takes you on a journey into your <b>deepest fears</b>,
                        complicated relationships, and the pivotal experiences that shape us . At its
                        heart lies <b>Sena</b>, a cyborg brought to life through music. A symbol of transformation,
                        vulnerability, and resilience. Her story unfolds track by track, capturing the tension between
                        humanity and technology, between who we are and who we could become.<br/>

                        In <b>'Volver'</b>, Rauw Alejandro sings, <i>'Quiero volver al lugar donde te vi sonreír'</i>, a
                        haunting reminder of longing and nostalgia that resonates deeply. Meanwhile,
                        on <b>'Pasiempre'</b>, Bad Bunny asserts, <i>'El pasado pesa, pero el futuro lo cargo yo'</i>,
                        encapsulating the defiant spirit of the album. Sena herself becomes most palpable
                        in <b>'Sacrificio'</b>, where the robotic hums and whispers of <i>'Respiro porque tú me diste
                        vida'</i> blur the line between machine and soul. Tracks like <b>'La Baby'</b> offer moments of
                        levity, but even here, Sena's presence lingers, a constant reminder of the album’s central
                        theme: the <b>search for meaning</b> in a digitized world.
                    </p>
                </div>

                <div className='border-hsla relative mb-7 h-96 w-full overflowh-hidden rounded-md md:[65vh]'>
                    <BentoCard
                        src='videos/feature-1.mp4'
                        title={<>Over <b>20 </b> featured Artists </>}
                        description='Packed with over 20 groundbreaking collaborations, DATA brings together the biggest names in music to push the boundaries of the so called genero urbano.
                        Each feature adds a unique layer to the album’s narrative, from nostalgic throwbacks to futuristic experiments,
                        creating a vibrant tapestry of sound that redefines the genre'
                        isComingSoon ={false}
                        titleColor='text-blue-50'
                        descriptionColor='text-white '
                    />

                </div>
                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <div className="bento-tilt_1 row-span-1  md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>T<b>a</b>iny </>}
                            description={'For over 20 years, Tainy, once the protégé of Luny Tunes, has been at the forefront of reggaeton’s evolution. Combining the genre’s roots with bold innovation, he has crafted iconic hits for global stars and continually pushed Latin music into uncharted territory, solidifying his legacy as a pioneer.'}
                            titleColor='text-blue-50'
                            descriptionColor='text-white '
                        />
                    </div>
                    <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard src='videos/feature-3.mp4'
                                   title={<><b>A</b>m<b>o</b>r </>}
                                   description="A heartfelt love letter to Latin music, with a special devotion to the rich sounds and legacy of Puerto Rican culture."
                                   titleColor='text-blue-50'
                                   descriptionColor='text-white '/>

                    </div>
                    <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
                        <BentoCard src='videos/feature-4.mp4'
                                   title={<><b>l</b>e<b>G</b>a<b>C</b>Y </>}
                                   description="Mamoru Oshii’s visionary art direction for DATA infuses the album with a cinematic depth that reflects Tainy’s love for anime and its storytelling power. Oshii, known for masterpieces like Ghost in the Shell, brings a futuristic yet humanistic aesthetic to the project, perfectly complementing the album’s themes of transformation and connection."
                                   titleColor='text-white'
                                   descriptionColor='text-white'/>

                    </div>
                    <div className="bento-tilt-2">
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 className='bento-title special-font max-w-64 text-black'>
                                p<b>a</b>rce escuch<b>e</b> D<b>a</b>t<b>a</b>!
                            </h1>
                            <TiLocationArrow className='m-5 scale-[5] self-end' />
                        </div>
                    </div>
                    <div className="bento-tilt-2">
                        <video
                            src='videos/feature-5.mp4'
                            loop
                            muted
                            autoPlay
                            className='size-full object-cover object-center'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features
