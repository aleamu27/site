import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

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

// Sample blog post data - in a real app, this would come from a database
const sampleBlogPosts = {
  "building-custom-ai-solutions": {
    id: 1,
    title: "Building Custom AI Solutions",
    excerpt: "A deep dive into how we design and implement custom AI solutions for businesses, from initial concept to deployment.",
    author: "AI Team",
    date: "June 18, 2025",
    image: "https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/think-icon-XcGhWi6uMZbYUDLdGOF4hrLt1iO84M.svg",
    slug: "building-custom-ai-solutions",
    content: `
      <h2>Introduction</h2>
      <p>Custom AI solutions are transforming how businesses operate, providing unprecedented opportunities for automation, insights, and competitive advantage. In this comprehensive guide, we'll explore the process of building custom AI solutions from the ground up.</p>
      
      <h2>The Foundation: Understanding Your Needs</h2>
      <p>Before diving into development, it's crucial to thoroughly understand your business requirements. This involves:</p>
      <ul>
        <li>Identifying specific problems AI can solve</li>
        <li>Analyzing available data sources</li>
        <li>Defining success metrics</li>
        <li>Understanding technical constraints</li>
      </ul>
      
      <h2>Data Strategy</h2>
      <p>Data is the lifeblood of any AI system. A robust data strategy includes:</p>
      <blockquote>
        "The quality of your AI solution is directly proportional to the quality of your data."
      </blockquote>
      
      <h3>Data Collection</h3>
      <p>Effective data collection involves gathering relevant, high-quality data from various sources while ensuring compliance with privacy regulations.</p>
      
      <h3>Data Preprocessing</h3>
      <p>Raw data often requires cleaning, normalization, and feature engineering before it can be used effectively in AI models.</p>
      
      <h2>Model Development</h2>
      <p>The development phase involves selecting appropriate algorithms, training models, and iterating based on performance metrics.</p>
      
      <h2>Deployment and Monitoring</h2>
      <p>Successful deployment requires careful planning for scalability, monitoring, and continuous improvement of the AI system.</p>
    `
  },
  "modern-web-development-practices": {
    id: 2,
    title: "Modern Web Development Practices",
    excerpt: "Exploring the latest trends and best practices in modern web development, from React to serverless architectures.",
    author: "Development Team",
    date: "June 15, 2025",
    image: "https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/make-icon-E9ndRsk696DWH9VUZEoTB0QmT5C1Vf.svg",
    slug: "modern-web-development-practices",
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development has evolved dramatically over the past decade, with new frameworks, tools, and methodologies emerging constantly. Let's explore the current state of modern web development.</p>
      
      <h2>Component-Based Architecture</h2>
      <p>Modern web applications are built using component-based architectures, with React leading the charge. This approach offers:</p>
      <ul>
        <li>Reusable components</li>
        <li>Better maintainability</li>
        <li>Improved developer experience</li>
        <li>Enhanced performance</li>
      </ul>
      
      <h2>Serverless and Edge Computing</h2>
      <p>The rise of serverless computing has revolutionized how we deploy and scale web applications. Edge computing brings computation closer to users, reducing latency and improving performance.</p>
      
      <h2>Performance Optimization</h2>
      <p>Modern web development prioritizes performance through techniques like code splitting, lazy loading, and optimized asset delivery.</p>
    `
  },
  "automation-digital-age": {
    id: 3,
    title: "Automation in the Digital Age",
    excerpt: "How automation is transforming business processes and what it means for the future of work.",
    author: "Automation Experts",
    date: "June 12, 2025",
    image: "https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/move-icon-fkqWsTq0lrYTggEJCtQn6lc048iSWc.svg",
    slug: "automation-digital-age",
    content: `
      <h2>The Automation Revolution</h2>
      <p>Automation is no longer a luxury—it's a necessity for businesses looking to stay competitive in the digital age. From simple task automation to complex workflow orchestration, automation is transforming how we work.</p>
      
      <h2>Types of Business Automation</h2>
      <p>Business automation can be categorized into several types:</p>
      <ul>
        <li>Process automation</li>
        <li>Data automation</li>
        <li>Communication automation</li>
        <li>Decision automation</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successful automation implementation requires careful planning and execution. Key considerations include:</p>
      <blockquote>
        "Start small, think big, and scale fast."
      </blockquote>
      
      <h2>The Future of Work</h2>
      <p>As automation becomes more prevalent, the nature of work is changing. Rather than replacing humans, automation is augmenting human capabilities and creating new opportunities.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = sampleBlogPosts[slug];
      setPost(foundPost);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <BlogPostWrapper>
        <BlogPostSection>
          <BlogPostContainer>
            <div>Loading...</div>
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

          <BlogPostContent dangerouslySetInnerHTML={{ __html: post.content }} />

          <BlogPostFooter>
            <RelatedPosts>
              <RelatedPostsTitle>Related Posts</RelatedPostsTitle>
              <RelatedPostsGrid>
                {Object.values(sampleBlogPosts)
                  .filter(p => p.slug !== slug)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <RelatedPostCard key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                      <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                      <RelatedPostExcerpt>{relatedPost.excerpt}</RelatedPostExcerpt>
                    </RelatedPostCard>
                  ))}
              </RelatedPostsGrid>
            </RelatedPosts>
          </BlogPostFooter>
        </BlogPostContainer>
      </BlogPostSection>
    </BlogPostWrapper>
  );
};

export default BlogPost; 