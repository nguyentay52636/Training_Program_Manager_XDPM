import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AdminPages() {

  return <Navigate to="/admin/dashboard" replace={true} />
}
