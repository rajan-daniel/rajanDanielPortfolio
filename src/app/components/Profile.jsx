import { socials } from "@/data/data";
import { about } from "@/data/data";

export default function Profile() {
  return (
    <>
      <img
        src="https://i.imgur.com/RHQLyzB.jpeg"
        className="w-[100px] h-[100px] rounded-[50%] object-cover object-center"
        alt={`${about.name}'s profile`}
      />
      <div className="flex gap-[5px] items-center mt-1">
        <h1 className="text-2xl font-semibold">{about.name}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
        </svg>
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        <p className="text-base text-base-content/60">{about.role} // </p>
        <p className="underline cursor-pointer text-base-content/90">Solo</p>
      </div>
      <div className="flex items-center mt-3 gap-3">
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

        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
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
        {/*
        <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
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
            className="lucide lucide-facebook-icon lucide-facebook cursor-pointer"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
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
            className="lucide lucide-twitter-icon lucide-twitter cursor-pointer"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
*/}
      </div>
    </>
  );
}
