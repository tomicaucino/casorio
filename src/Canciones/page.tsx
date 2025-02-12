import { motion } from "framer-motion"

export const CancionesSection = () => {

    return (
        <section className="mx-auto bg-white px-2 py-12 flex justify-center">

      <motion.div 
          className="grid text-center w-full mx-4 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
            <img 
                    src="/icono-canciones.svg" 
                    width="180" 
                    className="mx-auto -mt-12"
            />
            <h2 className="text-2xl mb-8 text-center tracking-wider">QUE CANCIONES NO PUEDEN FALTAR?</h2>
            <p className="font-light">¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</p>
            <a className="w-full" href="">
              <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-xl w-full">SUGERIR CANCION</button>
            </a>
        </motion.div>

      </section>
        
    )
}