
import { motion } from 'framer-motion'

const services = [
  "Blockchain & Web3",
  "IA aplicada",
  "Ciberdefensa",
  "Automatización de procesos",
  "Robótica & Drones"
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((title, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-6 rounded-xl shadow-lg hover:rotate-1 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-emerald-600 mb-2">{title}</h3>
            <p className="text-sm text-gray-700">Soluciones específicas para sectores críticos que exigen seguridad, precisión e innovación constante.</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
