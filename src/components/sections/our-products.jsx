import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    category: "Sensitive skin soap",
    name: "Neem oil natural soap",
    price: "$ 125.00 USD",
    mainImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65683fcb817f38cc35a29e9d_product-02-8.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed0fd00fc795f372f924e_product-hover2-9.jpg?",
    href: "/product/neem-oil-natural-soap",
  },
  {
    id: 2,
    category: "Acne-fighting soap",
    name: "Soapure coffee soap",
    price: "$ 60.00 USD",
    mainImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65683fefcd5e46d3067ce0ad_product-04-10.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed11ec93fb19f594cb47e_product-hover4.jpg?",
    href: "/product/soapure-coffee-soap",
  },
  {
    id: 3,
    category: "Anti-aging soap",
    name: "Multani mitti soap",
    price: "$ 95.00 USD",
    mainImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65684007c86aad532f95d9e2_product-06-12.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed13fc8daab5cf081d093_product-hover6.jpg?",
    href: "/product/multani-mitti-soap",
  },
  {
    id: 4,
    category: "Sensitive skin soap",
    name: "Palm oil-free soap",
    price: "$ 150.00 USD",
    mainImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/6568402993020f9b679c74e2_product-08.jpg?",
    hoverImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656ed16234445bcd17841e9d_product-hover8-15.jpg?",
    href: "/product/palm-oil-free-soap",
  },
];

const ProductCard = ({ product }) => (
  <Link href={product.href} className="group block">
    {/* Enlarge card and image: switch to 4/3 aspect and use fill images */}
    <div className="relative overflow-hidden rounded-xl bg-card aspect-[4/3] shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="absolute top-4 left-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
        {product.category}
      </div>
      <Image
        src={product.mainImage}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      <Image
        src={product.hoverImage}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="absolute inset-0 object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground whitespace-nowrap">
          Shop now
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <h3 className="font-display text-2xl font-medium text-primary">{product.name}</h3>
      <p className="mt-1 text-lg font-normal text-primary">{product.price}</p>
    </div>
  </Link>
);

const OurProductsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        {/* Left align title */}
        <h2 className="text-left font-display text-5xl text-primary mb-16 font-normal">
          Our products
        </h2>
        {/* Make cards larger: reduce columns to 3 on md+ and increase gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;