// app/register/page.tsx
import Link from 'next/link';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#3A7DFF]"><Link href={'/'}>Viralzy</Link></h1>
          <p className="mt-2 text-sm text-gray-600">
            Crie sua conta e automatize suas ideias 🚀
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 p-2"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nome de usuário (opcional)
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 p-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 p-2"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirmar senha
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="mt-1 block w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 p-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-[#3A7DFF] text-white font-bold hover:bg-blue-600 transition"
          >
            Cadastrar
          </button>

          <p className="mt-2 text-xs text-gray-500 text-center">
            Ao criar a conta, você concorda com nossos{' '}
            <Link href="/terms" className="underline text-[#8F5EFF]">
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link href="/privacy" className="underline text-[#8F5EFF]">
              Política de Privacidade
            </Link>.
          </p>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-[#3A7DFF] font-medium">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
