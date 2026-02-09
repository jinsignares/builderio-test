import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-black">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="TeamSense Homepage">
          {/* Placeholder for Logo - In a real scenario, use the SVG from assets */}
          <div className="text-2xl font-bold text-primary-green">TeamSense</div>
        </Link>

        {/* Navigation - Simplified for Demo */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-primary-green font-medium">Product</Link>
          <Link href="/" className="text-gray-700 hover:text-primary-green font-medium">Solutions</Link>
          <Link href="/" className="text-gray-700 hover:text-primary-green font-medium">Resources</Link>
          <Link href="/" className="text-gray-700 hover:text-primary-green font-medium">Company</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://app.teamsense.com/sign-in" 
            className="hidden md:block text-gray-700 hover:text-primary-green font-medium"
          >
            Sign In
          </Link>
          <Link 
            href="/demo" 
            className="bg-primary-green text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
