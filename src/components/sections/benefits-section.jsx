import Link from 'next/link';
import Image from 'next/image';

const benefits = [
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656863fc954f8b10ec67cab5_icon-11-7.svg?',
    label: 'Soft skin feel',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656863fc13f0c00c4c1fbdfd_icon-13-8.svg?',
    label: 'Love your skin',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656863fc3d2b88abfe064904_icon-15-9.svg?',
    label: 'Best fragrance',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656863fcc0ec7713fdb28397_icon-12-10.svg?',
    label: 'Freshness explored',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656863fc8fd9c45bc7222b94_icon-14-11.svg?',
    label: 'Go organic',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656863fc6fc4f14d1ec6c38a_icon-16-12.svg?',
    label: 'PH balanced',
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[linear-gradient(160deg,#ffd1c1,#ff9b85)] py-20 md:py-[120px]">
      <div className="container">
        <h2 className="font-display text-[2.5rem] leading-[1.2] md:text-5xl font-normal text-primary text-center mb-16 max-w-2xl mx-auto">
          No chemical detergents & synthetic lathering agents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 mb-20 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 justify-center sm:justify-self-start sm:justify-start">
              <Image
                src={benefit.iconUrl}
                alt={benefit.label}
                width={28}
                height={28}
                className="flex-shrink-0"
              />
              <p className="text-primary text-lg font-body">{benefit.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shop"
            className="btn inline-block py-[15px] px-[35px] border border-primary text-primary rounded-[20px] hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Buy Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;