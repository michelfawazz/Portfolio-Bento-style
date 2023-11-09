"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import Typewriter from "typewriter-effect";
const LeftPanel = () => {
    return (
        <div
            key="left-panel"
            className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
        >
            {/* Top Container */}
            <div>
                <div>
                    <Image
                        priority
                        loading="eager"
                        alt="avatar"
                        placeholder="blur"
                        src="/wave.png"
                        width={220}
                        height={220}
                        blurDataURL="/wave.png"
                    />
                </div>

                {/* Text Container */}
                <div className="mt-6">
                    <div className="text-xl font-medium text-primary">
                        {siteConfig.title}
                    </div>
                    <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
                    <p className="text-2xl font-light text-neutral-700">
                        {siteConfig.bio}
                    </p>
                    {/* <Typewriter
                        options={{
                            strings: [
                                siteConfig.bio
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 80,
                            
                        }}
                    /> */}

                    <p className="w-11/12 text-sm font-light text-neutral-500">
                        Find all of my useful Links and Get to know more about my projects & experience.
                    </p>
                </div>
                {/* Buttons Container */}
                <div className="flex items-center gap-3 mt-6">
                    <a
                        href={`${siteConfig.locationLink}`}
                        className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
                    >
                        <MapPin size="14" />
                        {siteConfig.location}
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
                    >
                        <Mail size="14" />
                        Contact Me
                    </a>
                </div>


                {/* Footer */}

            </div>
        </div>
    );
};

export default LeftPanel;