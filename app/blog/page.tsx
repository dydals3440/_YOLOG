import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import SampleBlogs from '@/config/sample-blogs'

interface IBlog {
  slug: string
  content: string
  title: string
  description: string
  imageUrl: string
}

const BlogPage = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SampleBlogs.map((blog, index: number) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-top"
              src={blog.imageUrl ? blog.imageUrl : '/blogimg.jpg'}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: 'default' })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
