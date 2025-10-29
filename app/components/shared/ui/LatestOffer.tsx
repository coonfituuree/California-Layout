import Image from "next/image";

const LatestOffer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 mb-12">
        <div className="text-5xl">Shop our latest offers and categories</div>
        <div className="">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-5 gap-2">
        <div className="col-span-3 row-span-3">
          <div className="flex flex-col w-[639px] h-[500px] shadow-2xl mb-4">
            <Image
              src="/MacbookPro16.png"
              alt="Laptop"
              width={1000}
              height={1000}
              className="w-[500px] h-[377px] ml-8"
            />
            <div className="mt-auto ml-130 text-lg">Laptops</div>
            <div className="font-normal ml-100 text-4xl">
              True Laptop Solution
            </div>
          </div>
        </div>
        <div className="col-start-4 row-span-5 w-[290px] relative right-27 h-[794px] shadow-2xl" >
          <div className="flex flex-col gap-2 relative top-30">
            <Image src="/2iphones.png" alt="" width={1000} height={1000} className="w-[405px] h-[367px]" />

            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-lg">Phones</div>
              <div className="text-4xl text-center">Your day to day life</div>
            </div>
          </div>
        </div>

        <div className="col-start-5 row-span-5 w-[290px] relative right-12 h-[794px] shadow-2xl">
          <div className="flex flex-col gap-2 relative top-30">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-lg">Tablets</div>
              <div className="text-4xl text-center">Empower your work</div>
            </div>
            <Image src="/tablets.png" alt="" width={1000} height={1000} className="w-[405px] h-[367px]" />

          </div>
        </div>

        <div className="col-span-3 row-span-2 row-start-4">
          <div className="flex flex-col w-[639px] h-[270px] shadow-2xl relative">
            <Image
              src="/applewatch.png"
              alt="Laptop"
              width={1000}
              height={1000}
              className="w-[381px] h-[270px] ml-8"
            />
            <div className="flex flex-col max-w-[174px] items-end justify-center h-full absolute ml-105">
              <div className="text-lg mr-3">Watch</div>
              <div className="ml-6 text-4xl">Not just stylisht</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestOffer;

