import Link from "next/link";

export default function Login() {

    return (
        <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 bg-gray-50 rounded-2xl shadow-lg">
        <h1 className="text-3xl text-center font-bold text-[#3A7DFF]"><Link href={'/'}>Viralzy</Link></h1>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Entre na sua conta</h2>
          <p className="text-center text-gray-500 mb-6">Acesse sua automação em poucos cliques.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Senha</label>
              <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full py-3 bg-[#3A7DFF] text-white font-bold rounded-lg hover:bg-blue-600 transition">Entrar</button>
          </form>
          
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">Esqueci minha senha</a>
          </div>
  
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">ou</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          <div className="space-y-3">
            <button className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              Entrar com <img src="/google-icon.svg" alt="Google" className="h-5" />
            </button>
            <button className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              Entrar com <img src="/instagram-icon.svg" alt="Instagram" className="h-5" />
            </button>
          </div>
        </div>
      </main>
    );
}