import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { fetchTurnos } from "@/service/turnosService.tsx" 
import { Turno } from "@/service/turnosService.tsx"

// const initialTurnos = [
//   { id: 1, nombre: "Juan Pérez", servicio: "Corte de cabello", fecha: "2023-06-15", hora: "10:00", estado: "pendiente" },
//   { id: 2, nombre: "María García", servicio: "Tinte", fecha: "2023-06-15", hora: "11:30", estado: "pendiente" },
//   { id: 3, nombre: "Carlos López", servicio: "Peinado", fecha: "2023-06-16", hora: "09:00", estado: "pendiente" },
// ]

export function AdminListaTurnos() {
  const [turnos, setTurnos] = useState<Turno[]>([])

  useEffect(() => {
    const loadTurnos = async () => {
      try {
        const fetchedUsers = await fetchTurnos();
        setTurnos(fetchedUsers);

      } catch (error) {
        console.error("Error fetching users:", error);
      } 
    };

    loadTurnos();
  }, []);


  const cancelarTurno = (id: number) => {
    setTurnos(turnos.map(turno => 
      turno.id === id ? { ...turno, estado: "cancelado" } : turno
    ))
    setTurnos(turnos.filter(turno => turno.id !== id))
  }

  const marcarRealizado = (id: number) => {
    setTurnos(turnos.map(turno => 
      turno.id === id ? { ...turno, estado: "realizado" } : turno
    ))
  }

  return (
    <Table className="table-list">
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {turnos.map((turno) => (
          <TableRow key={turno.id}>
            <TableCell>{turno.name}</TableCell>
            <TableCell>{turno.dia}</TableCell>
            <TableCell>{turno.hora}</TableCell>
            <TableCell>{turno.estado}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button 
                  onClick={() => cancelarTurno(turno.id)} 
                  variant="destructive" 
                  disabled={turno.estado !== "Pendiente"}
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={() => marcarRealizado(turno.id)} 
                  variant="default"
                  disabled={turno.estado !== "Pendiente"}
                >
                  Realizado
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

