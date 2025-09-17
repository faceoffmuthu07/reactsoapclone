"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      label: "Pages",
      isDropdown: true,
      items: [
        { href: "/", label: "Home" },
        { href: "/home-2", label: "Home 2" },
        { href: "/about", label: "About" },
        { href: "/shop", label: "Shop" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/faqs", label: "FAQs" },
      ],
    },
    { href: "/shop", label: "Shop" },
  ];
  
  const NavLinkItems = () => (
    navLinks.map((link) =>
      link.isDropdown ? (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 py-2 text-base font-body font-medium text-primary hover:text-accent transition-colors">
              {link.label}
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card border-border rounded-lg mt-2 font-body">
            {link.items?.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href} className="px-4 py-2 text-primary hover:bg-muted">{item.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          key={link.label}
          href={link.href}
          className="py-2 text-base font-body font-medium text-primary hover:text-accent transition-colors"
        >
          {link.label}
        </Link>
      )
    )
  );

  return (
    <>
      {isBannerVisible && (
        <div className="relative bg-gradient-to-r from-[#FFD1C1] to-[#FF9B85] text-primary text-center py-[10px] px-8 text-sm font-body">
          <div className="max-w-[1440px] mx-auto">
            Free standard shipping on orders over $40
          </div>
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-8 top-1/2 -translate-y-1/2"
            aria-label="Close banner"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656573a24d4e159736518b6d_icon-1-1.svg?"
              alt="Close Icon"
              width={15}
              height={15}
            />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto flex h-[100px] items-center px-8 lg:px-20">
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
             <div className="lg:hidden justify-self-start">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6 text-primary" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background pt-16 w-[300px] font-body">
                   <nav className="flex flex-col gap-y-6 px-4">
                    <NavLinkItems />
                   </nav>
                </SheetContent>
              </Sheet>
            </div>
            
            <nav className="hidden lg:flex items-center gap-x-8">
              <NavLinkItems />
            </nav>

            <div className="flex justify-center">
              <Link href="/" aria-label="home">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/6572a0e92354ed5d69166fcd_soapanic-2.svg?"
                  alt="Soapnic logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-x-6">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Toggle search">
                  <Image src={isSearchOpen 
                    ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656573a24d4e159736518b6d_icon-1-1.svg?" 
                    : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65657dcd93e7014c2600e777_icon-2-3.svg?"} 
                  alt="Search Icon" width={22} height={22} />
              </button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <button className="relative" aria-label="Open cart">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65657fd78ca69397a4b6e572_icon-3-4.svg?"
                      alt="Cart Icon"
                      width={24}
                      height={24}
                    />
                    <div className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </div>
                  </button>
                </SheetTrigger>
                <SheetContent className="w-full max-w-[440px] bg-card p-0 flex flex-col font-body">
                  <SheetHeader className="p-6 border-b">
                     <div className="flex justify-between items-center">
                      <SheetTitle className="font-display text-primary text-2xl font-normal">Your Cart</SheetTitle>
                       <SheetClose asChild>
                          <button aria-label="Close cart">
                            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656573a24d4e159736518b6d_icon-1-1.svg?" alt="Close Icon" width={16} height={16} />
                          </button>
                       </SheetClose>
                     </div>
                  </SheetHeader>
                  
                  <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                     <Image src="https://cdn.prod.website-files.com/65642838c9018bf978a0ef82/656d56a088c14fc9849bb561_empty-cart-image.png"
                        alt="Empty Cart"
                        width={200}
                        height={200}
                        className="mb-6 object-contain"
                      />
                    <p className="text-text-medium mb-6">No products inside your bag.</p>
                    <SheetClose asChild>
                      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 h-auto text-base font-medium">
                        <Link href="/shop">Start Shopping</Link>
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <div className="p-6 border-t">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-text-dark">Subtotal</span>
                        <span className="text-text-dark font-medium">$ 0.00 USD</span>
                     </div>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-medium">
                        Continue to Checkout
                      </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      
      {isSearchOpen && (
        <div className="fixed inset-0 z-[49] bg-background flex flex-col items-center justify-center p-4 transition-opacity duration-300" onClick={() => setIsSearchOpen(false)}>
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-8 text-center">Search here</h1>
              <form className="w-full flex gap-2">
                  <Input type="search" placeholder="Search..." className="flex-grow h-14 rounded-full px-6 text-base border-primary/20 focus:ring-primary" />
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 px-8 text-base font-medium">Search</Button>
              </form>
            </div>
        </div>
      )}
    </>
  );
};

export default Header;