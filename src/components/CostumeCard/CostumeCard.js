import React, { useState } from "react"
import { ZoomInIcon } from "@heroicons/react/solid"
import Moment from "react-moment"
import moment from "moment"
import AddToCalendar from "@culturehq/add-to-calendar"

export default function CostumeCard({
  student,
  setModalImage,
  setShowModal,
  setShowVModal,
  setVideo,
}) {
  return (
    <div className="bg-white rounded-lg shadow mb-5">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-tr-lg rounded-tl-lg ">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {student.name}
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3">
        {student.costumes.length > 0 &&
          student.costumes.map((costume, i) => (
            <li
              key={costume.id}
              className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col px-3 pb-3 md:p-3 lg:px-8 lg:pb-8">
                <h2 className="text-4xl font-bold text-ascendance">{i + 1}</h2>
                <p className="text-ascendance text-xl">
                  <Moment format="dddd, MMM DD, YYYY h:mm A">
                    {costume.pictureDay}
                  </Moment>
                </p>
                <AddToCalendar
                  event={{
                    name: `${student.name} ${costume.class} Pictures`,
                    details: "",
                    location: "10466 NW 31st Terrace, Doral, FL 33172",
                    startsAt: moment(costume.pictureDay)
                      .subtract(30, "minutes")
                      .format("YYYY-MM-DDTHH:mm:ssZ"),
                    endsAt: moment(costume.pictureDay)
                      .add(20, "minutes")
                      .format("YYYY-MM-DDTHH:mm:ssZ"),
                  }}
                />
                <p>Arrive 30 MINUTES BEFORE your scheduled time.</p>
                <div
                  className="relative w-48 h-48 mx-auto bg-cover rounded-lg cursor-pointer"
                  style={{
                    backgroundImage: `url(${costume.images[0].thumbnails.large.url})`,
                  }}
                  onClick={() => {
                    setModalImage(costume.images[0].thumbnails.full.url)
                    setShowModal(true)
                  }}
                >
                  <ZoomInIcon
                    className="w-5 h-5 text-ascendance absolute top-2 right-2"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-gray-900 text-lg font-medium">
                  {costume.class}
                </h3>
                <div className="mt-2 flex flex-grow flex-col justify-between">
                  <div className="text-xs mt-3 text-left">
                    <p>
                      <span className="text-ascendance">Hair:</span>{" "}
                      {costume.hair}
                    </p>
                    <p>
                      <span className="text-ascendance">Shoes:</span>{" "}
                      {costume.shoes}
                    </p>
                    <p>
                      <span className="text-ascendance">Tights:</span>{" "}
                      {costume.tights}
                    </p>
                    <p>
                      <span className="text-ascendance">Earrings:</span>{" "}
                      {costume.earrings}
                    </p>
                    <p>
                      <span className="text-ascendance">Makeup:</span>{" "}
                      {costume.makeup}
                    </p>
                    {costume.others && (
                      <p>
                        <span className="text-ascendance">Others:</span>{" "}
                        {costume.others}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center space-x-2 mt-3">
                    {costume.hairVideo && (
                      <button
                        onClick={() => {
                          setVideo(costume.hairVideo)
                          setShowVModal(true)
                        }}
                        className="flex justify-center items-center flex-col bg-ascendance text-white text-xs w-24 h-12 px-2 py-1 rounded"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="2em"
                          width="2em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path>
                        </svg>
                        Hair Video
                      </button>
                    )}
                    {costume.makeupVideo && (
                      <button
                        onClick={() => {
                          setVideo(costume.makeupVideo)
                          setShowVModal(true)
                        }}
                        className="flex justify-center items-center flex-col bg-ascendance text-white text-xs w-24 h-12 px-2 py-1 rounded"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="2em"
                          width="2em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path>
                        </svg>
                        Makeup Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
