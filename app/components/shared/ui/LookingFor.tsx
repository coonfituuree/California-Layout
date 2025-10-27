import Form from "next/form";
import { Search } from "lucide-react";

const LookingFor = () => {
  const searchSuggestions: string[] = [
    "Iphone 17 Pro Max",
    "Macbook M5",
    "Charger",
    "Gift",
    "Ipad Pro",
    "AirPods Max",

  ];
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl">
      <div className="text-4xl">Looking for anything else?</div>
      <div>
        <Form
          action="/submit"
          className="w-[650px] h-[60px] border border-black rounded-full flex items-center gap-4 px-8 py-2">
          <Search />
          <input
            name="query"
            type="text"
            placeholder="Write here"
            className="outline-none w-[650px]"
          />
        </Form>

        <div className="max-w-[660px] mt-4 flex flex-wrap justify-center gap-3">
          {searchSuggestions.map((item, index) => (
            <button
              key={index}
              className="px-5 py-2 border border-[#c5c5c5] rounded-full text-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:border-black">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
