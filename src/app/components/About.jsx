import { about } from "../../data/data";

export default function About() {
    return (
        <>
            <div className="flex flex-col gap-2 mt-10 scroll-mt-14" id="about">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                    About
                </h2>
                <div className="flex gap-2 flex-col">
                    <p className="text-base text-base-content/80">
                        {about.about}
                    </p>
                    <p className="text-base text-base-content/80">
                        Feel free to explore my projects, tech stack, and approach to building applications below. I also share additional work over on GitHub if you’d like to dive deeper. If you’d like to connect or have any questions, don’t hesitate to reach out via{" "}
                        <a
                            href={`mailto:${about.email}`}
                            className="font-bold hover:underline cursor-pointer"
                        >
                            (Email)
                        </a>{" "}
                        Thanks for stopping by, and have an awesome rest of your day!
                    </p>
                </div>
            </div>
        </>
    );
}
