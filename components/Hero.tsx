import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col justify-center items-center text-center pt-24 relative overflow-hidden">
      {/* Fondo animado con logo y efecto de circuito eléctrico */}
      <div className="absolute z-10 w-[480px] h-[480px]">
        <motion.div 
          initial={{ opacity: 0.1, scale: 0.9 }} 
          animate={{ opacity: 0.25, scale: 1 }} 
          transition={{ duration: 2 }} 
          className="w-full h-full bg-[url('/logo.png')] bg-contain bg-no-repeat bg-center filter blur-sm brightness-125"
        />
        <div className="absolute inset-0 animate-circuit grid grid-cols-6 grid-rows-6">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-full h-full border border-cyan-500/5 animate-flicker"></div>
          ))}
        </div>
      </div>

      {/* Efectos de luz y energía dinámica */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/5 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl animate-ping delay-200"></div>
        <div className="absolute top-1/5 right-1/3 w-20 h-20 bg-indigo-400/10 rounded-full blur-2xl animate-ping delay-500"></div>
      </div>

      {/* Contenido principal */}
      <div className="z-20 flex flex-col items-center space-y-6 px-4">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold tracking-tight text-emerald-300 drop-shadow-xl animate-pulse"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Viridian Core
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-emerald-400 max-w-2xl animate-fadeIn"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Tecnología soberana para los desafíos modernos. Defensa, automatización e inteligencia artificial.
        </motion.p>

        <motion.p 
          className="text-md md:text-lg text-gray-300 max-w-xl animate-fadeIn"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8, duration: 1 }}
        >
          Nuestra misión es redefinir la ingeniería aplicada con soluciones inteligentes y sustentables. Somos arquitectura tecnológica con visión estratégica.
        </motion.p>

        <motion.a 
          href="#contact" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-4 bg-gradient-to-br from-cyan-800 to-blue-900 hover:from-cyan-700 hover:to-blue-800 text-white font-extrabold rounded-xl shadow-lg tracking-wide ring-2 ring-cyan-500 hover:ring-4 transition-all relative overflow-hidden"
        >
          <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">🚀 Hablemos ahora</span>
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className={`w-full h-full ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/10'}`}></div>
            ))}
          </div>
        </motion.a>
      </div>
    </section>
  );
}
