import Link from "next/link";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="shell">
        <section className="hero">
          <span className="pill">Talleres participativos</span>
          <h1>La sala en vivo de CoopeNotebook.</h1>
          <p>
            Abrí encuestas, recibí respuestas desde celulares y proyectá los
            resultados mientras facilitás el taller.
          </p>
          <div className="row">
            <Link className="btn primary" href="/facilitador">
              Crear una sala
            </Link>
            <Link className="btn" href="/sala">
              Entrar con código
            </Link>
          </div>
        </section>

        <section className="grid three section">
          <article className="card">
            <h2>Facilitador</h2>
            <p className="muted">
              Crea salas, prepara actividades y controla cuándo aparecen los
              resultados.
            </p>
          </article>
          <article className="card">
            <h2>Participantes</h2>
            <p className="muted">
              Entran con código y responden desde el celular sin crear una
              cuenta.
            </p>
          </article>
          <article className="card">
            <h2>Proyección</h2>
            <p className="muted">
              Muestra preguntas y resultados en una pantalla separada.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
