import Link from "next/link";
import Image from 'next/image';



export default function Product() {
  return (
    <div className="container center">
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div>
            <Image src="/product/rice/kumirice1.jpeg" alt="product" width={350} height={225}/>
          </div>
          <div className="center">
            <h3>Kumi rice</h3>
            <p>150 baht</p> 
          </div>
        </div>
        <div className="col">
        <div>
            <Image src="/product/spray/kumispray1.jpeg" alt="product" width={330} height={225}/>
          </div>
          <div className="center">
            <h3>Kumi rice</h3>
            <p>150 baht</p> 
          </div>
        </div>
        <div className="col">
        <div>
            <Image src="/kumiprofile.jpg" alt="product" width={100} height={225}/>
          </div>
          <div className="center">
            <h3>Kumi rice</h3>
            <p>150 baht</p> 
          </div>
        </div>
        </div>
    </div>
  );
}
