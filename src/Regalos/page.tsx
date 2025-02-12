
// import { useState } from "react"
import { motion } from "framer-motion"
// import { Popup } from "@/components/popup"

export const RegalosSection = () => {
    // const [isPopupOpen, setIsPopupOpen] = useState(false)

    // const openPopup = () => setIsPopupOpen(true)
    // const closePopup = () => setIsPopupOpen(false)

    return (
        <section id="regalos" className="bg-gray-500 px-2 py-12 flex justify-center items-center">

        <motion.div 
          className="grid text-center text-white justify-items-center w-full mx-4 md:max-w-[500]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          >
          
            <img src="/icono-regalo.svg" width="180"  className="mx-auto -mt-12"/>
            <p>Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>
            {/* <button onClick={openPopup} className="bg-gray-100 rounded-[30] mt-6 text-gray-700 p-2 hover:opacity-50 text-xl w-full">VER DATOS BANCARIOS</button> */}
            {/* <Popup isOpen={isPopupOpen} onClose={closePopup}>
              <h2 className="text-2xl font-semibold">Popup Content</h2>
              <p>This is the content of your popup. You can put any React components or HTML here.</p>
            </Popup> */}
        </motion.div>

      </section>
        
    )
}