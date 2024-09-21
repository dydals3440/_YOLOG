'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ILinkType {
  id: string
  text: string
}

const OnThisPage = ({
  htmlContent,
  className,
}: {
  htmlContent: string
  className: string
}) => {
  const [links, setLinks] = useState<null | ILinkType[]>(null)
  useEffect(() => {
    const temp = document.createElement('div')
    temp.innerHTML = htmlContent

    // Check This Syntax
    const headings = temp.querySelectorAll('h2, h3, h4')
    const generatedLinks: ILinkType[] = []
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`
      generatedLinks.push({
        id,
        text: (heading as HTMLElement).innerText,
      })
    })
    setLinks(generatedLinks)
  }, [htmlContent])
  return (
    <div className={cn('hidden md:block', className)}>
      <div className="sticky top-20">
        <h2>On This Page</h2>
        <ul className="not-prose text-xs">
          {links &&
            links.map((link) => {
              return (
                <li key={link.id} className="pt-1 mt-2">
                  <a href={`#${link.id}`}>
                    {link.text.slice(0, 50)}
                    {link.text.length > 50 ? '...' : ''}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default OnThisPage
