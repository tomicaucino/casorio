import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CancionesSection } from './Canciones/page.tsx'
import { CeremoniayFiesta } from './Ceremonia/page.tsx'
import { ConfirmacionSection } from './Confirmacion/page.tsx'
import { CountdownSection } from './CountdownSection/page.tsx'
import { DressCodeSection } from './DressCode/page.tsx'
import { FotosSection } from './Fotos/page.tsx'
import { InstagramSection } from './Instagram/page.tsx'
import './index.css'
import { Portada } from './Portada/page.tsx'
import { Separator } from './components/ui/separator.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="">
      <main >
        <Portada />
        <Separator className='my-4'/>
        <CountdownSection />
        <Separator className='my-4'/>
        <CeremoniayFiesta />
        <Separator className='my-4'/>
        <ConfirmacionSection />
        <Separator className='my-4'/>
        <FotosSection />
        <Separator className='my-4'/>
        <InstagramSection />
        <Separator className='my-4'/>
        <DressCodeSection />
        <Separator className='my-4'/>
        <CancionesSection />
      </main>
    </div>
  </StrictMode>
)