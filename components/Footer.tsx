import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200 dark:bg-black dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold text-primary-green">TeamSense</Link>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search the site..." 
              className="border border-gray-300 rounded px-3 py-2 w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Product</h4>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Features</Link>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Pricing</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Company</h4>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">About Us</Link>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Careers</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Resources</h4>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Blog</Link>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Support</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Legal</h4>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Privacy</Link>
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-green">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
