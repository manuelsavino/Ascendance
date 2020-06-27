import React, { useEffect, useState } from "react"

export default function ScheduleViewer() {
  const [data, setData] = useState([])
  const [filters, setFilters] = useState({
    ballet: false,
    Tap: false,
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
      if (tempDays.indexOf(dclass.fields.Day) === -1)
        tempDays.push(dclass.fields.Day)
    })
    setDays(tempDays)
  }

  const fetchSchedule = async () => {
    const res = await fetch("/.netlify/functions/getSchedule")
    const data = await res.json()
    filterDay(data.records)
    setData(data.records)
  }
  useEffect(() => {
    fetchSchedule()
  }, [])

  const handleChage = e => {
    setFilters({ ...filters, [e.target.name]: !filters[e.target.name] })
  }

  useEffect(() => {
    console.log("Apply filters ran")
    applyFilters()
  }, [filters])

  const applyFilters = () => {
    // const appliedFilters = Object.keys(filters).filter(
    //   filter => filters[filter] === true
    // )
    const appliedFilters = ["Ballet"]
    let filtereddata = data.filter(
      danceClass => danceClass.fields.Type === appliedFilters[0]
    )
    setData(filtereddata)
  }

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <div style={{ margin: "100px auto" }}>
      <h2>Schedule</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="ballet"
            onChange={handleChage}
            checked={filters.ballet}
          />
          <span>Ballet</span>
        </label>
      </div>
      <div style={{ display: "flex", width: "80%", margin: "auto" }}>
        {days.map(day => {
          return (
            <div style={{ margin: "10px" }}>
              <h2>{daysDic[day]}</h2>
              {data
                .filter(danceC => danceC.fields.Day === day)
                .map(danceClass => {
                  return (
                    <div
                      style={{
                        padding: "10px",
                        margin: "10px 0",
                        background: "#D17187",
                        color: "#FFF",
                        minHeight: "100px",
                      }}
                    >
                      <p>{danceClass.fields.Name}</p>
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
