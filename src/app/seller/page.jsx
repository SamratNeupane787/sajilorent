import { auth } from '@/auth'
import React from 'react'

export async function page() {
  const session = await auth()
  if(session)
  return (
    <div>
      {session.user.email}
    </div>
  )
  else
  return<div>Not Logged In</div>
}

export default page
