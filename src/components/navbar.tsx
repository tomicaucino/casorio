import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            Peluquería El Dorado
          </Link>
          <div className="flex space-x-4">
            <Link to="/">
              <Button className="nav-bar-btn">Inicio</Button>
            </Link>
            <Link to="/admin">
              <Button className="nav-bar-btn">Admin</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

