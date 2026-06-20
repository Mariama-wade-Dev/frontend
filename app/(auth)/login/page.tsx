import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#333539]">
      
      {/* Background exact */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-auth.jpg" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Container global plus étroit (340px au lieu de 380px) */}
      <div className="relative z-10 w-full max-w-[310px] flex flex-col items-center px-4">
        
        {/* LOGO PNG */}
        <div className="flex items-center gap-2 mb-6">
          <Image 
            src="/images/logo.png" 
            alt="Logo Red Product" 
            width={24} 
            height={24} 
            className="object-contain"
          />
          <span className="text-white font-bold text-lg tracking-wide">RED PRODUCT</span>
        </div>

        {/* CARTE BLANCHE PLUS PETITE */}
        <div className="w-full bg-white p-6 shadow-2xl rounded-sm">
          <p className="text-[#333] text-xs mb-8 font-normal">Connectez-vous en tant que Admin</p>

          <form className="space-y-6">
            <div className="relative border-b border-gray-200">
              <input 
                type="email" 
                placeholder="E-mail"
                className="w-full pb-1.5 outline-none text-xs text-gray-700 bg-transparent placeholder-gray-400 font-light"
                required
              />
            </div>

            <div className="relative border-b border-gray-200">
              <input 
                type="password" 
                placeholder="Mot de passe"
                className="w-full pb-1.5 outline-none text-xs text-gray-700 bg-transparent placeholder-gray-400 font-light"
                required
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="keep-connected" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#45484d] cursor-pointer" />
              <label htmlFor="keep-connected" className="text-gray-500 text-[11px] cursor-pointer font-normal">
                Gardez-moi connecté
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#45484d] text-white py-2 rounded-sm text-xs font-medium hover:bg-[#333] transition-all mt-2"
            >
              Se connecter
            </button>
          </form>
        </div>

        {/* LIENS EXTÉRIEURS PLUS SERRÉS */}
        <div className="mt-6 text-center flex flex-col gap-3">
          <Link href="/forgot-password" intrinsic-attributes="true" className="text-[#FFD700] hover:underline text-xs font-medium">
            Mot de passe oublié ?
          </Link>
          <p className="text-white text-xs font-normal">
            Vous n'avez pas de compte ? <Link href="/register" className="text-[#FFD700] hover:underline font-bold ml-1">S'inscrire</Link>
          </p>
        </div>
      </div>
    </main>
  );
}