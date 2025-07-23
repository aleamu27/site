import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { COLORS } from '../styles/colors';
import { useAuth } from '../contexts/AuthContext';

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
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('edit');
  const isEditing = !!editId;
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    featured_image: '',
    featured: false,
    content: '',
    created_at: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditing && editId) {
      fetchPostForEditing(editId);
    }
  }, [isEditing, editId]);

  const fetchPostForEditing = async (postId) => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`/api/blog-edit?id=${postId}`);
      
      if (!response.ok) {
        throw new Error('Kunne ikke hente blogginnlegg for redigering');
      }
      
      const result = await response.json();
      
      if (result.success && result.data) {
        // Convert created_at to datetime-local format for the input
        let formattedDate = '';
        if (result.data.created_at) {
          const date = new Date(result.data.created_at);
          // Format as YYYY-MM-DDTHH:MM for datetime-local input
          formattedDate = date.toISOString().slice(0, 16);
        }
        
        setFormData({
          title: result.data.title || '',
          excerpt: result.data.excerpt || '',
          author: result.data.author || '',
          featured_image: result.data.featured_image || '',
          featured: result.data.featured || false,
          content: result.data.content || '',
          created_at: formattedDate
        });
      }
    } catch (error) {
      console.error('Error fetching post for editing:', error);
      alert(`Feil ved henting av blogginnlegg: ${error.message}`);
      navigate('/blog/manage');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log('ℹ️ No file selected');
      return;
    }

    console.log('📤 Starting image upload:', {
      name: file.name,
      size: file.size,
      type: file.type
    });

    setIsUploadingImage(true);
    
    try {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error(`Invalid file type: ${file.type}. Only JPEG, PNG, GIF, and WebP images are allowed.`);
      }

      // Validate file size (5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error(`File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size is 5MB.`);
      }

      // Create FormData for file upload
      const uploadData = new FormData();
      uploadData.append('image', file);

      console.log('📦 FormData created:', {
        hasFile: uploadData.has('image'),
        fileName: file.name,
        fileSize: file.size
      });

      // Use relative path for production, full URL for local dev
      const apiUrl = '/api/upload-image';

      console.log('🌐 Upload API URL:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: uploadData,
        // Don't set Content-Type header - let browser set it with boundary for FormData
      });

      console.log('📡 Upload response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Server error:', errorData);
        throw new Error(errorData.message || errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Image uploaded successfully:', result);

      // Update form data with the uploaded image URL
      setFormData(prev => ({
        ...prev,
        featured_image: result.data.url
      }));

      alert('Image uploaded successfully!');

    } catch (error) {
      console.error('❌ Failed to upload image:', error);
      alert(`Failed to upload image: ${error.message}`);
    } finally {
      setIsUploadingImage(false);
    }
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
    
    try {
      console.log('📤 Submitting blog post:', { isEditing, formData });
      
      let apiUrl, method;
      
      if (isEditing) {
        apiUrl = `/api/blog-edit?id=${editId}`;
        method = 'PUT';
      } else {
        apiUrl = '/api/blog';
        method = 'POST';
      }
      
      console.log('🌐 Blog API URL:', apiUrl, 'Method:', method);
      
      const response = await fetch(apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📡 API Response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Blog post saved successfully:', result);

      alert(isEditing ? 'Blogginnlegg oppdatert!' : 'Blogginnlegg publisert!');
      
      // Navigate to blog management or the post
      navigate('/blog/manage');
      
    } catch (error) {
      console.error('❌ Failed to save blog post:', error);
      alert(`Feil ved lagring: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = () => {
    // In a real app, you might want to show a modal or navigate to a preview page
    console.log('Preview:', formData);
  };

  // Check authentication
  if (!user) {
    return (
      <CMSWrapper>
        <CMSSection>
          <CMSContainer>
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <h2>Ikke autorisert</h2>
              <p>Du må være logget inn for å administrere blogginnlegg.</p>
              <Link to="/">Gå til forsiden</Link>
            </div>
          </CMSContainer>
        </CMSSection>
      </CMSWrapper>
    );
  }

  if (isLoading) {
    return (
      <CMSWrapper>
        <CMSSection>
          <CMSContainer>
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
              <p>Laster blogginnlegg...</p>
            </div>
          </CMSContainer>
        </CMSSection>
      </CMSWrapper>
    );
  }

  return (
    <CMSWrapper>
      <CMSSection>
        <CMSContainer>
          <BackButton to="/blog/manage">← Tilbake til Administrasjon</BackButton>
          
          <CMSTitle>{isEditing ? 'Rediger Blogginnlegg' : 'Opprett Nytt Blogginnlegg'}</CMSTitle>
          
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

            {isEditing && (
              <FormGroup>
                <Label htmlFor="created_at">Publiseringsdato</Label>
                <Input
                  id="created_at"
                  name="created_at"
                  type="datetime-local"
                  value={formData.created_at}
                  onChange={handleInputChange}
                  placeholder="Velg publiseringsdato og tid"
                />
                <small style={{ color: '#666', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                  La stå tom for å beholde opprinnelig dato
                </small>
              </FormGroup>
            )}

            <FormGroup>
              <Label htmlFor="featured_image">Featured Image</Label>
              <Input
                id="featured_image_file"
                name="featured_image_file"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {formData.featured_image && (
                <div style={{ marginTop: '0.5rem' }}>
                  <small style={{ color: '#666' }}>Uploaded: {formData.featured_image}</small>
                </div>
              )}
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
              <Button type="submit" className="primary" disabled={isSubmitting || isUploadingImage || isLoading}>
                {isSubmitting ? (isEditing ? 'Oppdaterer...' : 'Publiserer...') : 
                 isUploadingImage ? 'Laster opp bilde...' : 
                 isLoading ? 'Laster...' :
                 (isEditing ? 'Oppdater Innlegg' : 'Publiser Innlegg')}
              </Button>
              <Button type="button" className="secondary" onClick={handlePreview}>
                Forhåndsvis
              </Button>
            </ButtonGroup>
          </Form>

                     {formData.title && (
             <PreviewSection>
               <PreviewTitle>Preview</PreviewTitle>
               <PreviewCard>
                 <PreviewDate>{formData.created_at ? 
                   new Date(formData.created_at).toLocaleDateString('en-US', { 
                     year: 'numeric', 
                     month: 'long', 
                     day: 'numeric' 
                   }) :
                   new Date().toLocaleDateString('en-US', { 
                     year: 'numeric', 
                     month: 'long', 
                     day: 'numeric' 
                   })
                 }</PreviewDate>
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