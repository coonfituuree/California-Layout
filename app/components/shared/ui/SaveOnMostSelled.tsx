import Image from "next/image";

interface bestSellerProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const SaveOnMostSelled = () => {
  const bestSeller: bestSellerProps[] = [
    {
      image: "/MacBookPro13.png",
      name: "Macbook Pro 13",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      price: "1,200.00",
    },
    {
      image: "/SmartGalaxyWatch.png",
      name: "Smart Galaxy Watch 3",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      price: "199.0",
    },
    {
      image: "/MacBookAirM1.png",
      name: "MacBook Air M1",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      price: "1,090.00",
    },
    {
      image: "/Ipad.png",
      name: "Ipad",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      price: "599.99",
    },
  ];
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl">Save on our most selled items.</h1>

        <h3>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="w-72 flex flex-col items-center border border-gray-200 cursor-pointer rounded-2xl p-4 hover:shadow-lg transition">
            <Image
              src={item.image}
              alt={item.name}
              width={1000}
              height={1000}
              className="rounded-xl object-cover"
            />
            <h2 className="mt-3 text-xl font-medium">{item.name}</h2>
            <p className="text-gray-500 text-sm text-center mt-1">
              {item.description}
            </p>
            <p className="mt-2 text-lg font-light">$ {item.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveOnMostSelled;
