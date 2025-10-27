import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] py-12 px-8 lg:px-48">
      <Container className="py-4 text-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h1 className="text-2xl font-black">CALIFORNIA</h1>
            <p className="mt-1 text-sm text-gray-400">
              Sign up for texts to be notified about our best offers on the
              perfect gifts.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold mb-3">All Products</h2>
            <ul className="space-y-2 text-sm text-[#000000]">
              <li>Phones</li>
              <li>Watches</li>
              <li>Tablet</li>
              <li>Laptops</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-[#000000]">
              <li>About</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2 text-sm font-thin text-[#000000]">
              <li>Instagram</li>
              <li>FaceBook</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="mt-12 text-center text-xs text-gray-500">
          © California. All rights reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
