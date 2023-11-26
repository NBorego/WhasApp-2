import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <main className="grid place-items-center text-white space-y-4">
      <img
        src="../public/assets/whatsapp-2.png"
        alt="Logo do whatsapp 2"
        width={80}
      />
      <h1 className="text-9xl">404</h1>
      <h2 className="text-2xl">Pagina não encontrada</h2>

      <Link
        to={'/'}
        className="border-2 border-amber-400 text-amber-400 block p-4 rounded-2xl uppercase font-bold tracking-wider hover:bg-amber-400 hover:text-zinc-800 transition-colors"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
