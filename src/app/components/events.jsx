import Link from "next/link";
import Image from "next/image";

export default function Events() {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Your Ultimate Partner in Preserving Memory</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Discover a range of cognitive exercises that effortlessly stimulate your brain and enhance memory in your daily life. Utilizing scientifically proven methods, our app helps reduce the risk of dementia and prepares you for a healthy and vibrant future.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7346.JPG?raw=true"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">Interactive Cognitive Exercises</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Engaging Mind and Body</h1>
                                <p className="leading-relaxed">Strengthen both your mind and body through interactive exercises designed to boost cognitive function while keeping you physically active.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7348.JPG?raw=true"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">Daily Cognitive Challenges</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Stay Active, Stay Sharp</h1>
                                <p className="leading-relaxed">Engage in daily challenges that stimulate your brain and enhance memory, ensuring you stay sharp and focused throughout your day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7360.JPG?raw=true"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">Holistic Brain Health</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Mindful Movements</h1>
                                <p className="leading-relaxed">Experience the benefits of combining physical activity with cognitive training, promoting holistic brain health and overall well-being.</p>
                            </div>
                        </div>
                    </div>
                    {/* 추가 이미지들, 모바일에서는 숨기기 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hidden md:block">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7377.jpg?raw=true"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">Integrated Cognitive and Physical Training</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Fitness for the Mind</h1>
                                <p className="leading-relaxed">Our program integrates cognitive training with physical exercises, helping you maintain both mental sharpness and physical fitness.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hidden md:block">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7353.JPG?raw=true"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Connect and Improve</h1>
                                <p className="leading-relaxed">Connect with others while engaging in cognitive exercises designed to improve memory and social interaction, all from the comfort of your home.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hidden md:block">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale"
                                src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7347.JPG?raw=true"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Social and Cognitive Engagement</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Personalized Brain Workouts</h1>
                                <p className="leading-relaxed">Enjoy personalized cognitive routines that adapt to your individual needs, helping you maintain a healthy brain and a vibrant lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
