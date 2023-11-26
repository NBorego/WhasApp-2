import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <main className="grid place-items-center text-white gap-8">
      {/* <img src="../../public/assets/whatsapp-2.png" alt="Logo do Whatsapp 2" /> */}
      <h1 className="sm:text-6xl text-4xl font-normal flex flex-col gap-8 text-center">
        Bem vindo ao{' '}
        <strong className="sm:text-8xl text-6xl text-amber-400 ">
          Whatsapp 2
        </strong>
      </h1>

      <div className="flex gap-12">
        <Link
          to="/login"
          className="flex justify-center text-zinc-800 items-center font-bold bg-amber-400 h-12 w-32 rounded-lg hover:bg-amber-200 transition-colors"
        >
          Entrar
        </Link>
        <Link
          to="/create-account"
          className="flex justify-center items-center font-bold text-amber-400 border-2 border-amber-400 h-12 w-32 rounded-lg hover:bg-amber-400 hover:text-zinc-800 transition-colors"
        >
          Criar Conta
        </Link>
      </div>
    </main>
  );
}
