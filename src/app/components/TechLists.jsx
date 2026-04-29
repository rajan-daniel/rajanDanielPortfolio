import Marquee from "./Marquee";
import { skills } from "@/data/data";

export default function TechLists() {
    return (
        <div className="mt-10">
             <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Tech Stack</h2>
            <Marquee duration="30s">
                <div className="flex gap-8 mt-4">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 w-[80px] p-2"
                        >
                            <div className="border border-base-content/20 bg-base-100/60 backdrop-blur-sm p-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                                <img
                                    src={`${skill.icon}`}
                                    className="w-10 h-10"
                                    alt={`${skill.alt}`}
                                />
                            </div>
                            <span className="text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
}
