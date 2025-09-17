import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative bg-background">
            {/* Background video filling the entire hero */}
            <div className="absolute inset-0 -z-10">
                <video
                    src="https://uploads-ssl.webflow.com/65642838c9018bf978a0ef82/65686076c0ec7713fdafa0ae_add-video-transcode.mp4"
                    poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686076c0ec7713fdafa0ae_add-video-poster-00001-28.jpg?"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                />
                {/* subtle overlay for readability */}
                <div className="absolute inset-0 bg-background/40" />
            </div>

            <div className="container">
                <div className="grid grid-cols-2 items-center gap-8 min-h-[700px] py-16">
                    <div className="max-w-xl">
                        <h1 className="font-display text-primary font-normal text-[4.5rem] leading-[1.1]">
                            Handmade with care, crafted to Impress
                        </h1>
                        <a
                            href="/shop"
                            className="mt-8 inline-block bg-accent text-accent-foreground font-button text-base font-medium tracking-wide rounded-full px-8 py-4 transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(255,139,122,0.3)]"
                        >
                            Shop now
                        </a>
                    </div>

                    {/* remove right column video wrapper */}
                    {/* intentionally left empty as video now plays in the background */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;