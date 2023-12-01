import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="_Navbar">
        <Link className="links" href="/">
          Home
        </Link>
        <Link className="links" href="/About">
          About
        </Link>
      </div>
      <div className="_Header">
        <h1>International Techtack-Technologies</h1>
      </div>
    </div>
  );
}
