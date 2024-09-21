import MaxWidthWrapper from '@/components/max-width-wrapper'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

import matter from 'gray-matter'
import fs from 'fs'

const htmlContent = `
  <div style={{color: 'red'}}>I am Html</div>
`
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
      <h1 className="text-lg font-bold">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {params.slug}
    </MaxWidthWrapper>
  )
}

export default BlogPage
