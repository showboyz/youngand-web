import Link from "next/link";
import Image from "next/image";

export default function Contents(){
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">The significance of intervention</h1>
                        <div className="h-1 w-20 bg-cyan-400 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-400">Despite the inability of dementia prevention to halt disease progression, it is of paramount importance in enhancing the quality of life of patients and alleviating the burden on their families.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_1.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">AI Analysis for Dementia Screening</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Digital Cognitive Assessment</h2>
                            <p className="leading-relaxed text-base text-gray-400 mt-auto">Utilize a digital MMSE for AI-enhanced, personalized cognitive assessments tailored to your unique profile.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_2.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">Assessing Functional Abilities</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Physical Capability Scale</h2>
                            <p className="leading-relaxed text-base mt-auto text-gray-400">It is essential to evaluate and tailor care in order to enhance seniors&apos; daily functions and independence.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_3.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">Dual-Tasking</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Digital Cognitive Training</h2>
                            <p className="leading-relaxed text-base mt-auto text-gray-400">Enhance movement, reaction time, balance, and vocal precision through dual-tasking video and audio analysis.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="relative border-[0.5px] border-white/40 h-full bg-gradient-to-b from-slate-950 to-stone-800 backdrop-blur-sm p-8 rounded shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] ring-1 ring-gray-900/5 h-full">
                            <Image className="h-40 rounded w-full object-cover object-center hover:object-scale-down mb-6" src="https://github.com/showboyz/showboyz.github.io/blob/main/Desktop_4.png?raw=true" alt="content" width={500} height={400}/>
                            <h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">Health Consultation</h3>
                            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Real-time Expert Advice</h2>
                            <p className="leading-relaxed text-base mt-auto text-gray-400">Receive personalized cognitive training, guided by expert recommendations based on your detailed training history.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
