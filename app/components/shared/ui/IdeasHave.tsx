import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const IdeasHave = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-5xl ">Ideas have a place here</div>
        <h3 className="">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </h3>
      </div>

      <div className="flex mt-10 ">
        <Image
          src="/IdeasHave.png"
          alt="IdeasHave"
          width={1000}
          height={1000}
          className="w-[620px] h-[420px]"
        />
        <div className="flex flex-col gap-6 font-light text-2xl p-6">
          <div className="">
            We Make It Easy To Find The Great Design Talent, Easier...
          </div>
          <div className="">
            Road Design Handbook For The International Road...
          </div>
          <div className="">The Best Kept Secrets About Creative People </div>
          <div className="">
            We Make It Easy To Find The Great Design Talent, Easier...
          </div>
        </div>
      </div>

      <div className="flex mt-10 text-2xl justify-center items-center font-light">
        See all
        <ArrowUpRight size={24} />
      </div>
    </div>
  );
};

export default IdeasHave;
