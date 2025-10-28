import Image from "next/image";
import Container from "./Container";

const Newsletter = () => {
  return (
    <Container className="flex flex-col gap-6  mt-12 items-center justify-center w-[935] h-[450px] bg-[#F8F9FA] rounded-2xl">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-medium">Never miss a thing</h1>
        <h3>
          Sign up for texts to be notified about our best offers on the perfect
          gifts.
        </h3>
      </div>
      <Image
        src="/newsletter.png"
        alt="newsletter"
        width={300}
        height={300}
        className="w-[233px] h-[200px]"
      />

      <div className="relative inline-flex items-center">
        <input
          type="email"
          placeholder="Your email"
          className="w-[400px] h-[50px] pl-8 pr-[130px] rounded-full border border-black outline-none focus:border-gray-600 transition-colors"
        />
        <button className="absolute right-0 w-[115px] h-[50px] rounded-r-full text-white bg-black cursor-pointer hover:bg-gray-800 transition-colors font-medium">
          Send
        </button>
      </div>
    </Container>
  );
};

export default Newsletter;
