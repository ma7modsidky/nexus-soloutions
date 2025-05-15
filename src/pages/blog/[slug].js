import { useRouter } from 'next/router';
import { getPosts, getPostBySlug } from '../../utils/wordpress';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaLinkedin, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function PostDetail({ post, recentPosts }) {
  const router = useRouter();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main content area */}
          <div className="lg:flex lg:space-x-8">
            {/* Post content - takes full width on mobile, 2/3 on desktop */}
            <div className="lg:w-2/3">
              <article className="bg-white shadow overflow-hidden rounded-lg">
                {/* Featured Image */}
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                    alt={post.title.rendered}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                )}

                <div className="p-6 md:p-8">
                  {/* Post title and meta */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {post.title.rendered}
                  </h1>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {post._embedded?.author?.[0]?.name || 'Admin'}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Post content */}
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                  />

                  {/* Social sharing */}
                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Share this post</h3>
                    <div className="flex space-x-4">
                      <FacebookShareButton url={currentUrl} quote={post.title.rendered}>
                        <div className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                          <FaFacebook />
                          <span>Facebook</span>
                        </div>
                      </FacebookShareButton>
                      
                      <TwitterShareButton url={currentUrl} title={post.title.rendered}>
                        <div className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
                          <FaTwitter />
                          <span>Twitter</span>
                        </div>
                      </TwitterShareButton>
                      
                      <LinkedinShareButton url={currentUrl} title={post.title.rendered}>
                        <div className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
                          <FaLinkedin />
                          <span>LinkedIn</span>
                        </div>
                      </LinkedinShareButton>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Recent posts sidebar - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:w-1/3 mt-0">
              <div className="bg-white shadow overflow-hidden rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Recent Posts
                </h2>
                <div className="space-y-4">
                  {recentPosts.map(recentPost => (
                    <div 
                      key={recentPost.id} 
                      className="group cursor-pointer"
                      onClick={() => router.push(`/blog/${recentPost.slug}`)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition">
                        {recentPost.title.rendered}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(recentPost.date).toLocaleDateString()}
                      </p>
                      {recentPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                        <img 
                          src={recentPost._embedded['wp:featuredmedia'][0].source_url} 
                          alt={recentPost.title.rendered}
                          className="w-full h-32 object-cover mt-2 rounded-md"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent posts - shown at bottom on mobile */}
          <div className="lg:hidden mt-12">
            <div className="bg-white shadow overflow-hidden rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Recent Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentPosts.map(recentPost => (
                  <div 
                    key={recentPost.id} 
                    className="group cursor-pointer"
                    onClick={() => router.push(`/blog/${recentPost.slug}`)}
                  >
                    {recentPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <img 
                        src={recentPost._embedded['wp:featuredmedia'][0].source_url} 
                        alt={recentPost.title.rendered}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    )}
                    <h3 className="text-lg font-medium text-gray-900 mt-2 group-hover:text-indigo-600 transition">
                      {recentPost.title.rendered}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(recentPost.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const recentPosts = await getPosts('?per_page=4&_embed');

  return {
    props: {
      post,
      recentPosts: recentPosts.filter(p => p.slug !== params.slug).slice(0, 3)
    },
    revalidate: 60
  };
}