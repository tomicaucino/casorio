import { motion } from "framer-motion"

export const DressCodeSection = () => {
    return (
        <section className="mx-auto bg-orange-200 p-12 flex justify-center" id="dress-code">
            <motion.div 
                className="grid text-center w-full md:max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <img 
                    src="/icono-dresscode.svg" 
                    alt="Dress code icon"
                    width="180"
                    height="180" // Add height for better CLS
                    className="mx-auto -mt-12"
                />
                <h2 className="text-2xl mb-8 text-center font-medium">DRESS CODE</h2>
                <p className="text-lg">Formal elegante.</p>
            </motion.div>
        </section>
    )
}