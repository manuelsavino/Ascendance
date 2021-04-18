import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/Modal/Modal"
import { useForm } from "react-hook-form"
import LoadingImage from "../images/loading.svg"
import NoResults from "../images/noResults.svg"
import { ZoomInIcon } from "@heroicons/react/solid"

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
    addScript("https://paperform.co/__embed")
  }, [])

  const { register, handleSubmit, errors } = useForm()
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
          <div className="p-5 flex justify-center">
            <img className="max-w-md" src={modalImage} />
          </div>
        </Modal>
      )}

      <SEO title="Costumes" />
      <div className="container py-2 px-5 mx-auto min-h-full">
        <h1 className="text-3xl md:text-6xl text-gray-800 font-bold mt-8 md:my-4">
          Recital Costumes
        </h1>
        {!makePayment && (
          <div className="min-h-screen">
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quis delectus nemo quam culpa laudantium cupiditate, architecto
              consequatur dolore impedit est repudiandae. Possimus voluptas
              quisquam corrupti nostrum cumque odit ipsam?
            </p>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              {!loading && students.length === 0 && (
                <form
                  className="flex flex-col  md:flex-row my-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="flex md:items-center flex-col md:flex-row text-base md:text-lg text-gray-600">
                    Phone Number
                    <input
                      type="tel"
                      className="pl-2 mb-2 md:mb-0 md:ml-2 h-10 rounded-md"
                      name="phone"
                      maxLength="10"
                      placeholder="7862221111"
                      {...register("phone")}
                    />
                  </label>
                  <button
                    className="md:ml-3 bg-ascendance text-white px-2 md:px-4 py-2 rounded-md"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              )}
              {!loading && students.length > 0 && (
                <button
                  className="my-3 bg-green-500 text-white px-2 md:px-4 py-2 rounded-md"
                  type="submit"
                  onClick={() => setMakePayment(true)}
                >
                  Make Payment {`$${calculateTotal()}.00`}
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
                <div
                  key={student.id}
                  className="bg-white rounded-lg shadow mb-5"
                >
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-tr-lg rounded-tl-lg ">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {student.name}
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3">
                    {student.costumes.length > 0 &&
                      student.costumes.map(costume => (
                        <li
                          key={costume.id}
                          className="col-span-1 flex flex-col text-center bg-white rounded-lg md:border md:border-gray-50 shadow-sm divide-y divide-gray-200"
                        >
                          <div className="flex-1 flex flex-col p-8">
                            <div
                              className="relative w-48 h-48 mx-auto bg-cover rounded-lg"
                              style={{
                                backgroundImage: `url(${costume.images[0].thumbnails.large.url})`,
                              }}
                              onClick={() => {
                                setModalImage(
                                  costume.images[0].thumbnails.full.url
                                )
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
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                              <dd className="text-gray-500 text-sm">
                                ${costume.price}
                              </dd>
                            </dl>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
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
