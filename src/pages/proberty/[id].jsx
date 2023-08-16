import PropertyDetailsMain from '@/components/propertyDetails/PropertyDetailsMain'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

export default function PropertyDetails() {
   const router=useRouter()
     return (
    <div>
    <Head><title>Lesoll {router.query.id}</title></Head> 
    <PropertyDetailsMain />
    </div>
  )
}
