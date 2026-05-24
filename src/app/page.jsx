"use client"; // 클라이언트 전용 컴포넌트임을 명시

import Hero from "./components/hero"
import Navi from "./components/navi"
import Footer from "./components/footer"
import Events from "./components/events"
import Testimonials from "./components/testimonials"
import Main from "./components/main"
import Features from "./components/features"
import DualShowcase from "./components/dualShowcase"
import { useI18n } from "@/context/I18nProvider";
import Imageslider from "./components/infiniteslider"
import Pricing from "./components/price"
import Contents from "./components/contents"
import Faq from "./components/faq"
import Contact from "./components/contact"
import React, { useRef } from 'react';
import GoogleAnalytics from "@/context/GoogleAnalytics";

export default function Home() {
  const contactSectionRef = useRef(null);
  const { t } = useI18n();

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };  
  return (
  <div className='h bg-gradient-to-b from-slate-950 to-stone-800'>
    <GoogleAnalytics />

    {/* HEADER */}
    <Navi/>
    {/* HERO */}
    <Main/>
    <Hero scrollToContact={scrollToContact} />
    {/* Dual showcase under HERO */}
    <DualShowcase
      leftImageUrl="https://github.com/showboyz/showboyz.github.io/blob/main/1231233.png?raw=true"
      rightImageUrl="https://github.com/showboyz/showboyz.github.io/blob/main/323322.png?raw=true"
      title={t('dual.title')}
      description={t('dual.description')}
      leftOverlay={{
        kicker: t('dual.left.kicker'),
        title: t('dual.left.title'),
        subtitle: t('dual.left.subtitle'),
      }}
      rightOverlay={{
        kicker: t('dual.right.kicker'),
        title: t('dual.right.title'),
        subtitle: t('dual.right.subtitle'),
      }}
    />
    {/* BODY */}
    {/* 영앤 기술 */}
    {/* 뇌건강놀이터 소개 */}
    <Contents/>
    <Features/>
    <Events/>
    {/* <Imageslider/> */}
    {/* <Pricing/> */}
    <Testimonials/>
    <Faq/>
    {/* FOOTER */}
    <Contact ref={contactSectionRef} />
    <Footer/>
  </div>
  )
}