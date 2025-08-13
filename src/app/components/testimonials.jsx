import Image from "next/image";
import { useI18n } from "@/context/I18nProvider";

export default function Testimonials() {
    const { t } = useI18n();
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{t('testimonials.title')}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">{t('testimonials.desc')}</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                        <div
                            role="button"
                            tabIndex={0}
                            className="group relative h-full rounded-2xl border-[0.5px] border-white/40 bg-gradient-to-b from-slate-950 to-stone-800 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_35px_60px_-15px_rgba(34,211,238,0.4)] hover:ring-cyan-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-4 block h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6 text-white transition-colors group-hover:text-gray-200">
                            Brain Health Playground has been a game-changer in how we approach dementia care. The system&apos;s use of motion detection and AI has allowed us to identify patients who may be at risk for cognitive decline, leading to earlier diagnoses and better outcomes.
                            </p>
                            <div className="inline-flex items-center">
                                <Image
                                    alt="testimonial"
                                    src="https://randomuser.me/api/portraits/men/75.jpg"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover filter grayscale object-center transition group-hover:grayscale-0"
                                    style={{ objectFit: "cover" }}
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-500">Sarah Thompson</span>
                                    <span className="text-gray-700 text-sm">Occupational Therapist</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        <div
                            role="button"
                            tabIndex={0}
                            className="group relative h-full rounded-2xl border-[0.5px] border-white/40 bg-gradient-to-b from-slate-950 to-stone-800 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_35px_60px_-15px_rgba(34,211,238,0.4)] hover:ring-cyan-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-4 block h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6 text-white transition-colors group-hover:text-gray-200">
                            Brain Health Playground has made a noticeable difference in our residents&apos; cognitive function. The AI-driven exercises are engaging and personalized, helping us deliver tailored care with impressive results.
                            </p>
                            <div className="inline-flex items-center">
                                <Image
                                    alt="testimonial"
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover filter grayscale object-center transition group-hover:grayscale-0"
                                    style={{ objectFit: "cover" }}
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-500">ALEX KIM</span>
                                    <span className="text-gray-700 text-sm">Senior Care Specialist</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
