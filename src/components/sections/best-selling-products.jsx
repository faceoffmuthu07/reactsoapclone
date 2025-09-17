import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    category: "Acne-fighting soap",
    name: "Sandalwood natural soap",
    price: "169.00",
    originalPrice: "172.00",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65683fc1e20e7d0c2f69e047_product-01.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed8bc031e17c3a4e8c52e_product-hover1.jpg?",
    link: "/product/sandalwood-natural-soap",
  },
  {
    category: "Anti-aging soap",
    name: "Seed & oil natural soap",
    price: "67.00",
    originalPrice: "79.00",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65683fdf817f38cc35a2ab2e_product-03-4.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed10b2ec3cb67cdb2d955_product-hover3-5.jpg?",
    link: "/product/seed-oil-natural-soap",
  },
  {
    category: "Sensitive skin soap",
    name: "Milk handmade soap",
    price: "75.00",
    originalPrice: "80.00",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65683ffb81787b5d0f221287_product-05-6.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed12ddea64a094217d50d_product-hover5-7.jpg?",
    link: "/product/milk-handmade-soap",
  },
];

const ProductCard = ({ product }) => (
  <Link href={product.link} className="group block no-underline" style={{ textDecoration: 'none' }}>
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative w-full aspect-[4/3]">
        {/* Category badge inside image */}
        <div className="absolute top-4 left-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {product.category}
        </div>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={product.hoverImage}
          alt={`${product.name} hover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Hover CTA inside image */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 transform transition-all duration-300 group-hover:opacity-100">
          <div className="bg-white text-gray-800 text-sm font-medium rounded-full px-5 py-[9px] whitespace-nowrap shadow-md">
            Shop now
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <h3 className="font-display text-2xl font-medium text-primary mt-[10px]">
        {product.name}
      </h3>
      <div className="flex justify-center items-baseline gap-2 mt-[5px]">
        <p className="text-primary font-semibold text-lg">$&nbsp;{product.price}&nbsp;USD</p>
        <p className="text-muted-foreground line-through text-base">$&nbsp;{product.originalPrice}&nbsp;USD</p>
      </div>
    </div>
  </Link>
);

const BestSellingProducts = () => {
  return (
    <section className="py-[120px] bg-background">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-display text-[48px] leading-[1.2] text-primary font-normal">
            Best selling products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[50px]">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;