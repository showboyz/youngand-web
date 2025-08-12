"use client";

import React from "react";
import Image from "next/image";

/**
 * 두 장의 이미지를 강조해서 배치하는 섹션
 * - 모바일: 세로 스택
 * - 데스크톱: 좌/우 배치, 약간의 각도와 화이트 프레임 효과
 */
export default function DualShowcase({
  leftImageUrl,
  rightImageUrl,
  leftAlt = "Showcase image 1",
  rightAlt = "Showcase image 2",
  title = "",
  description = "",
  leftOverlay,
  rightOverlay,
}) {
  return (
    <section aria-label="Visual showcase" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 text-gray-600 body-font">
      {(title || description) && (
        <div className="mx-auto mb-10 max-w-3xl text-center animate-fade-up lg:w-2/3">
          {title && (
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{title}</h2>
          )}
          {description && (
            <p className="leading-relaxed text-gray-400">{description}</p>
          )}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left image */}
        <figure className="relative mx-auto w-full max-w-xl">
          <div className="relative -rotate-3 rounded-2xl border-4 border-white/90 shadow-2xl ring-1 ring-black/5 animate-fade-in-left">
            <Image
              src={leftImageUrl}
              alt={leftAlt}
              width={1100}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 28rem"
            />
            {leftOverlay && (
              <figcaption className="pointer-events-auto absolute inset-x-4 bottom-4 rounded-xl bg-slate-900/70 p-4 text-white backdrop-blur ring-1 ring-white/10 md:max-w-md md:inset-auto md:left-4 md:bottom-4 animate-fade-up">
                <p className="tracking-widest text-cyan-400 text-xs font-medium title-font">
                  {leftOverlay.kicker}
                </p>
                <h3 className="mt-1 text-lg text-gray-100 font-medium title-font leading-tight">
                  {leftOverlay.title}
                </h3>
                {leftOverlay.subtitle && (
                  <p className="mt-1 text-sm text-gray-300">{leftOverlay.subtitle}</p>
                )}
                {/* CTA 버튼 제거 */}
              </figcaption>
            )}
          </div>
        </figure>

        {/* Right image */}
        <figure className="relative mx-auto w-full max-w-xl">
          <div className="relative rotate-3 rounded-2xl border-4 border-white/90 shadow-2xl ring-1 ring-black/5 animate-fade-in-right">
            <Image
              src={rightImageUrl}
              alt={rightAlt}
              width={1100}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 28rem"
            />
            {rightOverlay && (
              <figcaption className="pointer-events-auto absolute inset-x-4 bottom-4 rounded-xl bg-slate-900/70 p-4 text-white backdrop-blur ring-1 ring-white/10 md:max-w-md md:inset-auto md:right-4 md:bottom-4 animate-fade-up">
                <p className="tracking-widest text-indigo-300 text-xs font-medium title-font">
                  {rightOverlay.kicker}
                </p>
                <h3 className="mt-1 text-lg text-gray-100 font-medium title-font leading-tight">
                  {rightOverlay.title}
                </h3>
                {rightOverlay.subtitle && (
                  <p className="mt-1 text-sm text-gray-300">{rightOverlay.subtitle}</p>
                )}
                {/* CTA 버튼 제거 */}
              </figcaption>
            )}
          </div>
        </figure>
      </div>
    </section>
  );
}


