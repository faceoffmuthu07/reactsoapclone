"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    name: "Samuel Bishop",
    quote:
      "I am extremely impressed with the results we achieved through their digital marketing services. Our website traffic and conversions have significantly increased.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65697211dfd51ffa36fe4a1e_02-23.jpg?",
  },
  {
    name: "Bryan Knight",
    quote:
      "Having tried numerous soaps, I can confidently say this one stands out. Its invigorating fragrance and creamy texture make every shower a delight. What's impressive is how it strikes the perfect balance between cleansing and moisturizing.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/6569721063931ea93e20b478_01-22.jpg?",
  },
  {
    name: "Billy Vasquez",
    quote:
      "I've been using this soap for quite some time now, and it has completely transformed my skin. Its exfoliating properties have smoothed rough patches, leaving my skin soft and radiant. Unlike other soaps that often cause dryness.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/656972107cb8e22f849d5b15_04-23.jpg?",
  },
  {
    name: "Larry Lawson",
    quote:
      "Discovering this soap has been a game-changer for my skincare routine. Its botanical ingredients and mild formulation make it perfect for daily use. What sets it apart is how it provides a deep cleanse without stripping away the skin's natural oils.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65697210f25e72003331cb32_03-24.jpg?",
  },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTestimonial = testimonialsData[activeTab];

  return (
    <section className="py-[120px] bg-gradient-to-bl from-peach-gradient-start to-coral-gradient-end">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="font-body text-lg italic leading-relaxed text-primary max-w-4xl">
            {activeTestimonial.quote}
          </p>
          <div className="mt-8 flex flex-col items-center">
            <Image
              src={activeTestimonial.avatar}
              alt={`Avatar of ${activeTestimonial.name}`}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <p className="mt-4 font-body text-base font-medium text-primary">
              {activeTestimonial.name}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-16">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setActiveTab(index)}
              className={cn(
                "font-display text-2xl pb-2 transition-colors duration-300 ease-in-out",
                activeTab === index
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-medium border-b-2 border-transparent hover:text-primary",
              )}
            >
              {testimonial.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}