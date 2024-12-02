import React from 'react'
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
            </div>
        </section>
    )
}
export default Features
