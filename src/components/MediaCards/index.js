import React from "react"

export default function MediaCard({
  image,
  heading,
  subHeading,
  body,
  showModal,
  setVideo,
  modalvideo,
  url,
  hash,
}) {
  return (
    <li id={hash}>
      <a
        href={modalvideo === true ? "#" : url}
        target={modalvideo === true ? "" : "_blank"}
        rel="noopener"
      >
        <div className="space-y-4">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="object-cover shadow-lg rounded-lg"
              src={image}
              alt="test"
              onClick={
                modalvideo
                  ? () => {
                      setVideo(url)
                      showModal()
                    }
                  : null
              }
            />
          </div>
          <div
            className="text-lg leading-6 font-medium space-y-1"
            onClick={
              modalvideo
                ? () => {
                    setVideo(url)
                    showModal()
                  }
                : null
            }
          >
            <h3>{heading}</h3>
            <p className="text-ascendance">{subHeading}</p>
          </div>
          <div className="text-lg">
            <p className="text-gray-500">{body}</p>
          </div>
        </div>
      </a>
    </li>
  )
}
