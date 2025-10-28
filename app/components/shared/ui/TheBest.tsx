import Image from "next/image";

interface theBestType {
  title: string;
  description: string;
  image: string;
}

const TheBest = () => {
  const theBest: theBestType[] = [
    {
      description: "Smart light bulb pack",
      title: "Latest and gratest",
      image: "/watches.png",
    },
    {
      description: "Smart light bulb pack",
      title: "Best selling",
      image: "/macbooks.png",
    },
    {
      description: "Smart light bulb pack",
      title: "Every Product",
      image: "/everyProduct.png",
    },
  ];
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl">See the best around here</h1>
        <h3>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</h3>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 mt-12 ">
        {theBest.map((item, index) => (
          <div
            key={index}
            className="w-96 flex items-center gap-4 justify-center flex-col bg-[#F8F9FA] border border-gray-200 cursor-pointer rounded-2xl p-4 hover:shadow-lg transition">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-sm">{item.description}</div>
              <div className="text-3xl">{item.title}</div>
              <button className="mt-2 mb-2 border border-black rounded-full cursor-pointer py-2 px-8 transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white">Explore</button>  
            </div>
            <Image
              src={item.image}
              alt={item.title}
              width={259}
              height={250}
              className="w-[259px] h-[250px] rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheBest;
