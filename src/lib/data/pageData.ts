import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";

export const Headerdata: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Exchange", href: "/#exchange-section" },
  { label: "Features", href: "/#features-section" },
  { label: "FAQ", href: "/#faq-section" },
  { label: "Contact Us", href: "/#contact" },
  { label: "Docs", href: "/documentation" },
];

const basePath = process.env.NODE_ENV === "production" ? "/crypto-nextjs" : "";

export const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: `${basePath}/images/companies/birdseye.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/break.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/keddar.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/shield.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tandov.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tree.svg`,
  },
];

export const workdata: WorkType[] = [
  {
    imgSrc: `${basePath}/images/work/icon-one.svg`,
    heading: "Fashion Branding",
    subheading: "Design, register, and print our logo on clothing products.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-two.svg`,
    heading: "Advertisement",
    subheading:
      "Advertise our music on different digital platforms through ads",
  },
  {
    imgSrc: `${basePath}/images/work/icon-three.svg`,
    heading: "Live Performances",
    subheading: "Artist contributions and performance shows."
  },
];

export const Featuresdata: FeatureType[] = [
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Fashion Branding",
    subheading: "Design and print our logo on clothing products.",
  },
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Limited Product Launch",
    subheading: "Start with t-shirts and pullovers, 20 pieces this year.",
  },
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Artist Promotion",
    subheading: "3 hit songs, 2 videos, social media growth.",
  },
];

export const Faqdata: FaqType[] = [
  {
    heading: "What is WIB LTD's main business?",
    subheading: "WIB LTD operates in fashion and entertainment, launching clothing products and promoting our artists."
  },
  {
    heading: "How does WIB LTD promote its artists?",
    subheading: "Through song releases, music videos, live performances, and social media campaigns."
  },
  {
    heading: "What clothing products are available?",
    subheading: "We start with limited edition t-shirts and pullovers, aiming to create exclusive collections."
  },
  {
    heading: "How can I get involved?",
    subheading: "You can follow our social media, attend shows, or contact our management for collaborations."
  }
];


export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: `${basePath}/images/footer/insta.svg`,
    href: "https://instagram.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/dribble.svg`,
    href: "https://dribble.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/twitter.svg`,
    href: "https://twitter.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/youtube.svg`,
    href: "https://youtube.com/",
  },
];

export const Footerlinkdata: FooterType[] = [
  { label: "Home", href: "/" },
  { label: "Exchange", href: "/#exchange-section" },
  { label: "Features", href: "/#features-section" },
  { label: "FAQ", href: "/#faq-section" },
  { label: "Contact Us", href: "/#contact" },
];
