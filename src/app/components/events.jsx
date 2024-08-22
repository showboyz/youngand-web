import Link from "next/link";
import Image from "next/image";

export default function Events(){
    return(
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">   
                <Image 
                    alt="gallery" 
                    className="absolute inset-0 w-full h-full object-cover object-center filter grayscale" 
                    src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7346.JPG?raw=true"
                    fill // layout="fill" 대신 사용
                    style={{ objectFit: 'cover' }} // objectFit="cover" 대신 사용
                />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image 
                        alt="gallery" 
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale" 
                        src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7348.JPG?raw=true"
                        fill // layout="fill" 대신 사용
                        style={{ objectFit: 'cover' }} // objectFit="cover" 대신 사용
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
                    <span></span>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image 
                        alt="gallery" 
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale" 
                        src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7377.jpg?raw=true"
                        fill // layout="fill" 대신 사용
                        style={{ objectFit: 'cover' }} // objectFit="cover" 대신 사용
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                    <span></span>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image 
                        alt="gallery" 
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale" 
                        src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7353.JPG?raw=true"
                        fill // layout="fill" 대신 사용
                        style={{ objectFit: 'cover' }} // objectFit="cover" 대신 사용
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">Neptune</h1>
                    <span></span>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image 
                        alt="gallery" 
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale" 
                        src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7360.JPG?raw=true"
                        fill // layout="fill" 대신 사용
                        style={{ objectFit: 'cover' }} // objectFit="cover" 대신 사용
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">Holden Caulfield</h1>
                    <span></span>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image 
                        alt="gallery" 
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale" 
                        src="https://github.com/showboyz/showboyz.github.io/blob/main/IMG_7347.JPG?raw=true"
                        fill // layout="fill" 대신 사용
                        style={{ objectFit: 'cover' }} // objectFit="cover" 대신 사용
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">Alper Kamu</h1>
                    <span></span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
