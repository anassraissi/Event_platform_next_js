import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import React from 'react'
const page = () => {
    const {sessionClaims}=auth();   
//const {sessionClaims}=auth();: Calls the auth function imported from @clerk/nextjs to get information about the current user's session. 
//It destructures the sessionClaims object from the result.

    const userId=sessionClaims?.userId as String;  // conserdret as string
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
        </section>
        <div className="wrapper my-8">
            <EventForm userId={userId} type="Create" />
        </div>
    </>
  )
}

export default page