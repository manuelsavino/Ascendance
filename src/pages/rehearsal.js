import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/Modal/Modal"
import RehearsalCard from "../components/CostumeCard/RehearsalCard"
import { useForm } from "react-hook-form"
import LoadingImage from "../images/loading.svg"
import NoResults from "../images/noResults.svg"

const Rehearsal = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async formdata => {
    setLoading(true)
    setStudents([])
    const res = await fetch(
      `/.netlify/functions/getRehearsalCostume?phone=${formdata.phone}`
    )
    const data = await res.json()
    setStudents(data.student)
    setLoading(false)
  }

  return (
    <Layout>
      {showModal && (
        <Modal close={() => setShowModal(false)}>
          <div className="p-5 flex justify-center items-start">
            <img
              className="max-w-sm max-h-screen object-contain"
              src={modalImage}
            />
          </div>
        </Modal>
      )}

      <Seo title="Rehearsal" />
      <div className="container py-2 px-5 mx-auto min-h-full">
        <h1 className="text-3xl md:text-5xl text-gray-600 font-bold mt-8 md:my-5">
          Rehearsal Day
        </h1>
        <div className="min-h-screen">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            {!loading && students.length === 0 && (
              <form
                className="flex flex-col  md:flex-col my-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="text-sm text-ascendance pb-1 md:pb-2">
                  Please enter the phone number you have registered at the
                  studio
                </p>
                <div className="flex flex-col md:flex-row items-start">
                  <label className="flex md:items-center flex-col md:flex-row text-sm md:text-lg text-gray-600">
                    Phone Number
                    <span>
                      <input
                        type="tel"
                        className="pl-2 mb-2 md:mb-0 md:ml-2 h-10 rounded-md"
                        name="phone"
                        maxLength="10"
                        placeholder="7862221111"
                        {...register("phone", { required: true })}
                      />
                    </span>
                  </label>

                  <button
                    className="md:ml-3 bg-ascendance text-white px-2 md:px-4 py-2 rounded-md"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            )}
          </div>
          {loading && (
            <img
              style={{ display: "block", margin: "auto" }}
              alt="loading image animation"
              src={LoadingImage}
            />
          )}
          {loading === false && students.length === 0 && (
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-ascendance text-4xl font-semibold mb-10">
                No Results Found
              </h2>
              <img
                className="w-96"
                style={{ display: "block", margin: "auto" }}
                alt="loading image animation"
                src={NoResults}
              />
            </div>
          )}
          {students.length > 0 &&
            students.filter(show => show.show === "Show 1").length > 0 && (
              <RehearsalCard
                key="show1"
                show={1}
                students={students.filter(show => show.show === "Show 1")}
                setModalImage={setModalImage}
                setShowModal={setShowModal}
              />
            )}

          {students.length > 0 &&
            students.filter(show => show.show === "Show 2").length > 0 && (
              <RehearsalCard
                key="show2"
                show={2}
                students={students.filter(show => show.show === "Show 2")}
                setModalImage={setModalImage}
                setShowModal={setShowModal}
              />
            )}
        </div>
      </div>
    </Layout>
  )
}

export default Rehearsal
