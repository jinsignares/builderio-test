import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full font-urbanist">
      {/* Top Banner */}
      <div className="bg-brand-gold-10 text-white py-3 text-center text-sm font-medium px-4">
        Instantly deliver SMS updates to your frontline in 30+ languages with <strong>Communicate 2.0</strong>
      </div>
      
      <header className="w-full bg-brand-teal-10 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="TeamSense Homepage">
            <div className="relative h-8 w-40">
                <Image 
                    src="/assets/images/TeamSense-Logo.svg" 
                    alt="TeamSense" 
                    fill
                    className="object-contain brightness-0 invert"
                />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-brand-gold-50 font-medium transition-colors">Product</Link>
            <Link href="/" className="text-white hover:text-brand-gold-50 font-medium transition-colors">Why TeamSense</Link>
            <Link href="/" className="text-white hover:text-brand-gold-50 font-medium transition-colors">Resources</Link>
            <Link href="/" className="text-white hover:text-brand-gold-50 font-medium transition-colors">Pricing</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://app.teamsense.com/sign-in" 
              className="hidden md:block text-white hover:text-brand-gold-50 font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/demo" 
              className="bg-brand-gold-50 text-brand-teal-20 px-6 py-2 rounded-md font-bold hover:bg-brand-gold-20 hover:text-white transition shadow-md"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
