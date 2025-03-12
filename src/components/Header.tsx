export const Header = () => {
  return (
    <header className="text-black">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="w-auto h-18 bg-orange-500 flex items-end justify-center px-10 pb-2">
          <div className="text-xl text-white font-bold text-center">
            Burgers.
          </div>
        </div>

        <nav className="space-x-4 hidden md:block">
          <a href="#" className="hover:text-gray-200 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors">
            Menu
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors">
            Sobre
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors">
            Contato
          </a>
        </nav>
        <button className="bg-orange-500 text-white font-medium font-sans px-4 py-2 rounded-md hover:bg-orange-400 transition-colors">
          Peça Agora
        </button>
      </div>
    </header>
  );
};
