import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/context/I18nProvider";

export default function Events() {
    const { t } = useI18n();
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{t('events.headerTitle')}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{t('events.headerDesc')}</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="h-80 relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7346.JPG?raw=true"
                                fill
                                style={{objectFit: 'cover'}}
                            />
                            <div
                                className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">{t('events.items.0.kicker')}</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">{t('events.items.0.title')}</h1>
                                <p className="leading-relaxed">{t('events.items.0.desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="h-80 relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7348.JPG?raw=true"
                                fill
                                style={{objectFit: 'cover'}}
                            />
                            <div
                                className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">{t('events.items.1.kicker')}</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">{t('events.items.1.title')}</h1>
                                <p className="leading-relaxed">{t('events.items.1.desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="h-80 relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7360.JPG?raw=true"
                                fill
                                style={{objectFit: 'cover'}}
                            />
                            <div
                                className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">{t('events.items.2.kicker')}</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">{t('events.items.2.title')}</h1>
                                <p className="leading-relaxed">{t('events.items.2.desc')}</p>
                            </div>
                        </div>
                    </div>
                    {/* 추가 이미지들, 모바일에서는 숨기기 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hidden md:block">
                        <div className="h-80 relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7377.jpg?raw=true"
                                fill
                                style={{objectFit: 'cover'}}
                            />
                            <div
                                className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">{t('events.items.3.kicker')}</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">{t('events.items.3.title')}</h1>
                                <p className="leading-relaxed">{t('events.items.3.desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hidden md:block">
                        <div className="h-80 relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7353.JPG?raw=true"
                                fill
                                style={{objectFit: 'cover'}}
                            />
                            <div
                                className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">{t('events.items.4.kicker')}</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">{t('events.items.4.title')}</h1>
                                <p className="leading-relaxed">{t('events.items.4.desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hidden md:block">
                        <div className="h-80 relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7347.JPG?raw=true"
                                fill
                                style={{objectFit: 'cover'}}
                            />
                            <div
                                className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">{t('events.items.5.kicker')}</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">{t('events.items.5.title')}</h1>
                                <p className="leading-relaxed">{t('events.items.5.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}
