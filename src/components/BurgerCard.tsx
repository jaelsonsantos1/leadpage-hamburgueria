import Image from "next/image";

export const BurgerCard = () => {
  return (
    <div className="bg-yellow-500 rounded-md shadow-md p-4 flex flex-col">
      <div>
        <h3 className="text-xl font-semibold text-orange-700 mb-2">
          Burger Duplo
        </h3>
      </div>
      <div className="flex space-x-4 w-full h-full">
        <div className="bg-gray-300 w-1/2 h-full rounded-md mb-4 flex items-center justify-center relative overflow-visible">
          <Image
            src="/assets/burger1.svg"
            alt="Hambúrguer 2"
            layout="fill"
            objectFit="contain"
            className="absolute scale-150"
          />
        </div>

        <div className="w-1/2 h-2/3 flex flex-col justify-between">
          <p className="text-gray-700 mb-4">
            Descrição rápida do seu burger duplo.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
            Pedir agora
          </button>
        </div>
      </div>
    </div>
  );
};
