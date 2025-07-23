import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../styles/colors';
import { supabase } from '../lib/supabase';

const BlogWrapper = styled.div`
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

const BlogSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeroTextBlock = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 3rem 0;
`;

const HeroTextInner = styled.div`
  font-family: 'Inter', 'system-ui', 'Arial', sans-serif;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #222;
  line-height: 1.13;
  padding: 1.1rem 0 1.2rem 2.5vw;
  text-align: left;
  max-width: 1200px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 4vw;
    padding-right: 2vw;
  }
`;

const HeroSubText = styled.span`
  color: #b3b3b3;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100vw;
  padding: 0 2.5vw;
  box-sizing: border-box;
  justify-items: start;
  position: relative;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: ${({ featured }) => featured ? COLORS.green : '#fff'};
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #f0f0f0;
  width: 100%;
  max-width: 280px;
  min-height: 380px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;



const BlogCardDate = styled.div`
  font-size: 0.9rem;
  color: ${({ featured }) => featured ? '#666' : '#b3b3b3'};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const BlogCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ featured }) => featured ? '#222' : '#222'};
  margin: 0 0 0.8rem 0;
  line-height: 1.3;
`;

const BlogCardExcerpt = styled.p`
  font-size: 0.9rem;
  color: ${({ featured }) => featured ? '#666' : '#666'};
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
  flex-grow: 1;
`;

const BlogCardAuthor = styled.div`
  font-size: 0.8rem;
  color: ${({ featured }) => featured ? '#222' : '#b3b3b3'};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.2s ease;
  
  ${BlogCard}:hover & {
    transform: translateX(2px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        console.log('📖 Loading blog posts from Supabase...');
        setLoading(true);
        setError(null);

        // Try to fetch from Supabase first
        if (supabase) {
          console.log('✅ Supabase available, fetching from database...');
          
          const { data: posts, error: supabaseError } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });

          if (supabaseError) {
            console.error('❌ Supabase error:', supabaseError);
            // Fall back to API endpoint
            await fetchFromAPI();
          } else {
            console.log('✅ Successfully loaded', posts?.length || 0, 'posts from Supabase');
            
            // Transform Supabase data to match our component format
            const transformedPosts = posts?.map(post => ({
              id: post.id,
              title: post.title,
              excerpt: post.excerpt,
              author: post.author,
              date: new Date(post.created_at).toLocaleDateString('no-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
              image: post.featured_image || null,
              featured: post.featured,
              slug: post.slug
            })) || [];

            setBlogPosts(transformedPosts);
          }
        } else {
          console.warn('⚠️ Supabase not available, trying API endpoint...');
          await fetchFromAPI();
        }
      } catch (err) {
        console.error('❌ Error loading blog posts:', err);
        setError('Failed to load blog posts');
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
        
        if (response.ok && result.success) {
          console.log('✅ Successfully loaded', result.data?.length || 0, 'posts from API');
          
          // Transform API data to match our component format
          const transformedPosts = result.data?.map(post => ({
            id: post.id,
            title: post.title,
            excerpt: post.excerpt,
            author: post.author,
            date: new Date(post.created_at).toLocaleDateString('no-NO', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            image: post.featured_image || null,
            featured: post.featured,
            slug: post.slug
          })) || [];

          setBlogPosts(transformedPosts);
        } else {
          throw new Error(result.message || 'Failed to fetch from API');
        }
      } catch (apiError) {
        console.error('❌ API fetch error:', apiError);
        setError('Unable to load blog posts. Please try again later.');
        
        // As last resort, show empty state
        setBlogPosts([]);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <BlogWrapper>
        <BlogSection>
          <HeroTextBlock>
            <HeroTextInner>
              Our <HeroSubText>thoughts</HeroSubText>, insights, and perspectives on technology, design, and innovation.
            </HeroTextInner>
          </HeroTextBlock>
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
            <p>Loading blog posts...</p>
          </div>
        </BlogSection>
      </BlogWrapper>
    );
  }

  if (error) {
    return (
      <BlogWrapper>
        <BlogSection>
          <HeroTextBlock>
            <HeroTextInner>
              Our <HeroSubText>thoughts</HeroSubText>, insights, and perspectives on technology, design, and innovation.
            </HeroTextInner>
          </HeroTextBlock>
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#e74c3c' }}>
            <h3>Error Loading Blog Posts</h3>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              style={{ 
                background: '#222', 
                color: '#fff', 
                border: 'none', 
                padding: '0.8rem 1.5rem', 
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
          </div>
        </BlogSection>
      </BlogWrapper>
    );
  }

  return (
    <BlogWrapper>
      <BlogSection>
        <HeroTextBlock>
          <HeroTextInner>
            Our <HeroSubText>thoughts</HeroSubText>, insights, and perspectives on technology, design, and innovation.
                      </HeroTextInner>
          </HeroTextBlock>
        
        {blogPosts.length === 0 ? (
          <EmptyState>
            <h3>No blog posts yet</h3>
            <p>Start writing to share your thoughts and insights with the world.</p>
          </EmptyState>
        ) : (
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} to={`/blog/${post.slug}`} featured={post.featured}>
                <BlogCardDate featured={post.featured}>{post.date}</BlogCardDate>
                <BlogCardTitle featured={post.featured}>{post.title}</BlogCardTitle>
                <BlogCardExcerpt featured={post.featured}>{post.excerpt}</BlogCardExcerpt>
                <BlogCardAuthor featured={post.featured}>
                  <span>
                    {post.author}
                    <ArrowIcon>→</ArrowIcon>
                  </span>
                </BlogCardAuthor>
              </BlogCard>
            ))}

          </BlogGrid>
        )}
      </BlogSection>
    </BlogWrapper>
  );
};

export default Blog; 