"use client";

import Image from "next/image";

export default function FirstSection() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Shop the Latest Products</h1>
        <p>Find amazing deals and top-quality products for you!</p>
        <button className="banner-btn">Shop Now</button>
      </div>
      <Image
        src="/Banner.jpg" // your image in public folder
        alt="E-commerce Banner"
        fill
        style={{ objectFit: "cover" }}
        className="banner-image"
      />
    </section>
  );
}
