import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <main className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">
        <HashLoader/>
    </main>
  )
}

export default Loading