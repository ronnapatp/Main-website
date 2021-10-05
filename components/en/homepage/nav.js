import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
    <nav>
  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <Image src="/kumiprofile.jpg" alt="Kumi logo" width={100} height={100}/>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link href="/"><a className="nav-link px-2 link-secondary">Home</a></Link></li>
        <li><Link href="/products"><a className="nav-link px-2 link-dark">Products</a></Link></li>
        <li><Link href="/about"><a className="nav-link px-2 link-dark">About</a></Link></li>
        <li><Link href="/blog"><a className="nav-link px-2 link-dark">Blog</a></Link></li>
        <li><Link href="/contact"><a className="nav-link px-2 link-dark">Contact</a></Link></li>
      </ul>

      <div className="col-md-3 text-end">
      <Link href="/th/">
                <a target="_blank" className="text-decoration-none link-dark">
                    ภาษาไทย
                </a>
            </Link>
            {' / '}
            <Link href="/">
                <a target="_blank" className="text-decoration-none link-secondary">
                    English
                </a>
            </Link>
      </div>
    </header>
  </div>
    </nav>
  );
}
