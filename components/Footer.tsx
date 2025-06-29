import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
          <Image src="/logo.png" alt="Viridian Core Logo" width={40} height={40} />
        </motion.div>
        <div className="text-center text-sm opacity-70">
          © {new Date().getFullYear()} Viridian Core · Soberanía Tecnológica · Todos los derechos reservados
        </div>
        <div className="text-sm">
          <a href="#top" className="hover:text-emerald-400 transition">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  )
}
