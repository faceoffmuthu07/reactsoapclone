"use client";

import { useState } from "react";
import Image from "next/image";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#c8d5e8] via-[#ffd1c1] to-[#ff9b85] text-[rgb(20,36,95)]">
      <div className="relative mx-auto flex min-h-[41px] items-center justify-center px-[50px] py-[10px]">
        <p className="text-center text-base font-normal leading-tight">
          Free standard shipping on orders over $40
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-[50px] top-1/2 -translate-y-1/2"
          aria-label="Close"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656573a24d4e159736518b6d_icon-1-1.svg"
            alt="Close Icon"
            width={15}
            height={15}
            className="h-[15px] w-[15px]"
          />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;