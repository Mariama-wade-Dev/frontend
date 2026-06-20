import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#333539] p-4">
      
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg-auth.jpg" 
          alt="background" 
          fill 
          className="object-cover opacity-60" 
          priority 
        />
      </div>

      <div className="relative z-10 w-full max-w-[310px] flex flex-col items-center">
        
      
        <div className="flex items-center gap-2 mb-8">
          <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
          <span className="text-white font-bold text-xl tracking-tight">RED PRODUCT</span>
        </div>

       
        <div className="w-full bg-white p-10 shadow-3xl rounded-sm">
          
          <h2 className="text-[#333] text-[13px] font-semibold mb-10">Inscrivez-vous en tant que Admin</h2>

          <form className="flex flex-col gap-8">
           
            <div className="border-b border-gray-300">
              <input 
                type="text" 
                placeholder="Nom" 
                className="w-full pb-1 outline-none text-[13px] text-gray-800 placeholder-gray-400"
              />
            </div>

           
            <div className="border-b border-gray-300">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full pb-1 outline-none text-[13px] text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="border-b border-gray-300">
              <input 
                type="password" 
                placeholder="Mot de passe" 
                className="w-full pb-1 outline-none text-[13px] text-gray-800 placeholder-gray-400"
              />
            </div>

          
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="terms" className="w-4 h-4 border-gray-300 accent-[#45484d]" />
              <label htmlFor="terms" className="text-gray-600 text-[12px] cursor-pointer">
                Accepter les termes et la politique
              </label>
            </div>

           
            <button className="w-full bg-[#45484d] text-white py-3 rounded-sm text-[14px] font-medium mt-3 hover:bg-black transition-colors">
              S'inscrire
            </button>
          </form>
        </div>

        {/* LIEN EN BAS - TEXTE EXACT : Vous avez déjà un compte ? Se connecter */}
        <div className="mt-8 text-center">
          <p className="text-white text-[13px]">
            Vous avez déjà un compte ? <Link href="/login" className="text-[#FFD700] font-bold ml-1 hover:underline">Se connecter</Link>
          </p>
        </div>
      </div>
    </main>
  );
}