import Container from "./Container";
import Link from "next/link";
import { ShoppingCart, Search, ChevronDown } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <Container className="flex items-center justify-between py-6">
        {/* Left Side */}
        <Link href="/">
          <h1 className="text-2xl uppercase font-black">California</h1>
        </Link>

        {/* Center Side */}
        <div>
          <nav>
            <ul className="flex items-center gap-10 text-sm uppercase font-light">
              <li>
                <Link href="/catalog">All Products</Link>
              </li>
              <li>
                <Link href="/solutions" className="flex gap-0.5">
                  Solutions <ChevronDown size={20} strokeWidth={1} />{" "}
                </Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Search />
          <ShoppingCart />
        </div>
      </Container>
    </header>
  );
};

export default Header;
