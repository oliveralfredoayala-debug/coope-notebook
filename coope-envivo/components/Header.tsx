import Link from "next/link";

export function Header() {
  return (
    <header className="shell topbar">
      <Link className="brand" href="/">
        Coope<strong>EnVivo</strong>
      </Link>
      <div className="spacer" />
      <Link className="btn" href="/sala">
        Entrar a una sala
      </Link>
      <Link className="btn primary" href="/facilitador">
        Facilitar
      </Link>
    </header>
  );
}
