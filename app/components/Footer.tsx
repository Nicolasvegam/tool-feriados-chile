export default function Footer() {
  return (
    <footer className="relative mt-12">
      <div className="border-t border-gray-200 w-full" />
      <div className="bg-white/80 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            Hecho con ❤️ por{' '}
            <a
              href="https://software.nicovega.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Di Monk
            </a>{' '}
            © 2024
          </p>
        </div>
      </div>
    </footer>
  );
} 