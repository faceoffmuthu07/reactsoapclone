import React from 'react';

const stats = [
  { value: "50K", label: "Happy Clients" },
  { value: "60K+", label: "Products" },
  { value: "99K+", label: "Customer reviews" }
];

export default function AboutStats() {
  return (
    <div className="bg-gradient-to-b from-[#c8d5e8] to-background">
      <section className="pt-32 pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col">
              <h2 className="font-display text-primary text-5xl leading-[1.2]">
                Always fresh, always pure
              </h2>
              <p className="mt-6 mb-12 text-lg text-text-medium leading-relaxed">
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
              </p>
              <a 
                href="/about" 
                className="btn border border-primary text-primary rounded-full py-4 px-8 self-start font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Learn more
              </a>
              
              <div className="flex flex-row flex-wrap gap-x-12 sm:gap-x-16 gap-y-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="font-display text-5xl font-bold text-primary">
                      {stat.value}
                    </h3>
                    <div className="mt-2 text-text-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656850dbe27cbe5cd52e100b_about-image-27.jpg?')`
              }}
              aria-label="Lifestyle image of soap bars with lavender."
            >
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}