import React from "react"
import { ZoomInIcon } from "@heroicons/react/solid"

export default function RehearsalCard({
  students,
  show,
  setModalImage,
  setShowModal,
}) {
  return (
    <div>
      <h3 className="text-2xl leading-6 text-ascendance pb-3 font-bold">
        Show {show}
      </h3>
      <div className="bg-white rounded-lg shadow border-solid border-gray-100 mb-5">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-tr-lg rounded-tl-lg "></div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3">
          {students.map(student => (
            <li
              key={`${student.id}${student.show}`}
              className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col px-3 pb-3 md:p-3 lg:px-8 lg:pb-8">
                <h2 className="text-4xl font-bold text-ascendance"></h2>
                <h3 className="text-xl leading-6 font-medium text-ascendance">
                  {student.name}
                </h3>
                <h4>{student.time}</h4>
                <p className="text-sm text-gray-600 my-1">
                  10466 NW 31st Terrace Doral, FL 33172
                </p>
                <p className="text-sm text-ascendance mb-4">
                  Please arrive wearing the costume in the picture below
                </p>
                <div
                  className="relative w-48 h-48 mx-auto bg-cover rounded-lg cursor-pointer"
                  style={{
                    backgroundImage: `url(${student.pictures[0].thumbnails.large.url})`,
                  }}
                  onClick={() => {
                    setModalImage(student.pictures[0].thumbnails.large.url)
                    setShowModal(true)
                  }}
                >
                  <ZoomInIcon
                    className="w-5 h-5 text-ascendance absolute top-2 right-2"
                    aria-hidden="true"
                  />
                </div>
                <a
                  className="bg-ascendance text-white px-3 py-2 rounded mx-auto mt-2"
                  href={student.pictureLink}
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  Buy your recital pictures{" "}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
