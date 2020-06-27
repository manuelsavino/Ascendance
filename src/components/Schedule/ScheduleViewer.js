import React, { useEffect, useState, useRef } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ScheduleViewer() {
  const didMountRef = useRef(false)
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
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

  if (!displayData) {
    return <div>Loading...</div>
  }
  return (
    <div style={{ margin: "100px auto" }}>
      <h2>Schedule</h2>

      <div style={{ display: "flex", width: "90%", margin: "auto" }}>
        <label>
          <input
            type="checkbox"
            name="Ballet"
            onChange={handleTypeFilterChage}
            checked={typeFilters.ballet}
          />
          <span>Ballet</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="Tap"
            onChange={handleTypeFilterChage}
            checked={typeFilters.tap}
          />
          <span>Tap</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="HipHop"
            onChange={handleTypeFilterChage}
            checked={typeFilters.HipHop}
          />
          <span>Hip-Hop</span>
        </label>
      </div>
      <div style={{ display: "flex", width: "90%", margin: "auto" }}>
        <label>
          <input
            type="checkbox"
            name="3-6"
            onChange={handleAgeFilterChage}
            checked={ageFilters["3-6"]}
          />
          <span>3-6</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="7-9"
            onChange={handleAgeFilterChage}
            checked={ageFilters["7-9"]}
          />
          <span>7-9</span>
        </label>
      </div>
      <div style={{ display: "flex", width: "90%", margin: "auto" }}>
        {days.map(day => {
          return (
            <div key={uuidv4()} style={{ margin: "2px", flex: "1" }}>
              <h2
                style={{
                  background: "#3E424D",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: "300",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {daysDic[day]}
              </h2>
              {displayData
                .filter(danceC => danceC.fields.Day === day)
                .map(danceClass => {
                  return (
                    <div
                      key={uuidv4()}
                      style={{
                        padding: "10px",
                        margin: "5px 0",
                        background: "#EA3BA1",
                        color: "#FFF",
                        minHeight: "100px",
                      }}
                    >
                      <p style={{ fontSize: ".8rem" }}>
                        {danceClass.fields.Name}
                      </p>
                      <div>{danceClass.fields.Time}</div>
                      <div>Ages: {danceClass.fields.Age}</div>
                      <div>{danceClass.fields.Instructor}</div>
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
