import React from 'react'

export default function ProjectContentList({ title, list}) {
  return (
    <div className="flex flex-col space-y-6">
    <div className="flex items-center space-x-6">
      <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
    <div>
      {list.map((item, index) => (
        <div className="flex items-center space-x-2">
          <span className="rounded-md w-2 md:w-2 h-0.5 bg-accent"></span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
