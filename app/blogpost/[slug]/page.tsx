import MaxWidthWrapper from '@/components/max-width-wrapper'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

import matter from 'gray-matter'
import fs from 'fs'
import OnThisPage from '@/components/on-this-page'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string; title: string; description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)
  console.log(searchParams)
  return {
    title: `${data.title} - YOLOG`,
    description: data.description,
  }
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings)
  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const htmlContent = (await processor.process(content)).toString()
  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex">
        <div className="flex-col items-center px-4 md:px-16 w-full">
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </div>
        <OnThisPage className="text-sm w-[50%]" htmlContent={htmlContent} />
      </div>
    </MaxWidthWrapper>
  )
}

export default BlogPage
