import { Form, Link } from 'react-router-dom';

export default function Login() {
  return (
    <Form className="bg-zinc-800 rounded-xl p-8 space-y-8 shadow-xl">
      <h1 className="text-4xl font-bold text-amber-400 text-center">Login</h1>
      <input
        type="text"
        name="usuario"
        id="id-usuario"
        placeholder="nome do usuário"
        aria-label="usuario"
        className="block bg-zinc-800 border-b-2 border-amber-400 pl-2 focus:outline-none text-white focus:border-violet-500 text-lg w-80"
      />
      <small className="text-red-400">Nome do usuário inválido</small>

      <input
        type="password"
        name="senha"
        id="id-senha"
        placeholder="senha"
        aria-label="senha"
        className="block bg-zinc-800 border-b-2 border-amber-400 pl-2 focus:outline-none text-white focus:border-violet-500 text-lg w-80"
      />
      <small className="text-red-400">Senha incorreta</small>

      <Link className="block underline text-white hover:text-amber-400">
        Esqueci a senha
      </Link>

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
    </Form>
  );
}
