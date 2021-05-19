import React, { useState } from "react"

export default function TabArea({ costume, setShowVModal, setVideo }) {
  const [current, setCurrent] = useState("Hair")

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  const tabs = {
    Hair: { name: "Hair", href: "#", desc: costume.hair },
    Shoes: { name: "Shoes", href: "#", desc: costume.shoes },
    Tights: { name: "Tights", href: "#", desc: costume.tights },
    Earrings: { name: "Earrings", href: "#", desc: costume.earrings },
    Makeup: { name: "Makeup", href: "#", desc: costume.makeup },
  }
  return (
    <div className="h-40">
      <div className="">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {Object.keys(tabs).map(tab => (
              <button
                key={tabs[tab].name}
                onClick={() => {
                  setCurrent(tabs[tab].name)
                }}
                className={classNames(
                  tabs[tab].name === current
                    ? "border-ascendance text-ascendance"
                    : "border-transparent text-gray-600 hover:text-gray-700 hover:border-gray-300",
                  "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm focus:outline-none"
                )}
                aria-current={tabs[tab].current ? "page" : undefined}
              >
                {tabs[tab].name}
              </button>
            ))}
            {costume.others && (
              <button
                onClick={() => {
                  setCurrent("Others")
                }}
                className={classNames(
                  "Others" === current
                    ? "border-ascendance text-ascendance"
                    : "border-transparent text-gray-600 hover:text-gray-700 hover:border-gray-300",
                  "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm focus:outline-none"
                )}
              >
                Others
              </button>
            )}
          </nav>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        {current === "Others" ? <>{costume.others}</> : tabs[current].desc}
      </p>
      <div className="flex justify-center space-x-2 mt-3">
        {costume.makeupVideo && current === "Makeup" && (
          <button
            onClick={() => {
              setVideo(costume.makeupVideo)
              setShowVModal(true)
            }}
            className="flex justify-center items-center  bg-ascendance text-white text-sm  px-2 py-1 rounded"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path>
            </svg>
            Makeup Video
          </button>
        )}
        {costume.hairVideo && current === "Hair" && (
          <button
            onClick={() => {
              setVideo(costume.hairVideo)
              setShowVModal(true)
            }}
            className="flex justify-center items-center  bg-ascendance text-white text-sm  px-2 py-1 rounded"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path>
            </svg>
            Hair Video
          </button>
        )}
      </div>
    </div>
  )
}
