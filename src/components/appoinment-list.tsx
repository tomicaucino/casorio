import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const turnos = [
    { id: 1, nombre: "Juan Pérez", servicio: "Corte de cabello", fecha: "2023-06-15", hora: "10:00" },
    { id: 2, nombre: "María García", servicio: "Tinte", fecha: "2023-06-15", hora: "11:30" },
    { id: 3, nombre: "Carlos López", servicio: "Peinado", fecha: "2023-06-16", hora: "09:00" },
  ]
  
  export function ListaTurnos() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Servicio</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Hora</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {turnos.map((turno) => (
            <TableRow key={turno.id}>
              <TableCell>{turno.nombre}</TableCell>
              <TableCell>{turno.servicio}</TableCell>
              <TableCell>{turno.fecha}</TableCell>
              <TableCell>{turno.hora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  