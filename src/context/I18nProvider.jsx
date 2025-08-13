"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext({
  lang: "ENG",
  setLang: (_v) => {},
  t: (key) => key,
});

const translations = {
  ENG: {
    main: {
      title: "Next-Gen AI Cognitive Training Solutions",
      subtitle:
        "Revolutionizing Mental Health and Cognitive Care Through AI and Innovative Technology to Treat, Prevent, and Transform Lives.",
    },
    hero: {
      title: "Brain Health Playground",
      desc:
        "This digital healthcare solution uses AI and computer vision to detect early signs of dementia and deliver personalized cognitive training programs. Our system provides an effective approach for dementia detection and prevention, helping patients maintain and enhance their cognitive function.",
      contact: "Contact Us",
    },
    features: {
      title: "Key Features",
      items: [
        "Motion Tracking",
        "Voice Recognition",
        "Health Monitoring",
        "Data Analysis",
      ],
    },
    testimonials: {
      title: "Testimonials",
      desc: "Discover Why Our Clients Trust Us—Read Their Stories and Feedback.",
    },
  },
  KOR: {
    main: {
      title: "차세대 AI 인지훈련 솔루션",
      subtitle:
        "AI와 혁신 기술로 정신 건강과 인지 케어를 혁신합니다. 치료·예방·삶의 변화를 한 단계 끌어올립니다.",
    },
    hero: {
      title: "Brain Health Playground",
      desc:
        "AI와 컴퓨터 비전을 활용해 치매의 조기 징후를 탐지하고 개인 맞춤형 인지 훈련을 제공합니다. 인지기능 유지·향상을 돕는 효과적인 검진·예방 접근을 제시합니다.",
      contact: "문의하기",
    },
    features: {
      title: "주요 기능",
      items: [
        "동작 추적",
        "음성 인식",
        "건강 모니터링",
        "데이터 분석",
      ],
    },
    testimonials: {
      title: "고객 사례",
      desc: "고객들이 우리를 신뢰하는 이유를 스토리로 확인해 보세요.",
    },
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("ENG");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (stored === "KOR" || stored === "ENG") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang] || translations.ENG;
    return (key) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
          cur = cur[p];
        } else {
          return key;
        }
      }
      return cur;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}


