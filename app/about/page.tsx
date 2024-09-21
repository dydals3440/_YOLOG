import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SiteConfig from '@/config/site'
import { Metadata } from 'next'
import MaxWidthWrapper from '@/components/max-width-wrapper'

export const metadata: Metadata = {
  title: 'About me',
  description: 'Information about me',
}

const About = () => {
  return (
    <MaxWidthWrapper className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={SiteConfig.author} />
            <AvatarFallback>YM</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {SiteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            {SiteConfig.job}
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          {SiteConfig.introduce}
        </p>
      </div>
    </MaxWidthWrapper>
  )
}

export default About
