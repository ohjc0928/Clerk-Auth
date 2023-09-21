import React from 'react'
import Link from 'next/link'

//async function fecthCourses() {
//  const url = 'http://localhost:3000/api/courses'
//  const response = await fetch(url)
//  const courses = response.json()
//  return courses
//}

const Courses = async ({ courses }) => {
  //  const courses = await fecthCourses()

  return (
    <div className="grid-1 ">
      {courses?.map((course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg">
                    <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses
