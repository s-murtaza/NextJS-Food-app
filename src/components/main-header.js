'use client'

import Image from "next/image";
import ImageSlideshow from "./main-slideshow";
import useCartStore from "@/store/cartStore";
import useUserProgressStore from "@/store/userProgressStore";
import CategoryFilters from "./category-filter";

export default function Header() {
  const {showCart, progress} = useUserProgressStore()
  const{items} = useCartStore();

  return (
    <>
      <header id="main-header">
        <div id="title">
          <Image
            width={300}
            height={300}
            priority
            src="/icon.png"
            alt="logoImg"
          />
          <h1 className="text-lg md:text-3xl">NEXTJS Food App</h1>
        </div>
        <nav>
          <button className="text-button" onClick={()=>{showCart()}}>Cart ({items.length})</button>
        </nav>
      </header>
      <ImageSlideshow />
      <CategoryFilters/>
    </>
  );
}
