import Image from "next/image";

const instagramImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686e474b4dbe462f94b7bb_instagram-1-16.jpg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686e4743c727ffa0c37a36_instagram-2-17.jpg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686e476a215adee738bf1b_instagram-3.jpg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686e47ec8f4c2d31b953bc_instagram-4-19.jpg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686e47b28762405b9a6572_instagram-5-21.jpg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686e485758ead10948d54f_instagram-6.jpg?",
];
const duplicatedImages = [...instagramImages, ...instagramImages];

const InstagramGallery = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ffd1c1] to-[#ff9b85] py-[120px]">
        <div className="flex animate-marquee will-change-transform">
          {duplicatedImages.map((src, index) => (
            <a
              key={`${src}-${index}`}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-shrink-0 mx-3 group"
            >
              <div className="relative w-[360px] h-[440px] overflow-hidden rounded-[12px] shadow-lg">
                <Image
                  src={src}
                  alt={`Soapnic Instagram photo ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary font-display no-underline z-10 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <strong className="block text-5xl font-normal leading-tight">Follow us</strong>
          <strong className="block text-5xl font-normal leading-tight">#Soapnic_insta</strong>
        </a>
      </section>
    </>
  );
};

export default InstagramGallery;