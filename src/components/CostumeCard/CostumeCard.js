import React from "react"
import { ZoomInIcon } from "@heroicons/react/solid"
import Moment from "react-moment"
import moment from "moment"
import AddToCalendar from "@culturehq/add-to-calendar"
import TabArea from "./TabArea"

export default function CostumeCard({
  student,
  setModalImage,
  setShowModal,
  setVideo,
}) {
  return (
    <div className="bg-white rounded-lg shadow border-solid border-gray-100 mb-5">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-tr-lg rounded-tl-lg ">
        <h3 className="text-xl leading-6 font-medium text-ascendance">
          {student.name}
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3">
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
                <p className="text-sm text-gray-600 mb-4">
                  Arrive 30 Minutes before your scheduled time.
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
                <h3 className="mt-4 text-gray-600 text-lg font-medium">
                  {costume.class}
                </h3>
                <div className="mt-2 flex flex-grow flex-col justify-between">
                  <div className="">
                    <TabArea
                      costume={costume}
                      setVideo={setVideo}
                      setShowModal={setShowModal}
                    />
                  </div>
                  <div className="flex justify-center space-x-2 mt-3"></div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
