
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-emerald-950 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">¿Listo para construir el futuro?</h2>
      <p className="mb-8">Escribinos y conversemos sobre lo que podemos desarrollar juntos.</p>
      <form className="max-w-xl mx-auto grid grid-cols-1 gap-4 text-black" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nombre" className="p-3 rounded-md" required />
        <input type="email" placeholder="Email" className="p-3 rounded-md" required />
        <textarea placeholder="Tu mensaje..." rows={4} className="p-3 rounded-md" required />
        <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 font-semibold rounded-md">Enviar</button>
      </form>
    </section>
  )
}
