import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Master() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}
