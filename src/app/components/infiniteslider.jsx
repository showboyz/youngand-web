import Image from 'next/image';

const IMAGES = [
    "https://images.unsplash.com/photo-1720983685929-3ed3309aed63?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=4",
    "https://picsum.photos/300/300?random=5",
    "https://picsum.photos/300/300?random=6",
    "https://picsum.photos/300/300?random=7",
    "https://picsum.photos/300/300?random=8",
    "https://picsum.photos/300/300?random=9",
    "https://picsum.photos/300/300?random=10",
];

export default function Imageslider() {
    return (
        <div className="relative m-auto w-[1500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_10%,rgba(0,0,0,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0)_100%)] after:content-['']">

            <div className="animate-infinite-slider flex w-[calc(200px*20)]">
                {IMAGES.map((src, index) => (
                    <div
                        className="slide flex w-[250px] items-center justify-center mx-4"
                        key={index}
                    >
                        <Image 
                            src={src} 
                            alt={`Image ${index + 1}`} 
                            width={200} 
                            height={200} 
                            className="object-cover filter grayscale" 
                        />
                    </div>
                ))}
                {IMAGES.map((src, index) => (
                    <div
                        className="slide flex w-[250px] items-center justify-center mx-4"
                        key={index + IMAGES.length}
                    >
                        <Image 
                            src={src} 
                            alt={`Image ${index + 1}`} 
                            width={200} 
                            height={200} 
                            className="object-cover filter grayscale" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
