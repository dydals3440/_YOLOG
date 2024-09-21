import { cn } from '@/lib/utils'
import React from 'react'

interface IMaxWidthProps {
  className: string
  children: React.ReactNode
}

const MaxWidthWrapper = ({ className, children }: IMaxWidthProps) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl w-full my-12', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
