import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/context/I18nProvider";

export default function Contents(){
    const { t } = useI18n();
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{t('contents.title')}</h1>
                        <div className="h-1 w-20 bg-cyan-400 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-400">{t('contents.lead')}</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_1.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">{t('contents.cards.0.kicker')}</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">{t('contents.cards.0.title')}</h2>
                            <p className="leading-relaxed text-base text-gray-400 mt-auto">{t('contents.cards.0.desc')}</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_2.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">{t('contents.cards.1.kicker')}</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">{t('contents.cards.1.title')}</h2>
                            <p className="leading-relaxed text-base mt-auto text-gray-400">{t("contents.cards.1.desc")}</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_3.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">{t('contents.cards.2.kicker')}</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">{t('contents.cards.2.title')}</h2>
                            <p className="leading-relaxed text-base mt-auto text-gray-400">{t('contents.cards.2.desc')}</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_4.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">{t('contents.cards.3.kicker')}</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">{t('contents.cards.3.title')}</h2>
                            <p className="leading-relaxed text-base mt-auto text-gray-400">{t('contents.cards.3.desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
