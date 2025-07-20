import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../styles/colors';

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

const StaticImageFrame = styled.div`
  width: 280px;
  height: 380px;
  background: #f5f5f5;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1rem;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    border-radius: 6px;
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
  color: #b3b3b3;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #222;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const AddPostButton = styled(Link)`
  background: #222;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s ease;
  
  &:hover {
    background: #444;
  }
`;

// Sample blog data - in a real app, this would come from a database
const sampleBlogPosts = [
  {
    id: 1,
    title: "Building Custom AI Solutions",
    excerpt: "A deep dive into how we design and implement custom AI solutions for businesses, from initial concept to deployment.",
    author: "AI Team",
    date: "June 18, 2025",
    image: "https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/think-icon-XcGhWi6uMZbYUDLdGOF4hrLt1iO84M.svg",
    featured: true,
    slug: "building-custom-ai-solutions"
  },
  {
    id: 2,
    title: "Modern Web Development Practices",
    excerpt: "Exploring the latest trends and best practices in modern web development, from React to serverless architectures.",
    author: "Development Team",
    date: "June 15, 2025",
    image: "https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/make-icon-E9ndRsk696DWH9VUZEoTB0QmT5C1Vf.svg",
    featured: false,
    slug: "modern-web-development-practices"
  },
  {
    id: 3,
    title: "Automation in the Digital Age",
    excerpt: "How automation is transforming business processes and what it means for the future of work.",
    author: "Automation Experts",
    date: "June 12, 2025",
    image: "https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/move-icon-fkqWsTq0lrYTggEJCtQn6lc048iSWc.svg",
    featured: false,
    slug: "automation-digital-age"
  }
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    // For now, we'll use the sample data
    setBlogPosts(sampleBlogPosts);
  }, []);

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
            <AddPostButton to="/blog/new">Create your first post</AddPostButton>
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
            <StaticImageFrame>
              <img src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/cta-image-rcmDlRliiqF8KckKKnj5vOTiTtsSOJ.jpg" alt="Static content" />
            </StaticImageFrame>
          </BlogGrid>
        )}
      </BlogSection>
    </BlogWrapper>
  );
};

export default Blog; 