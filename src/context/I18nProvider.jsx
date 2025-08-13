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
      banner: "Transform Your Health with Digital Therapeutics",
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
      title: "The significance of intervention",
      lead:
        "Despite the inability of dementia prevention to halt disease progression, it is of paramount importance in enhancing the quality of life of patients and alleviating the burden on their families.",
      cards: [
        {
          kicker: "AI Analysis for Dementia Screening",
          title: "Digital Cognitive Assessment",
          desc: "Utilize a digital MMSE for AI-enhanced, personalized cognitive assessments tailored to your unique profile.",
        },
        {
          kicker: "Assessing Functional Abilities",
          title: "Physical Capability Scale",
          desc: "It is essential to evaluate and tailor care in order to enhance seniors' daily functions and independence.",
        },
        {
          kicker: "Dual-Tasking",
          title: "Digital Cognitive Training",
          desc: "Enhance movement, reaction time, balance, and vocal precision through dual-tasking video and audio analysis.",
        },
        {
          kicker: "Health Consultation",
          title: "Real-time Expert Advice",
          desc: "Receive personalized cognitive training, guided by expert recommendations based on your detailed training history.",
        },
      ],
    },
    events: {
      headerTitle: "Your Ultimate Partner in Preserving Memory",
      headerDesc:
        "Discover a range of cognitive exercises that effortlessly stimulate your brain and enhance memory in your daily life. Utilizing scientifically proven methods, our app helps reduce the risk of dementia and prepares you for a healthy and vibrant future.",
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
      banner: "디지털 치료제로 건강을 혁신하세요",
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
    contents: {
      title: "중재의 중요성",
      lead:
        "치매 예방이 진행을 완전히 멈출 수는 없지만, 환자의 삶의 질 향상과 가족의 부담 완화 측면에서 매우 중요합니다.",
      cards: [
        {
          kicker: "AI 기반 치매 선별 분석",
          title: "디지털 인지 평가",
          desc: "디지털 MMSE로 개인 맞춤형 AI 인지 평가를 수행합니다.",
        },
        {
          kicker: "기능적 능력 평가",
          title: "신체 기능 척도",
          desc: "일상 기능과 자립성을 높이기 위한 맞춤 케어에 필수적입니다.",
        },
        {
          kicker: "듀얼 태스킹",
          title: "디지털 인지 훈련",
          desc: "영상·음성 분석을 통해 움직임, 반응속도, 균형, 발화를 향상합니다.",
        },
        {
          kicker: "건강 상담",
          title: "실시간 전문가 자문",
          desc: "훈련 이력 기반 권고에 따라 개인 맞춤 인지 훈련을 제공합니다.",
        },
      ],
    },
    events: {
      headerTitle: "기억 보존을 위한 최적의 파트너",
      headerDesc:
        "일상을 방해하지 않는 다양한 인지 훈련으로 뇌를 자극하고 기억력을 향상하세요. 과학적으로 검증된 방법을 통해 치매 위험을 낮추고 건강한 미래를 준비합니다.",
      items: [
        { kicker: "인터랙티브 인지 훈련", title: "마음과 몸의 몰입", desc: "인지 기능을 끌어올리는 체감형 훈련으로 동시에 신체 활동도 유지합니다." },
        { kicker: "데일리 인지 챌린지", title: "매일 더 선명하게", desc: "하루 챌린지로 집중력과 기억력을 자극해 일상 전반의 선명함을 높입니다." },
        { kicker: "총체적 뇌 건강", title: "마인드풀 무브먼트", desc: "신체 활동과 인지 훈련의 결합으로 전인적 뇌 건강과 웰빙을 촉진합니다." },
        { kicker: "통합형 인지·신체 훈련", title: "두뇌를 위한 피트니스", desc: "인지 훈련과 운동을 통합해 정신적 예리함과 신체 컨디션을 함께 유지합니다." },
        { kicker: "사회·인지 상호작용", title: "연결과 개선", desc: "집에서도 가능한 상호작용형 인지 활동으로 기억력과 사회성을 함께 향상합니다." },
        { kicker: "맞춤 인지 루틴", title: "개인화 두뇌 운동", desc: "개인의 상태에 맞춰 적응하는 루틴으로 건강한 두뇌와 활력 있는 라이프스타일을 유지합니다." },
      ],
    },
    faq: {
      headingKicker: "자주 묻는 질문",
      headingTitle: "이런 점이 궁금하셨죠?",
      q1: "어떤 기관에서 활용하기 적합한가요?",
      a1: "기관의 유형·환경에 맞춘 다양한 운영 옵션을 제공합니다. 복지 시설, 스포츠 시설, 공공기관, 대기업 등에서 각기 다른 방식으로 도입되어 좋은 성과를 내고 있습니다. 도입을 검토 중이시라면 문의 주세요. 자세히 안내드리겠습니다.",
      q2: "고령자도 무리 없이 사용할 수 있나요?",
      a2: "고령 사용자의 사용성을 최우선으로 설계했습니다. 동선, 화면 배치, 글자 크기를 최적화했고, 실제 피드백을 반영해 지속 개선하고 있습니다.",
      q3: "도입 이후 관리는 어떻게 이루어지나요?",
      a3: "계약 후 서비스 운영에 대한 맞춤 컨설팅을 제공합니다. 효과적인 활용 방법과 모니터링 대시보드 사용법을 안내하며, 이슈 발생 시 전담 지원팀이 신속히 대응합니다.",
    },
    pricing: { title: "요금제", desc: "필요에 가장 잘 맞는 구독 플랜을 선택하세요." },
    contact: {
      title: "문의하기",
      subtitle: "제품이 궁금하신가요? 언제든 편하게 문의해 주세요. 필요한 내용을 신속히 안내드리겠습니다.",
      emailLabel: "이메일",
      officeLabel: "사무실",
      placeholders: { name: "이름", email: "이메일", subject: "제목", message: "메시지" },
      send: "보내기",
      status: { sending: "전송 중...", success: "메일이 전송되었습니다.", fail: "메일 전송에 실패했습니다." },
    },
    dual: {
      title: "AI 모니터링 & 인지훈련",
      description:
        "rPPG·동작·표정 분석으로 생체·감정을 비접촉 모니터링하고, 시니어 맞춤 적응형 훈련을 제공합니다.",
      left: {
        kicker: "실시간 모니터링",
        title: "한 눈에 보는 생체·감정",
        subtitle: "rPPG · 표정 인식 · 동작 추적",
      },
      right: {
        kicker: "개인맞춤 훈련",
        title: "적응형 인지 운동",
        subtitle: "실시간 피드백과 난이도 자동 조절",
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


