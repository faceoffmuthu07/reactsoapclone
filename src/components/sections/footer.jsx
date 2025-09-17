"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, AtSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const pagesLinks = [
  { name: 'Home', href: '/' },
  { name: 'Home 2', href: '/home-2' },
  { name: 'About', href: '/about' },
  { name: 'Shop', href: '/shop' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'FAQs', href: '/faqs' },
];

const utilityLinks = [
  { name: 'Style Guide', href: '#' },
  { name: 'Instructions', href: '#' },
  { name: 'Changelog', href: '#' },
  { name: 'Licenses', href: '#' },
  { name: 'Link In Bio', href: '#' },
  { name: 'Coming Soon', href: '#' },
  { name: 'Error 404', href: '#' },
  { name: 'Password Protected', href: '#' },
];

const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Generic Social', icon: AtSign, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#ff9b85] to-[#ff8b7a] text-primary font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr_1fr] xl:grid-cols-[1fr_1fr_2fr_1fr] gap-x-8 gap-y-12 text-center md:text-left">
          
          <div>
            <h3 className="font-display text-xl text-primary font-medium mb-6">Pages</h3>
            <ul className="space-y-3">
              {pagesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-primary hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-primary font-medium mb-6">Utility Pages</h3>
            <ul className="space-y-3">
              {utilityLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-primary hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-center lg:px-4">
            <Link href="/" className="mb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/6572a0e92354ed5d69166fcd_soapanic-2.svg?"
                alt="Soapnic Logo"
                width={180}
                height={55}
                className="h-auto"
              />
            </Link>
            <h3 className="font-display text-2xl text-primary font-normal mb-4">Get the latest scoop!</h3>
            <form className="w-full max-w-sm mt-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center border border-primary/30 rounded-full p-1.5 bg-white/20 backdrop-blur-sm shadow-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-none flex-grow focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0 placeholder:text-primary/80 px-4 text-sm"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className="rounded-full bg-white text-primary hover:bg-cream-white transition-colors px-6 h-10 text-sm font-semibold tracking-wide shadow-sm">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="font-display text-xl text-primary font-medium mb-6">Contact</h3>
            <a href="mailto:example@gmail.com" className="block mb-6 text-base text-primary hover:text-white transition-colors duration-300">
              example@gmail.com
            </a>
            <div className="flex justify-center md:justify-start space-x-5">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} aria-label={social.name} className="text-primary hover:text-white transition-colors duration-300">
                  <social.icon size={22} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-16 pt-8 text-center text-sm text-primary/90">
          <p>
            Designed by <a href="#" className="font-medium hover:text-white transition-colors">Webestica</a>. Powered by <a href="#" className="font-medium hover:text-white transition-colors">Webflow</a>
          </p>
        </div>
      </div>
    </footer>
  );
}