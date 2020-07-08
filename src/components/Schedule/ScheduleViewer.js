import React, { useEffect, useState, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import {
  ScheduleDay,
  DanceClassBlock,
  DanceClassDetail,
  DanceClassTime,
  DayContainer,
  TryButton,
  ScheduleTitle,
  FilterCat,
} from "./styled"
import "./styledChecks.css"

export default function ScheduleViewer() {
  const didMountRef = useRef(false)
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [loading, setLoading] = useState(true)
  const [typeFilters, setTypeFilters] = useState({
    Ballet: false,
    Tap: false,
    HipHop: false,
    Jazz: false,
    Contemporary: false,
    Lyrical: false,
  })
  const [ageFilters, setAgeFilters] = useState({
    "3-6": false,
    "7-9": false,
    "10-12": false,
    "12+": false,
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
    filterDay(data.records)
    setData(data.records)
    setDisplayData(data.records)
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
        filtereddata = data.filter(danceClass =>
          typeFiltered.includes(danceClass.fields.Type)
        )
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
    return <div>Loading...</div>
  }

  return (
    <div style={{ margin: "85px auto", width: "90%" }}>
      <ScheduleTitle>Schedule</ScheduleTitle>
      <div style={{ display: "flex" }}>
        <div>
          <FilterCat>Styles</FilterCat>
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
                  <label for={typeFilter}>{typeFilter}</label>
                </li>
              )
            })}
          </ul>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <FilterCat>Ages</FilterCat>
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
                  <label for={ageFilter}>{ageFilter}</label>
                </li>
              )
            })}
          </ul>
        </div>
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
                          <TryButton
                            i={i}
                            to={`/PaperForm?class=${danceClass.fields.classId}`}
                          >
                            Try Class
                          </TryButton>
                        </div>
                        <DanceClassDetail>
                          Instructor: {danceClass.fields.Instructor}
                        </DanceClassDetail>
                      </DanceClassBlock>
                    )
                  })}
              </div>
            )
          })}
        </DayContainer>
      ) : (
        <div style={{ display: "flex", width: "90%", margin: "auto" }}>
          <h2>No Results...</h2>
        </div>
      )}
    </div>
  )
}
