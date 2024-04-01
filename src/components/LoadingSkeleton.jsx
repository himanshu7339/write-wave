import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-3">
    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-green-900"></div>
    <h1>Loading......</h1>
  </div>
  )
}

export default LoadingSkeleton