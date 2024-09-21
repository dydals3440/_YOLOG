import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import SiteConfig from '@/config/site'
import Link from 'next/link'
import MaxWidthWrapper from '@/components/max-width-wrapper'

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <MaxWidthWrapper className="px-5 container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bold text-balance">
            Welcome To {SiteConfig.title}
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            저의 개발블로그에 오신 것을 환영합니다~!!
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              포스트 보기
            </Link>
            <Link
              href={SiteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-fit',
              )}
            >
              {SiteConfig.author}의 GitHub
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-30">
        <h2 className="text-3xl mb-10 sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {/*{latestPosts.map((post) => (*/}
          {/*  <li key={post.slug} className="first:border-t first:border-border">*/}
          {/*    <PostItem*/}
          {/*      slug={post.slug}*/}
          {/*      title={post.title}*/}
          {/*      description={post.description}*/}
          {/*      date={post.date}*/}
          {/*    />*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      </section>
    </>
  )
}
