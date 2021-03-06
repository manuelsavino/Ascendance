import React, { useEffect, useState, useRef } from "react"

import { v4 as uuidv4 } from "uuid"
import {
  ScheduleDay,
  DanceClassBlock,
  DanceClassDetail,
  DanceClassTime,
  DayContainer,
  NoResultsContainer,
  NoResultsImage,
  ScheduleFilterTitle,
} from "./scheduleStyled"
import { TryButton, VirtualLink } from "../FreeClass/freeClassStyled"
import { SubHeading } from "../common/copy"
import "./styledChecks.css"
import Loading from "../../images/loading.svg"
import NoResults from "../../images/noResults.svg"
import PropTypes from "prop-types"
import withLocation from "../withLocation"

const ScheduleViewer = ({ danceStyle, heading, virtual, search }) => {
  const didMountRef = useRef(false)
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [loading, setLoading] = useState(true)
  const [typeFilters, setTypeFilters] = useState({
    Ballet: false,
    Tap: false,
    "Hip Hop": false,
    Jazz: false,
    Contemporary: false,
    Lyrical: false,
    Flamenco: false,
    Acrobatics: false,
  })
  const [ageFilters, setAgeFilters] = useState({
    "3-4": false,
    "5-6": false,
    "7-9": false,
    "10-12": false,
    Teens: false,
  })
  const daysDic = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  }

  const [days, setDays] = useState([])

  const filterDay = data => {
    let tempDays = []
    data.forEach(dclass => {
      if (!tempDays.includes(dclass.fields.Day))
        tempDays.push(dclass.fields.Day)
    })
    setDays(tempDays)
  }

  const fetchSchedule = async () => {
    const res = await fetch("/.netlify/functions/getSchedule")
    const data = await res.json()
    data.records = data.records.filter(danceClass => danceClass.fields.Prod)
    if (danceStyle) {
      const preFiltered = data.records.filter(danceClass =>
        danceClass.fields.Type.includes(danceStyle)
      )
      filterDay(preFiltered)
      setDisplayData(preFiltered)
      setData(preFiltered)
    } else if (virtual) {
      const day = new Date().getDay()
      const preFilteredDay = data.records.filter(
        danceClass => danceClass.fields.Day === day
      )
      filterDay(preFilteredDay)
      setDisplayData(preFilteredDay)
      setData(preFilteredDay)
    } else if (
      search.age &&
      ageFilters.hasOwnProperty(
        search.age.charAt(0).toUpperCase() + search.age.slice(1)
      )
    ) {
      //If query param is passed ti filter by age
      let age = search.age.charAt(0).toUpperCase() + search.age.slice(1)
      setAgeFilters({
        ...ageFilters,
        [age]: !ageFilters[age],
      })

      console.log(age)
      const filteredByAge = data.records.filter(
        danceClass => danceClass.fields.Age === age
      )

      setData(data.records)
      setDisplayData(filteredByAge)
      filterDay(filteredByAge)
    } else if (
      search.style &&
      typeFilters.hasOwnProperty(
        search.style.charAt(0).toUpperCase() + search.style.slice(1)
      )
    ) {
      //If query param is passed style filter by style
      let danceStyle =
        search.style.charAt(0).toUpperCase() + search.style.slice(1)
      setTypeFilters({
        ...typeFilters,
        [danceStyle]: !typeFilters[danceStyle],
      })

      const preFiltered = data.records.filter(danceClass =>
        danceClass.fields.Type.includes(danceStyle)
      )

      setData(data.records)
      setDisplayData(preFiltered)
      filterDay(preFiltered)
    } else {
      setData(data.records)
      setDisplayData(data.records)
      filterDay(data.records)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchSchedule()
    // eslint-disable-line no-use-before-define
  }, [])

  const handleTypeFilterChage = e => {
    setTypeFilters({
      ...typeFilters,
      [e.target.name]: !typeFilters[e.target.name],
    })
  }

  const handleAgeFilterChage = e => {
    setAgeFilters({
      ...ageFilters,
      [e.target.name]: !ageFilters[e.target.name],
    })
  }

  useEffect(() => {
    if (didMountRef.current) applyFilters()
    else didMountRef.current = true
  }, [typeFilters, ageFilters])

  const applyFilters = () => {
    let typeFiltered = Object.keys(typeFilters).filter(
      filter => typeFilters[filter] === true
    )

    let ageFiltered = Object.keys(ageFilters).filter(
      filter => ageFilters[filter] === true
    )

    if (typeFiltered.length || ageFiltered.length) {
      let filtereddata = []
      if (typeFiltered.length) {
        filtereddata = data.filter(danceClass => {
          let danceStyles = danceClass.fields.Type.split(",")
          if (danceStyles.length === 1)
            return typeFiltered.includes(danceClass.fields.Type)
          else {
            return (
              typeFiltered.includes(danceStyles[0]) ||
              typeFiltered.includes(danceStyles[1])
            )
          }
        })
      }

      if (ageFiltered.length) {
        if (!filtereddata.length) {
          filtereddata = data.filter(danceClass =>
            ageFiltered.includes(danceClass.fields.Age)
          )
        } else {
          filtereddata = filtereddata.filter(danceClass =>
            ageFiltered.includes(danceClass.fields.Age)
          )
        }
      }
      setDisplayData(filtereddata)
      filterDay(filtereddata)
    } else {
      setDisplayData(data)
      filterDay(data)
    }
  }

  if (loading) {
    return (
      <img
        style={{ display: "block", margin: "auto" }}
        alt="loading image animation"
        src={Loading}
      />
    )
  }

  return (
    <div>
      {heading && (
        <SubHeading style={{ textAlign: "left" }}>{heading}</SubHeading>
      )}
      <div style={{ display: "flex" }}>
        <div>
          {heading ? (
            <ScheduleFilterTitle>Ages</ScheduleFilterTitle>
          ) : (
            <SubHeading>Ages</SubHeading>
          )}

          <ul className="ks-cboxtags">
            {Object.keys(ageFilters).map(ageFilter => {
              return (
                <li key={uuidv4()}>
                  <input
                    type="checkbox"
                    id={ageFilter}
                    name={ageFilter}
                    onChange={handleAgeFilterChage}
                    checked={ageFilters[ageFilter]}
                  />
                  <label htmlFor={ageFilter}>{ageFilter}</label>
                </li>
              )
            })}
          </ul>
        </div>
        {!danceStyle && (
          <div style={{ marginLeft: "20px" }}>
            <SubHeading>Styles</SubHeading>
            <ul className="ks-cboxtags">
              {Object.keys(typeFilters).map(typeFilter => {
                return (
                  <li key={uuidv4()}>
                    <input
                      type="checkbox"
                      id={typeFilter}
                      name={typeFilter}
                      onChange={handleTypeFilterChage}
                      checked={typeFilters[typeFilter]}
                    />
                    <label htmlFor={typeFilter}>{typeFilter}</label>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      {displayData.length ? (
        <DayContainer>
          {days.map((day, i) => {
            return (
              <div key={uuidv4()} style={{ margin: "2px", flex: "1" }}>
                <ScheduleDay>{daysDic[day]}</ScheduleDay>
                {displayData
                  .filter(danceC => danceC.fields.Day === day)
                  .map(danceClass => {
                    return (
                      <DanceClassBlock i={i} key={uuidv4()}>
                        <div>
                          <DanceClassDetail>
                            {danceClass.fields.Name}
                          </DanceClassDetail>
                          <DanceClassTime>
                            {danceClass.fields.Time}
                          </DanceClassTime>
                          {!virtual ? (
                            <TryButton
                              schedule
                              i={i}
                              to={`/free?class=${danceClass.fields.classId}&prefill=${danceClass.fields.preFill}`}
                            >
                              Try Class Free
                            </TryButton>
                          ) : (
                            <VirtualLink
                              schedule
                              i={i}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={danceClass.fields.GoogleMeetLink}
                            >
                              Join Class
                            </VirtualLink>
                          )}
                        </div>
                        <DanceClassDetail>
                          {/* Instructor: {danceClass.fields.Instructor} */}
                          Ages: {danceClass.fields.Age}
                        </DanceClassDetail>
                      </DanceClassBlock>
                    )
                  })}
              </div>
            )
          })}
        </DayContainer>
      ) : (
        <NoResultsContainer>
          <SubHeading>No Results Found...</SubHeading>
          <NoResultsImage src={NoResults} />
        </NoResultsContainer>
      )}
    </div>
  )
}

ScheduleViewer.propTypes = {
  search: PropTypes.object,
}

export default withLocation(ScheduleViewer)
