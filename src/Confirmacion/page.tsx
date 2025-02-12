
export const ConfirmacionSection = () => {

    return (
        <section id="asistencia" className="flex justify-center px-2 py-12 bg-yellow-50">


          <div className="grid text-center justify-items-center w-full mx-4 md:max-w-lg">

                <div className="grid text-center pb-12 justify-items-center">
                  <h2 className="font-medium text-3xl mb-6">CONFIRMACIÓN DE ASISTENCIA</h2>
                  <p>Esperamos que seas parte de esta gran celebración.</p>
                  <p>¡Confirmanos tu asistencia antes del <strong>19 de septiembre de 2024!</strong></p>
                  <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-2xl w-full">CONFIRMAR ASISTENCIA</button>
                </div>

                <div className="grid text-center pb-12 justify-items-center w-[100%]">
                  <img src="./icono-calendario.svg"  width="180" className="mx-auto -mt-12 img-fluid"/>
                  <p className="-mt-6">¡Agendá la fecha en tu calendario!</p>
                  <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-2xl w-full">AGENDAR FECHA</button>
                </div>
            
          </div>
      </section>
        
    )
}