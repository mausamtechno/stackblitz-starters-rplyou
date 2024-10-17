"use client"
 
import { Button } from '@/app/components/common/Button'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error.digest)
  }, [error])
 
  return (
    <div className='border p-8'>
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}