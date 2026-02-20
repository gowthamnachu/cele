"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
    { name: "Client 8", logo: "/trustedients/8.svg" },
    { name: "Client 9", logo: "/trustedients/9.svg" },
    { name: "Client 10", logo: "/trustedients/10.svg" },
    { name: "Client 11", logo: "/trustedients/11.svg" },
    { name: "Client 12", logo: "/trustedients/12.svg" },
    { name: "Posh Nosh", logo: "/trustedients/PoshNosh.svg" },
    { name: "GLA University", logo: "/trustedients/glauniversity.svg" },
    { name: "Golden Vows", logo: "/trustedients/goldenvows.svg" },
    { name: "Vaibhavam", logo: "/trustedients/vaibhavam.svg" },
];

const freelanceClients = [
    { name: "Freelance 13", logo: "/freelancer/13.svg" },
    { name: "Freelance 14", logo: "/freelancer/14.svg" },
    { name: "Freelance 15", logo: "/freelancer/15.svg" },
    { name: "Freelance 16", logo: "/freelancer/16.svg" },
    { name: "Freelance 17", logo: "/freelancer/17.svg" },
    { name: "Freelance 18", logo: "/freelancer/18.svg" },
];

export default function Clients() {
    return (
        <section id="clients" className="py-24 bg-black overflow-hidden pointer-events-none sm:pointer-events-auto">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 px-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 uppercase tracking-[0.5em] text-[12px] md:text-[14px] font-black mb-4"
                    >
                        CLIENTS
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[2.2rem] md:text-6xl font-black uppercase tracking-tighter text-white"
                    >
                        ASSESSED WITH
                    </motion.h2>
                </div>
            </div>

            {/* First Marquee: Assessed With */}
            <div className="relative w-full overflow-hidden mb-12">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div className="flex w-fit animate-marquee">
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[200px] md:w-[340px] h-40 md:h-72 flex items-center justify-center px-2 md:px-4"
                        >
                            <div className="relative w-full h-full flex items-center justify-center group">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={400}
                                    height={200}
                                    className="max-w-[180px] md:max-w-[320px] max-h-[90px] md:max-h-[140px] object-contain opacity-30 grayscale brightness-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Heading: Freelancing */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16 px-4 mt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[2.2rem] md:text-6xl font-black uppercase tracking-tighter text-white text-center"
                >
                    FREELANCING
                </motion.h2>
            </div>

            {/* Second Marquee: Freelancing (Reverse direction) */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div className="flex w-fit animate-marquee-reverse">
                    {[...freelanceClients, ...freelanceClients, ...freelanceClients, ...freelanceClients].map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[200px] md:w-[340px] h-40 md:h-72 flex items-center justify-center px-2 md:px-4"
                        >
                            <div className="relative w-full h-full flex items-center justify-center group">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={400}
                                    height={200}
                                    className="max-w-[180px] md:max-w-[320px] max-h-[90px] md:max-h-[140px] object-contain opacity-30 grayscale brightness-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-33.333%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 50s linear infinite;
                }
                .animate-marquee:hover, .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
