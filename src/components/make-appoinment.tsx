
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ReservarTurno() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input id="nombre" placeholder="Ingrese su nombre" />
      </div>
      <div className="space-y-2">
        {/* <Label htmlFor="servicio">Servicio</Label>
        <Select>
          <SelectTrigger id="servicio">
            <SelectValue placeholder="Seleccione un servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corte">Corte de cabello</SelectItem>
            <SelectItem value="tinte">Tinte</SelectItem>
            <SelectItem value="peinado">Peinado</SelectItem>
          </SelectContent>
        </Select> */}
      </div>
      <div className="space-y-2">
        <Label htmlFor="hora">Hora</Label>
        <Input id="hora" type="time" />
      </div>
      <Button type="submit">Reservar Turno</Button>
    </form>
  )
}

