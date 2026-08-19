"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext({
  lang: "ENG",
  setLang: (_v) => {},
  t: (key) => key,
});

const translations = {
  ENG: {
    navi: { about: "About" },
    main: {
      banner: "Transform Your Health with Digital Health Solutions",
      title: "Next-Gen AI Cognitive Training Solutions",
      subtitle:
        "Advancing cognitive wellness through AI and innovative technology — supporting daily engagement, activity, and independence.",
    },
    hero: {
      title: "Brain Health Playground",
      desc:
        "This digital wellness solution uses AI and computer vision to track training performance over time and deliver personalized cognitive activity programs. Our system helps users stay engaged with regular cognitive and physical activity.",
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
    dual: {
      title: "AI Monitoring & Cognitive Training",
      description:
        "Contactless vital and emotion tracking using rPPG, motion, and facial analysis — paired with adaptive, data‑driven exercises tailored for seniors.",
      left: {
        kicker: "Real‑time Monitoring",
        title: "Vitals and Emotion at a Glance",
        subtitle: "rPPG · Facial Expression · Motion",
      },
      right: {
        kicker: "Personalized Training",
        title: "Adaptive Cognitive Exercise",
        subtitle: "Real‑time feedback with difficulty that fits each user",
      },
    },
    contents: {
      title: "The significance of ongoing cognitive activity",
      lead:
        "Ongoing cognitive activity is meaningful in helping older adults stay engaged, keep confidence in daily routines, and ease the load on families and staff who support them.",
      cards: [
        {
          kicker: "Activity-based cognitive check-in",
          title: "Training performance summary",
          desc: "Personalized AI-supported activity check-ins that help users see their training performance over time.",
        },
        {
          kicker: "Everyday Activity Support",
          title: "Comfortable Activity Level",
          desc: "Helps set a comfortable activity level that fits seniors' daily routines and independence.",
        },
        {
          kicker: "Dual-Tasking",
          title: "Digital Cognitive Training",
          desc: "Enhance movement, reaction time, balance, and vocal precision through dual-tasking video and audio analysis.",
        },
        {
          kicker: "Session Reporting",
          title: "Session summary for staff",
          desc: "Session summaries help staff see each user's participation and training history at a glance.",
        },
      ],
    },
    events: {
      headerTitle: "Your Ultimate Partner in Preserving Memory",
      headerDesc:
        "Discover a range of cognitive exercises that stimulate your brain and support memory engagement in daily life. The app helps you stay active with regular cognitive and physical activity.",
      items: [
        {
          kicker: "Interactive Cognitive Exercises",
          title: "Engaging Mind and Body",
          desc: "Strengthen both your mind and body through interactive exercises designed to boost cognitive function while keeping you physically active.",
        },
        {
          kicker: "Daily Cognitive Challenges",
          title: "Stay Active, Stay Sharp",
          desc: "Engage in daily challenges that stimulate your brain and enhance memory, ensuring you stay sharp and focused throughout your day.",
        },
        {
          kicker: "Holistic Brain Health",
          title: "Mindful Movements",
          desc: "Experience the benefits of combining physical activity with cognitive training, promoting holistic brain health and overall well-being.",
        },
        {
          kicker: "Integrated Cognitive and Physical Training",
          title: "Fitness for the Mind",
          desc: "Our program integrates cognitive training with physical exercises, helping you maintain both mental sharpness and physical fitness.",
        },
        {
          kicker: "Social and Cognitive Engagement",
          title: "Connect and Improve",
          desc: "Connect with others while engaging in cognitive exercises designed to improve memory and social interaction, all from the comfort of your home.",
        },
        {
          kicker: "Tailored Cognitive Routines",
          title: "Personalized Brain Workouts",
          desc: "Enjoy personalized cognitive routines that adapt to your individual needs, helping you maintain a healthy brain and a vibrant lifestyle.",
        },
      ],
    },
    faq: {
      headingKicker: "FAQs",
      headingTitle: "Looking for answers?",
      q1: "Which organizations are best suited to use this service?",
      a1: "Our service offers flexible options tailored to the specific needs, type, and preferences of your organization. It has been successfully implemented in a variety of settings, including senior welfare facilities, sports facilities, public institutions, and large corporations, with each using the service in unique ways. If you're interested in adopting our service, feel free to contact us, and we'll be happy to provide you with more information.",
      q2: "Can elderly individuals of advanced age use this service?",
      a2: "Yes, the service has been specifically designed with the needs of elderly users in mind. The program flow, screen layout, and font size have all been optimized for ease of use. We have received very positive feedback from elderly users, and we continuously incorporate their suggestions to improve the service. Elderly individuals can comfortably and effectively use this service.",
      q3: "How is the service managed after purchase?",
      a3: "After the contract is finalized, we provide personalized consulting on the operation of the service. This includes guidance on how to utilize the service effectively and instructions on using the monitoring dashboard. Should any issues arise during usage, our dedicated support team is readily available to respond quickly and resolve any concerns.",
    },
    pricing: {
      title: "Pricing",
      desc: "Choose the Subscription Plan that Best Fits Your Needs.",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Interested in our product? Feel free to reach out anytime. We welcome your inquiries and are here to assist you with whatever you need!",
      emailLabel: "Email",
      officeLabel: "Office",
      placeholders: { name: "Name", email: "Email", subject: "Subject", message: "Message" },
      send: "Send",
      status: { sending: "Sending...", success: "Email sent successfully!", fail: "Failed to send email." },
    },
  },
  KOR: {
    navi: { about: "소개" },
    main: {
      banner: "건강의 패러다임을 바꾸다",
      title: "AI 기반 인지 건강 솔루션",
      subtitle:
        "AI와 디지털 웰니스 기술로 인지 활동의 새로운 표준을 제시합니다. 일상 몰입·활동·자립을 뒷받침합니다.",
    },
    hero: {
      title: "뇌건강놀이터",
      desc:
        "AI와 컴퓨터 비전 기술을 활용해 훈련 수행 이력을 시각화하고, 개인 맞춤형 인지 활동 프로그램을 제공합니다. 사용자가 규칙적인 인지·신체 활동을 지속할 수 있도록 돕습니다.",
      contact: "문의하기",
    },
    features: {
      title: "핵심 기능",
      items: [
        "정밀 동작 추적",
        "고도화 음성 인식",
        "건강 지표 모니터링",
        "맞춤형 데이터 분석",
      ],
    },
    testimonials: {
      title: "도입 사례",
      desc: "다양한 기관과 고객이 선택한 이유를 실제 사례를 통해 확인하세요.",
    },
    contents: {
      title: "지속적인 인지 활동의 의미",
      lead:
        "꾸준한 인지 활동은 시니어가 일상에 대한 자신감과 몰입도를 유지하도록 돕고, 이를 지원하는 가족과 담당자의 부담을 덜어줍니다.",
      cards: [
        {
          kicker: "활동 기반 인지 체크인",
          title: "훈련 수행 요약",
          desc: "AI 기반 개인 맞춤형 활동 체크인으로 훈련 수행 이력을 확인할 수 있도록 지원합니다.",
        },
        {
          kicker: "일상 활동 지원",
          title: "편안한 활동 강도",
          desc: "시니어의 일상 활동과 자립성에 맞는 편안한 활동 강도를 찾도록 돕습니다.",
        },
        {
          kicker: "인지·신체 동시 자극",
          title: "디지털 인지 훈련",
          desc: "영상·음성 분석으로 움직임, 반응속도, 균형감, 언어 표현 능력을 종합적으로 향상시킵니다.",
        },
        {
          kicker: "세션 리포트",
          title: "담당자용 세션 요약",
          desc: "세션 데이터를 기반으로 담당자가 사용자의 참여 상황과 훈련 이력을 한눈에 확인할 수 있습니다.",
        },
      ],
    },
    events: {
      headerTitle: "기억을 지키는 파트너",
      headerDesc:
        "일상을 방해하지 않는 다양한 인지 활동으로 뇌를 자극하고 기억 몰입도를 유지하세요. 규칙적인 인지·신체 활동을 지속할 수 있도록 돕습니다.",
      items: [
        { kicker: "인터랙티브 인지 훈련", title: "마음과 몸의 몰입", desc: "신체 활동과 인지 자극을 결합한 몰입형 훈련으로 전반적인 뇌 기능을 향상합니다." },
        { kicker: "데일리 인지 챌린지", title: "매일 더 선명하게", desc: "하루 10분, 집중력과 기억력을 자극하는 맞춤형 훈련으로 일상에 활력을 더합니다." },
        { kicker: "전인적 뇌 건강 솔루션", title: "마인드풀 무브먼트", desc: "인지 훈련과 신체 활동의 결합으로 뇌 건강과 전반적인 웰빙을 촉진합니다." },
        { kicker: "통합형 인지·운동 프로그램", title: "두뇌 피트니스", desc: "인지 훈련과 운동을 통합하여 정신적 예리함과 신체적 활력을 동시에 유지합니다." },
        { kicker: "사회·인지 상호작용", title: "연결과 개선", desc: "집에서도 가능한 상호작용형 훈련으로 기억력과 사회성을 함께 높입니다." },
        { kicker: "맞춤 인지 루틴", title: "개인화 두뇌 운동", desc: "사용자 상태에 맞춰 난이도를 조절하는 루틴으로 장기적인 뇌 건강을 지원합니다." },
      ],
    },
    faq: {
      headingKicker: "자주 묻는 질문",
      headingTitle: "무엇이든 물어보세요",
      q1: "어떤 기관에서 활용하기 적합한가요?",
      a1: "복지 시설, 재활 병원, 스포츠 센터, 공공기관, 대기업 웰니스 프로그램 등 다양한 환경에서 활용 가능합니다. 기관의 특성과 운영 환경에 맞춘 맞춤형 도입 방안을 제안드립니다.",
      q2: "고령자도 쉽게 사용할 수 있나요?",
      a2: "고령 친화적 UX를 최우선으로 설계했습니다. 큰 글씨, 직관적인 인터페이스, 단순화된 동작 구조로 누구나 쉽게 사용할 수 있습니다.",
      q3: "도입 후 지원은 어떻게 이루어지나요?",
      a3: "전담 컨설턴트가 초기 세팅부터 운영, 데이터 분석까지 지원합니다. 정기 모니터링과 피드백을 제공하며, 기술 지원팀이 신속히 대응합니다.",
    },
    pricing: { title: "요금제", desc: "기관의 규모와 목적에 맞춘 다양한 구독 플랜을 제공합니다." },
    contact: {
      title: "문의하기",
      subtitle: "서비스 도입 및 상담을 원하시면 언제든 연락 주세요. 빠르고 정확한 안내를 드립니다.",
      emailLabel: "이메일",
      officeLabel: "사무실",
      placeholders: { name: "이름", email: "이메일", subject: "제목", message: "메시지" },
      send: "보내기",
      status: { sending: "전송 중...", success: "메일이 전송되었습니다.", fail: "메일 전송에 실패했습니다." },
    },
    dual: {
      title: "AI 모니터링 & 인지 훈련",
      description:
        "rPPG·동작·표정 분석을 통한 비접촉 생체·감정 모니터링과 개인 맞춤형 인지 훈련을 제공합니다.",
      left: {
        kicker: "실시간 모니터링",
        title: "생체·감정 한눈에",
        subtitle: "rPPG · 표정 분석 · 동작 추적",
      },
      right: {
        kicker: "개인 맞춤 훈련",
        title: "적응형 인지 운동",
        subtitle: "실시간 피드백과 난이도 자동 조정",
      },
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


