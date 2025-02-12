import { motion, useScroll, useTransform } from "framer-motion"
import { Meteors } from "@/components/magicui/meteors"
import { useRef } from "react"

export const Portada = () => {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()
    
    // Create parallax effect
    const y = useTransform(
        scrollY,
        [0, 400],
        [0, 150], // This will move the image 150px while scrolling
    )

    return (
        <section 
            ref={containerRef} 
            className="relative w-screen h-[280px] sm:h-[400px] overflow-hidden"
        >
            {/* <motion.div 
                className="absolute inset-0 h-[600px]" // Extra height for parallax movement
                style={{ y }}
            >
                <img 
                    src="/Gonza1.jpg" 
                    alt="Agus and Gonza"
                    className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
            </motion.div> */}
            
            <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text contrast */}
            
            <motion.div className="absolute inset-0 flex items-center justify-center -mt-24">
                <div className="relative w-full flex flex-col items-center justify-center">
                    <Meteors number={30} />
                    
                    <motion.h1 
                        className="mt-24 text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center drop-shadow-lg font-cursive z-10" 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                            className="inline-block"
                        >
                            Agus
                        </motion.span> 
                        <span className="inline-block mx-2">&amp;</span>
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 2 }}
                            className="inline-block"
                        >
                            Gonza
                        </motion.span>
                    </motion.h1>
                </div>
            </motion.div>
        </section>
    )
}
