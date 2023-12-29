import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faSlack } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -tranneutral-x-1/2 overflow-hidden blur-3xl"
        >
          <div className="overflow-hidden bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl  w-[25rem] h-[44rem] rotate-[-60deg] transform -tranneutral-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div className="overflow-hidden bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -tranneutral-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <header className="sticky top-0 inset-x-0 flex flex-wrap overflow-hide sm:justify-start sm:flex-nowrap z-[48] w-full text-sm py-2.5 sm:py-4">
          <nav
            className="flex basis-full justify-between items-center w-full mx-auto px-4 sm:px-6 md:px-8"
            aria-label="Ambrosia Nav"
          >
            <div className="">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="/"
                aria-label="Ambrosia"
              >
                Ambrosia
              </a>
            </div>
            <div className="gap-2 flex items-center">
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="/About"
              >
                About
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="https://docs.ambrosia.novabot.eu.org"
              >
                Docs
              </a>

              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="https://status.ambrosia.novabot.eu.org"
              >
                Status
              </a>
            </div>
            <button
              type="button"
              className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg duration-300 transition-all border-transparent hover:border hover:border-indigo-600 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            >
              Login
            </button>
          </nav>
        </header>

        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <div className="mt-5 max-w-2xl">
                  <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                    Server management made simpler.
                  </h1>
                </div>

                <div className="mt-5 max-w-3xl">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Ambrosia is a System Administration tool which, Watches the
                    status, Monitors server RAM, Hard disk, and CPU. Monitor
                    with ease.
                  </p>
                </div>

                <div className="mt-8 gap-3 flex justify-center">
                  <a
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Register NOW!
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800  dark:border-zinc-700 dark:shadow-neutral-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-blue-300 rounded-t-xl">
            <FontAwesomeIcon icon={faDiscord} width="90" height="90" color="#5865F2"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Discord Webhooks
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Discord
              </h3>
              <p className="mt-3 text-gray-500">
                Receive notifacations for users who are on call via Discord
                Webhooks™
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View API
              </a>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800  dark:border-zinc-700 dark:shadow-neutral-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
              <FontAwesomeIcon icon={faEnvelope} width="90" height="90" color="#f1f5f9"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                SMTP Support
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Email
              </h3>
              <p className="mt-3 text-gray-500">
                Get Notifications via email using SMTP™
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-zinc-700 dark:divide-zinc-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-zinc-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-zinc-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View API
              </a>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800  dark:border-zinc-700 dark:shadow-neutral-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-amber-300 rounded-t-xl">
              <Image className="larger" src="http://192.168.0.118:3000/slack-new-logo.svg" alt="Slacking" width="90" height="90"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                Slack Notifications
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Slack
              </h3>
              <p className="mt-3 text-gray-500">
                Receive status notif's via Slack
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
