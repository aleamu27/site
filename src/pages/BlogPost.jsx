import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { supabase } from '../lib/supabase';

const BlogPostWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    margin-top: 6rem;
    margin-bottom: 2.5rem;
  }
`;

const BlogPostSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BlogPostContainer = styled.article`
  max-width: 800px;
  width: 100%;
  padding: 0 2.5vw;
  box-sizing: border-box;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #b3b3b3;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #222;
  }
`;

const BlogPostHeader = styled.header`
  margin-bottom: 3rem;
`;

const BlogPostTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #222;
  line-height: 1.2;
  margin: 0 0 1rem 0;
`;

const BlogPostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #b3b3b3;
`;

const BlogPostDate = styled.span`
  font-weight: 500;
`;

const BlogPostAuthor = styled.span`
  font-weight: 500;
`;

const BlogPostImage = styled.div`
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogPostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #222;
    margin: 2.5rem 0 1rem 0;
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #222;
    margin: 2rem 0 0.8rem 0;
  }
  
  p {
    margin: 0 0 1.5rem 0;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin: 0.5rem 0;
  }
  
  blockquote {
    border-left: 4px solid ${COLORS.green};
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #666;
  }
  
  code {
    background: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
  }
  
  pre {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
`;

const BlogPostFooter = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`;

const RelatedPosts = styled.div`
  margin-top: 3rem;
`;

const RelatedPostsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1.5rem;
`;

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const RelatedPostCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 1.2rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const RelatedPostTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;

const RelatedPostExcerpt = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  
  h2 {
    font-size: 2rem;
    color: #222;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        console.log('📖 Loading blog post:', slug);
        setLoading(true);
        setError(null);

        // Try to fetch from Supabase first
        if (supabase) {
          console.log('✅ Supabase available, fetching from database...');
          
          const { data: posts, error: supabaseError } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .limit(1);

          if (supabaseError) {
            console.error('❌ Supabase error:', supabaseError);
            await fetchFromAPI();
          } else if (posts && posts.length > 0) {
            const post = posts[0];
            console.log('✅ Successfully loaded post from Supabase:', post.title);
            
            // Transform Supabase data
            const transformedPost = {
              id: post.id,
              title: post.title,
              excerpt: post.excerpt,
              author: post.author,
              date: new Date(post.created_at).toLocaleDateString('no-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
              image: post.image,
              slug: post.slug,
              content: post.content
            };

            setPost(transformedPost);
            
            // Fetch related posts
            await fetchRelatedPosts(post.id);
          } else {
            console.warn('📭 No post found with slug:', slug);
            setPost(null);
          }
        } else {
          console.warn('⚠️ Supabase not available, trying API endpoint...');
          await fetchFromAPI();
        }
      } catch (err) {
        console.error('❌ Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    const fetchFromAPI = async () => {
      try {
        console.log('🌐 Fetching from API endpoint...');
        
        const apiUrl = process.env.REACT_APP_API_URL 
          ? `${process.env.REACT_APP_API_URL}/blog`
          : '/api/blog';
        
        const response = await fetch(apiUrl);
        const result = await response.json();
        
        if (response.ok && result.success && result.data) {
          const foundPost = result.data.find(p => p.slug === slug);
          
          if (foundPost) {
            console.log('✅ Successfully loaded post from API:', foundPost.title);
            
            const transformedPost = {
              id: foundPost.id,
              title: foundPost.title,
              excerpt: foundPost.excerpt,
              author: foundPost.author,
              date: new Date(foundPost.created_at).toLocaleDateString('no-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
              image: foundPost.image,
              slug: foundPost.slug,
              content: foundPost.content
            };

            setPost(transformedPost);
            
            // Set related posts (exclude current post)
            const related = result.data
              .filter(p => p.slug !== slug)
              .slice(0, 2)
              .map(p => ({
                id: p.id,
                title: p.title,
                excerpt: p.excerpt,
                slug: p.slug
              }));
            
            setRelatedPosts(related);
          } else {
            console.warn('📭 No post found with slug:', slug);
            setPost(null);
          }
        } else {
          throw new Error(result?.message || 'Failed to fetch from API');
        }
      } catch (apiError) {
        console.error('❌ API fetch error:', apiError);
        setError('Unable to load blog post. Please try again later.');
      }
    };

    const fetchRelatedPosts = async (currentPostId) => {
      try {
        if (supabase) {
          const { data: posts, error } = await supabase
            .from('blog_posts')
            .select('id, title, excerpt, slug')
            .eq('published', true)
            .neq('id', currentPostId)
            .limit(2);

          if (!error && posts) {
            setRelatedPosts(posts);
          }
        }
      } catch (err) {
        console.error('❌ Error loading related posts:', err);
        // Non-critical error, just set empty array
        setRelatedPosts([]);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <BlogPostWrapper>
        <BlogPostSection>
          <BlogPostContainer>
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
              <p>Loading blog post...</p>
            </div>
          </BlogPostContainer>
        </BlogPostSection>
      </BlogPostWrapper>
    );
  }

  if (error) {
    return (
      <BlogPostWrapper>
        <BlogPostSection>
          <BlogPostContainer>
            <BackButton to="/blog">← Back to Blog</BackButton>
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#e74c3c' }}>
              <h3>Error Loading Blog Post</h3>
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                style={{ 
                  background: '#222', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
              >
                Try Again
              </button>
            </div>
          </BlogPostContainer>
        </BlogPostSection>
      </BlogPostWrapper>
    );
  }

  if (!post) {
    return (
      <BlogPostWrapper>
        <BlogPostSection>
          <BlogPostContainer>
            <NotFound>
              <h2>Post Not Found</h2>
              <p>The blog post you're looking for doesn't exist.</p>
              <BackButton to="/blog">← Back to Blog</BackButton>
            </NotFound>
          </BlogPostContainer>
        </BlogPostSection>
      </BlogPostWrapper>
    );
  }

  return (
    <BlogPostWrapper>
      <BlogPostSection>
        <BlogPostContainer>
          <BackButton to="/blog">← Back to Blog</BackButton>
          
          <BlogPostHeader>
            <BlogPostTitle>{post.title}</BlogPostTitle>
            <BlogPostMeta>
              <BlogPostDate>{post.date}</BlogPostDate>
              <span>•</span>
              <BlogPostAuthor>By {post.author}</BlogPostAuthor>
            </BlogPostMeta>
          </BlogPostHeader>

          {post.image && (
            <BlogPostImage>
              <img src={post.image} alt={post.title} />
            </BlogPostImage>
          )}

          <BlogPostContent>
            {/* Simple content rendering - you could enhance this with a markdown parser */}
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              return <p key={index}>{paragraph}</p>;
            })}
          </BlogPostContent>

          <BlogPostFooter>
            {relatedPosts.length > 0 && (
              <RelatedPosts>
                <RelatedPostsTitle>Related Posts</RelatedPostsTitle>
                <RelatedPostsGrid>
                  {relatedPosts.map(relatedPost => (
                    <RelatedPostCard key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                      <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                      <RelatedPostExcerpt>{relatedPost.excerpt}</RelatedPostExcerpt>
                    </RelatedPostCard>
                  ))}
                </RelatedPostsGrid>
              </RelatedPosts>
            )}
          </BlogPostFooter>
        </BlogPostContainer>
      </BlogPostSection>
    </BlogPostWrapper>
  );
};

export default BlogPost; 