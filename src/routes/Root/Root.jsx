import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <main className="flex flex-col gap-8">
      <img
        src="../../public/assets/whatsapp-2.png"
        alt="Logo do Whatsapp 2"
        width={100}
        height={100}
        className="m-auto"
      />

      <Outlet />

      <small className="block text-lg text-center text-white ">
        Feito por{' '}
        <a
          href="https://github.com/NBorego"
          rel="noreferrer"
          target="_blank"
          className="underline text-violet-500 hover:text-amber-400 transition-colors"
        >
          Nicolas Borego
        </a>
      </small>
    </main>
  );
}
