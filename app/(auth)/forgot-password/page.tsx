import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#333539] p-4">
      
      {/* L'IMAGE DE FOND FIXE ICI */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/images/bg-auth.jpg" 
          alt="background" 
          fill 
          className="object-cover opacity-60" 
          priority 
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-[310px] flex flex-col items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-8">
          <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
          <span className="text-white font-bold text-xl tracking-tight uppercase">RED PRODUCT</span>
        </div>

        {/* CARTE BLANCHE */}
        <div className="w-full bg-white p-10 shadow-3xl rounded-sm">
          <h2 className="text-[#333] text-[16px] font-semibold mb-4">Mot de passe oublié?</h2>
          
          <p className="text-gray-600 text-[13px] leading-relaxed mb-8">
            Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
          </p>

          <form className="flex flex-col gap-10">
            <div className="border-b border-gray-300">
              <input 
                type="email" 
                placeholder="Votre e-mail" 
                className="w-full pb-1 outline-none text-[13px] text-gray-800 placeholder-gray-400"
                required
              />
            </div>

            <button className="w-full bg-[#45484d] text-white py-3 rounded-sm text-[15px] font-bold hover:bg-black transition-all">
              Envoyer
            </button>
          </form>
        </div>

        {/* LIEN RETOUR */}
        <div className="mt-8 text-center">
          <p className="text-white text-[13px]">
            Revenir à la <Link href="/login" className="text-[#FFD700] font-bold ml-1 hover:underline">connexion</Link>
          </p>
        </div>
      </div>
    </main>
  );
}