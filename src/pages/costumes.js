import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/Modal/Modal"
import CostumeCard from "../components/CostumeCard/CostumeCardNoSchedule"
import { useForm } from "react-hook-form"
import LoadingImage from "../images/loading.svg"
import NoResults from "../images/noResults.svg"
import { navigate } from "gatsby"

const Costumes = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [makePayment, setMakePayment] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
    navigate("/pictures")
    // addScript("https://paperform.co/__embed")
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async formdata => {
    setLoading(true)
    setStudents([])
    const res = await fetch(
      `/.netlify/functions/getStudentCostumes?phone=${formdata.phone}`
    )
    const data = await res.json()
    setStudents(data.student)
    setLoading(false)
  }

  const calculateTotal = () => {
    let total = 0.0
    students.forEach(each => {
      each.costumes.forEach(costume => {
        total += costume.price
      })
    })
    return total
  }

  const getStudentIds = () => {
    const ascIds = students.map(
      (student, i) => `Studentid${i + 1}=${student.ascId}`
    )
    return ascIds.join("&")
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

      <Seo title="Costumes" />
      <div className="container py-2 px-5 mx-auto min-h-full">
        <h1 className="text-3xl md:text-6xl text-gray-800 font-bold mt-8 md:my-2">
          Recital Costumes
        </h1>
        {!makePayment && (
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
              {!loading && students.length > 0 && (
                <button
                  className="my-3 bg-green-500 text-white px-2 md:px-4 py-2 rounded-md"
                  type="submit"
                  onClick={() => {
                    setMakePayment(true)
                    if (window) {
                      window.scrollTo(0, 0)
                    }
                  }}
                >
                  {students[0].language === "English"
                    ? `Make Payment $${calculateTotal()}.00`
                    : `Hacer Pago $${calculateTotal()}.00`}
                </button>
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
              students.map(student => (
                <CostumeCard
                  key={student.id}
                  student={student}
                  setModalImage={setModalImage}
                  setShowModal={setShowModal}
                />
              ))}
            <div className="bg-white rounded-lg shadow mb-5">
              <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-tr-lg rounded-tl-lg ">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Important Dates
                </h3>
              </div>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3">
                <li className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200">
                  <div className="flex-1 flex flex-col p-3 md:p-3 lg:p-2">
                    <h4 className="text-ascendance font-semibold">
                      Payment Deadline
                    </h4>
                    <p className="text-sm text-gray-600">
                      Saturday April 24th, 2021
                    </p>
                  </div>
                </li>
                <li className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200">
                  <div className="flex-1 flex flex-col p-3 md:p-3 lg:p-2">
                    <h4 className="text-ascendance font-semibold">
                      Pictures (at the studio)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Thursday May 20th, 2021
                    </p>
                    <p className="text-sm text-gray-600">
                      Friday May 21st, 2021
                    </p>
                  </div>
                </li>
                <li className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200">
                  <div className="flex-1 flex flex-col p-3 md:p-3 lg:p-2">
                    <h4 className="text-ascendance font-semibold">
                      Dress Rehearsal (at the studio)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Saturday June 5th, 2021
                    </p>
                  </div>
                </li>
                <li className="col-span-1 flex flex-col justify-start text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200">
                  <div className="flex-1 flex flex-col p-3 md:p-3 lg:p-2">
                    <h4 className="text-ascendance font-semibold">
                      Recital Shows
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sunday June 6th,2021
                    </p>
                  </div>
                </li>
              </ul>
              <p className="p-3 text-sm text-gray-600">
                Note: We already measured all students to determine their
                costume sizes.
              </p>
            </div>
          </div>
        )}
        {makePayment && students.length > 0 && (
          <div className="min-h-screen">
            <div
              style={{ marginTop: "30px" }}
              data-prefill={`parentfn=${students[0].parentF}&parentln=${
                students[0].parentL
              }&email=${students[0].email}&phone=${
                students[0].phone
              }&price=${calculateTotal()}&${getStudentIds()}`}
              data-paperform-id="8qmoewsr"
            ></div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Costumes
