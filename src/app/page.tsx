import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamburgueria Landing</title>
        <meta name="description" content="Landing page para hamburgueria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER / NAVBAR */}
      {/* bg-orange-500 */}
      <header className="text-black">
        <div className="container mx-auto flex items-center justify-between px-4">
            <div className="w-auto h-18 bg-orange-500 flex items-end justify-center px-10 pb-2">
              <div className="text-xl text-white font-bold text-center">
                {/* Logo ou Nome da Marca */}
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
          <button className="bg-white text-orange-500 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            Peça Agora
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-orange-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">
              Experimente nosso novo
              <br /> <span className="text-orange-700">Cheesy Bluster</span>
            </h1>
            <p className="text-gray-700 mb-6">
              A combinação perfeita de carne suculenta e queijo derretido. Uma
              explosão de sabores em cada mordida!
            </p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">
              Faça seu pedido
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Comente onde inserir a imagem do burger principal */}
            {/* <img src="/caminho/para/sua/imagem.jpg" alt="Cheesy Bluster" /> */}
            <div className="bg-gray-300 w-80 h-80 flex items-center justify-center rounded-md">
              {/* Espaço reservado para a imagem do burger */}
              <span className="text-gray-500">[Imagem do burger]</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MENU SECTION */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-600">
            Explore Nosso Menu
          </h2>
          <p className="text-gray-600 mt-2">
            Hambúrgueres artesanais, acompanhamentos e muito mais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-md p-4">
            {/* <img src="/caminho/para/sua/imagem1.jpg" alt="Hambúrguer 1" /> */}
            <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem 1]</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Burger Especial
            </h3>
            <p className="text-gray-700 mb-4">
              Descrição rápida do seu burger especial.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Pedir agora
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-md p-4">
            {/* <img src="/caminho/para/sua/imagem2.jpg" alt="Hambúrguer 2" /> */}
            <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem 2]</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Burger Duplo
            </h3>
            <p className="text-gray-700 mb-4">
              Descrição rápida do seu burger duplo.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Pedir agora
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-md shadow-md p-4">
            {/* <img src="/caminho/para/sua/imagem3.jpg" alt="Hambúrguer 3" /> */}
            <div className="bg-gray-300 w-full h-40 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem 3]</span>
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Veggie Burger
            </h3>
            <p className="text-gray-700 mb-4">
              Descrição rápida do seu burger veggie.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Pedir agora
            </button>
          </div>
        </div>
      </section>

      {/* SPECIAL COMBO PACK SECTION */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Pacote Combo Especial
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Aproveite nosso combo promocional com desconto imperdível!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* <img src="/caminho/para/sua/imagem-combo.jpg" alt="Combo Especial" /> */}
            <div className="bg-gray-300 w-60 h-60 flex items-center justify-center rounded-md">
              <span className="text-gray-500">[Imagem do Combo]</span>
            </div>
            <div className="text-left md:w-1/2">
              <h3 className="text-2xl font-semibold text-orange-700 mb-2">
                Combo Bluster + Fritas + Bebida
              </h3>
              <p className="text-gray-700 mb-4">
                Descrição breve do combo especial, destacando seus principais
                atrativos e preço promocional.
              </p>
              <p className="text-2xl font-bold text-orange-600 mb-4">
                R$ 39,90
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SHOULD YOU TRY SECTION */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-600">
            Por que você deve experimentar?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {/* Ícone ou imagem ilustrativa */}
              <span className="text-xl">🍔</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-700">
              Ingredientes Frescos
            </h3>
            <p className="text-gray-700">
              Garantimos a qualidade e sabor em cada ingrediente usado.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {/* Ícone ou imagem ilustrativa */}
              <span className="text-xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-700">
              Receitas Premiadas
            </h3>
            <p className="text-gray-700">
              Prêmios e reconhecimentos por nossos deliciosos hambúrgueres.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {/* Ícone ou imagem ilustrativa */}
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-700">
              Entrega Rápida
            </h3>
            <p className="text-gray-700">
              Receba seu pedido quentinho em tempo recorde.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS SECTION */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-10">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-md shadow-md">
              <p className="text-gray-700 mb-4">
                “O melhor hambúrguer que já comi! Sabor inigualável.”
              </p>
              <h4 className="text-orange-600 font-semibold">
                - Cliente Satisfeito
              </h4>
            </div>
            <div className="bg-orange-50 p-6 rounded-md shadow-md">
              <p className="text-gray-700 mb-4">
                “Entrega super rápida e o lanche chegou quentinho. Recomendo!”
              </p>
              <h4 className="text-orange-600 font-semibold">- Cliente Fiel</h4>
            </div>
            <div className="bg-orange-50 p-6 rounded-md shadow-md">
              <p className="text-gray-700 mb-4">
                “Cardápio variado e preços justos. Me conquistou!”
              </p>
              <h4 className="text-orange-600 font-semibold">- Novo Cliente</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-orange-600 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="mb-2">
            © 2023 Hamburgueria. Todos os direitos reservados.
          </p>
          <p className="text-sm">Feito com Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
