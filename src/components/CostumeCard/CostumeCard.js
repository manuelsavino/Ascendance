import React, { useState } from "react"
import { ZoomInIcon } from "@heroicons/react/solid"
import Moment from "react-moment"

export default function CostumeCard({ student, setModalImage, setShowModal }) {
  return (
    <div className="bg-white rounded-lg shadow mb-5">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-tr-lg rounded-tl-lg ">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {student.name}
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3">
        {student.costumes.length > 0 &&
          student.costumes.map(costume => (
            <li
              key={costume.id}
              className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col p-3 md:p-3 lg:p-8">
                <p>
                  <Moment format="MMM DD, YYYY h:MM A">
                    {costume.pictureDay}
                  </Moment>
                </p>
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
                <dl className="mt-1  flex flex-col justify-between"></dl>
                <div className="mt-2 flex justify-center flex-col">
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
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
