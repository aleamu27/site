import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS } from '../styles/colors';

const CMSWrapper = styled.div`
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

const CMSSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CMSContainer = styled.div`
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

const CMSTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #222;
  margin: 0 0 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.green};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.green};
  }
`;

const ContentEditor = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
`;

const EditorToolbar = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
`;

const ToolbarButton = styled.button`
  padding: 0.4rem 0.8rem;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
  }
  
  &.active {
    background: ${COLORS.green};
    color: white;
    border-color: ${COLORS.green};
  }
`;

const EditorContent = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background: ${COLORS.green};
    color: white;
    
    &:hover {
      background: #2a8a3a;
    }
  }
  
  &.secondary {
    background: #f0f0f0;
    color: #222;
    
    &:hover {
      background: #e0e0e0;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PreviewSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`;

const PreviewTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
`;

const PreviewCard = styled.div`
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 280px;
  min-height: 380px;
`;

const PreviewImage = styled.div`
  display: none;
`;

const PreviewDate = styled.div`
  font-size: 0.9rem;
  color: #b3b3b3;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const PreviewPostTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.8rem 0;
  line-height: 1.3;
`;

const PreviewExcerpt = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
`;

const PreviewAuthor = styled.div`
  font-size: 0.8rem;
  color: #b3b3b3;
  font-weight: 500;
`;

const BlogCMS = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    image: '',
    featured: false,
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleToolbarClick = (format) => {
    const textarea = document.getElementById('content-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    
    let replacement = '';
    switch (format) {
      case 'h2':
        replacement = `<h2>${text.substring(start, end)}</h2>`;
        break;
      case 'h3':
        replacement = `<h3>${text.substring(start, end)}</h3>`;
        break;
      case 'p':
        replacement = `<p>${text.substring(start, end)}</p>`;
        break;
      case 'ul':
        replacement = `<ul>\n  <li>${text.substring(start, end)}</li>\n</ul>`;
        break;
      case 'blockquote':
        replacement = `<blockquote>${text.substring(start, end)}</blockquote>`;
        break;
      default:
        return;
    }
    
    const newText = text.substring(0, start) + replacement + text.substring(end);
    setFormData(prev => ({ ...prev, content: newText }));
    
    // Focus back on textarea
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + replacement.length);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd send this to your backend
      console.log('Saving blog post:', formData);
      
      // Generate a slug from the title
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      setIsSubmitting(false);
      navigate(`/blog/${slug}`);
    }, 1000);
  };

  const handlePreview = () => {
    // In a real app, you might want to show a modal or navigate to a preview page
    console.log('Preview:', formData);
  };

  return (
    <CMSWrapper>
      <CMSSection>
        <CMSContainer>
          <BackButton to="/blog">← Back to Blog</BackButton>
          
          <CMSTitle>Create New Blog Post</CMSTitle>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Enter the blog post title"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <TextArea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                required
                placeholder="Brief description of the blog post"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="author">Author *</Label>
              <Input
                id="author"
                name="author"
                type="text"
                value={formData.author}
                onChange={handleInputChange}
                required
                placeholder="Author name"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="image">Featured Image URL</Label>
              <Input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </FormGroup>

            <FormGroup>
              <CheckboxGroup>
                <Checkbox
                  id="featured"
                  name="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <Label htmlFor="featured">Featured Post</Label>
              </CheckboxGroup>
            </FormGroup>

            <FormGroup>
              <Label>Content *</Label>
              <ContentEditor>
                <EditorToolbar>
                  <ToolbarButton type="button" onClick={() => handleToolbarClick('h2')}>
                    H2
                  </ToolbarButton>
                  <ToolbarButton type="button" onClick={() => handleToolbarClick('h3')}>
                    H3
                  </ToolbarButton>
                  <ToolbarButton type="button" onClick={() => handleToolbarClick('p')}>
                    P
                  </ToolbarButton>
                  <ToolbarButton type="button" onClick={() => handleToolbarClick('ul')}>
                    List
                  </ToolbarButton>
                  <ToolbarButton type="button" onClick={() => handleToolbarClick('blockquote')}>
                    Quote
                  </ToolbarButton>
                </EditorToolbar>
                <EditorContent
                  id="content-editor"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  placeholder="Write your blog post content here. Use the toolbar above to format your text."
                />
              </ContentEditor>
            </FormGroup>

            <ButtonGroup>
              <Button type="submit" className="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Publishing...' : 'Publish Post'}
              </Button>
              <Button type="button" className="secondary" onClick={handlePreview}>
                Preview
              </Button>
            </ButtonGroup>
          </Form>

                     {formData.title && (
             <PreviewSection>
               <PreviewTitle>Preview</PreviewTitle>
               <PreviewCard>
                 <PreviewDate>{new Date().toLocaleDateString('en-US', { 
                   year: 'numeric', 
                   month: 'long', 
                   day: 'numeric' 
                 })}</PreviewDate>
                 <PreviewPostTitle>{formData.title}</PreviewPostTitle>
                 <PreviewExcerpt>{formData.excerpt}</PreviewExcerpt>
                 <PreviewAuthor>By {formData.author}</PreviewAuthor>
               </PreviewCard>
             </PreviewSection>
           )}
        </CMSContainer>
      </CMSSection>
    </CMSWrapper>
  );
};

export default BlogCMS; 