// pages/blog/index.js
import { getPosts } from '../../utils/wordpress';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/router';
import Button from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

// Helper function to limit content and remove HTML tags
const limitContent = (html, limit = 150) => {
  const text = html.replace(/<[^>]*>/g, '');
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export default function Blog({ initialPosts }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);

  // Optional: Add this if you want client-side refresh capability
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BeatLoader color="#e6ba38" size={15} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Blog
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Latest news, tutorials, and insights from our team
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <article 
                  key={post.id} 
                  className="bg-white shadow overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  {/* Featured Image - now using _embedded data */}
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered}
                      className="w-full h-48 object-cover"
                    />
                  ):(
                    <img 
                      src='/images/placeholder-image.jpg'
                      alt={post.title.rendered}
                      className="w-full h-48 object-cover"
                    /> 
                  )}
                  <div className="p-6 flex-grow">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                      <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {post.title.rendered}
                      </h2>
                      <span className="text-sm text-gray-500 mt-2 block">
                        Posted on {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="prose-sm max-w-none text-gray-600 mb-4">
                      {limitContent(post.excerpt.rendered)}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Button
                      onClick={() => router.push(`/blog/${post.slug}`)}
                      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Read More
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Add _embed to include featured media in the response
  const posts = await getPosts('?_embed');
  return {
    props: { initialPosts: posts },
    revalidate: 60 // ISR: Regenerate every 60 seconds
  };
}