import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/common/layout"
import { useForm } from "react-hook-form"
import LoadingImage from "../images/loading.svg"
import { navigate } from "gatsby"

const Index = () => {
  const [noResults, setNoResults] = useState(false)
  const [loading, setLoading] = useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async formdata => {
    setLoading(true)
    setNoResults(false)
    const res = await fetch(
      `/.netlify/functions/getAuditionResults?phone=${
        formdata.phone
      }&audNum=${formdata.audNum.toUpperCase()}`
    )
    const data = await res.json()
    if (data.student.length > 0) {
      const name = data.student[0].fields["Student First Name"]
      const img = data.student[0].fields.Picture[0].thumbnails.large.url
      navigate(`/audition-results?name=${name}&img=${img}`)
    } else {
      setLoading(false)
      setNoResults(true)
    }
  }

  return (
    <Layout>
      <SEO title="Audition Results" />
      <Container>
        <div className="pt-10">
          <form
            className="flex flex-col  md:flex-col my-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-sm text-ascendance pb-1 md:pb-2">
              Please enter the phone number you have registered at the studio
            </p>
            <div className="flex flex-col md:flex-row items-start">
              <label className="flex md:items-center flex-col md:flex-row text-md md:text-lg text-gray-600 w-full md:w-auto">
                Phone Number
                <span>
                  <input
                    type="tel"
                    className="pl-2 mb-2 md:mb-0 md:ml-2 h-12 rounded-md w-full"
                    name="phone"
                    onChange={() => {
                      setNoResults(false)
                    }}
                    maxLength="10"
                    placeholder="7862221111"
                    {...register("phone", { required: true })}
                  />
                </span>
              </label>
              <label className="flex md:items-center flex-col md:flex-row text-md md:text-lg text-gray-600 md:pl-5 w-full md:w-auto">
                Audition Number
                <span>
                  <input
                    type="tel"
                    className="pl-2 mb-2 md:mb-0 md:ml-2 h-12 rounded-md w-full"
                    name="audNum"
                    maxLength="2"
                    onChange={() => setNoResults(false)}
                    placeholder="Z3"
                    {...register("audNum", { required: true })}
                  />
                </span>
              </label>

              <button
                className="md:ml-4 bg-ascendance h-12 text-white md:px-6 rounded-md w-full md:w-auto mt-4 md:mt-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {loading && <img src={LoadingImage} />}
        {noResults && (
          <p className="text-red-500">Sorry, no results found. Try Again</p>
        )}
      </Container>
    </Layout>
  )
}

export default Index
