import { cn } from '@/lib/utils'

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
