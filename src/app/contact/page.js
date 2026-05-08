import React from "react";
import { forms, seo } from "@/data/data";
import { socials } from "@/data/data";

export const metadata = {
  title: `Contact Me | ${seo.title}`,
  description:
    "Get in touch with me to discuss projects, collaborations, or just to say hello.",
  keywords:
    "contact, get in touch, collaboration, email, message, web developer",
};

function Contact() {
  return (
    <>
      <div className="md:w-[700px] w-[100%] mt-5 p-4">
        <main className="flex flex-col gap-2">
          <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
            Contact Me
          </h1>
          <div className="flex flex-row gap-2">
            <h1 className="">me@rajandaniel.com</h1>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github cursor-pointer"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
                        0 16 .513 16 1.146v13.708c0 .633-.526 
                        1.146-1.175 1.146H1.175C.526 16 0 
                        15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212
                        c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
                        3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 
                        8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                        1.232-.878.869 0 1.216.662 1.216 
                        1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                        0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 
                        0 7.225 0 7.225z"
                />
              </svg>
            </a>
          </div>

          <div className="p-1">
            <form
              action={forms.formspreeUrl}
              method="POST"
              className="flex flex-col"
            >
              <div>
                <div>
                  <span className="uppercase text-sm text-base-content/80 font-bold">
                    Full Name
                  </span>
                  <input
                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mt-3">
                  <span className="uppercase text-sm text-base-content/80 font-bold">
                    Email
                  </span>
                  <input
                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mt-3">
                  <span className="uppercase text-sm text-base-content/80 font-bold">
                    Message
                  </span>
                  <textarea
                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="mt-2">
                  <button className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/95 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <h1 className="">Powered by ©2026 Formspree, Inc.</h1>
        </main>
      </div>
    </>
  );
}

export default Contact;
