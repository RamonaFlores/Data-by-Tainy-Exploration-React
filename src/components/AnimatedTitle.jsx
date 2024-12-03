import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
// Dynamic component for rendering an animated title
const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef=useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            });
            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.02,
            })
        }, containerRef)
        return  () => ctx.revert(); //cleaning up the use effect
    },[]);
    // Check if the `title` prop is a string. If not, log an error and return null to avoid rendering.
    if (typeof title !== 'string') {
        console.error('Expected `title` to be a string but got:', typeof title);
        return null; // Stops rendering when `title` is not valid.
    }

    return (
        // Main container with dynamic classes passed via `containerClass`.
        <div ref={containerRef}
            className={`animated-title ${containerClass}`}>
            {/* Split the title into lines based on the '<br/>' separator. */}
            {title.split('<br/>').map((line, index) => (
                // Render a container for each line. Use `key` for React to identify elements uniquely.
                <div
                    key={index}
                    className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
                >
                    {/* Split the current line into words using space as the delimiter. */}
                    {line.split(' ').map((word, i) => (
                        // Render each word inside a `span` with a class for animation.
                        <span
                            key={i} // Each word gets a unique `key` to help React optimize rendering.
                            className="animated-word" // This class likely adds styles or animations.
                            dangerouslySetInnerHTML={{ __html: word }} // Renders the HTML inside `word` safely.
                        ></span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle; // Export the component so it can be used in other files.

