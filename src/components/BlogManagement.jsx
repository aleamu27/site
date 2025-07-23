import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS } from '../styles/colors';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const ManagementWrapper = styled.div`
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

const ManagementSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ManagementContainer = styled.div`
  max-width: 1000px;
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

const ManagementTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #222;
  margin: 0 0 2rem 0;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const CreateButton = styled(Link)`
  background: ${COLORS.green};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease;
  
  &:hover {
    background: #2a8a3a;
  }
`;

const PostsTable = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto auto;
  gap: 1rem;
  padding: 1rem;
  background: #f8f8f8;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #f0f0f0;
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr auto auto;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto auto;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f8f8f8;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr auto auto;
  }
`;

const PostTitle = styled.div`
  font-weight: 600;
  color: #222;
  
  .meta {
    font-size: 0.8rem;
    color: #666;
    font-weight: normal;
    margin-top: 0.2rem;
  }
`;

const StatusBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  
  &.published {
    background: #e8f5e8;
    color: #2d7d2d;
  }
  
  &.draft {
    background: #f0f0f0;
    color: #666;
  }
  
  &.featured {
    background: #e8f3ff;
    color: #0066cc;
  }
`;

const ActionButton = styled.button`
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
  
  &.edit {
    color: #0066cc;
    border-color: #0066cc;
    
    &:hover {
      background: #e8f3ff;
    }
  }
  
  &.delete {
    color: #dc3545;
    border-color: #dc3545;
    
    &:hover {
      background: #f8e8e8;
    }
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

const HiddenOnMobile = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const BlogManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      if (supabase) {
        const { data: blogPosts, error: fetchError } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) {
          throw new Error(fetchError.message);
        }

        setPosts(blogPosts || []);
      } else {
        // Fallback to API
        const response = await fetch('/api/blog');
        const result = await response.json();
        
        if (response.ok && result.success) {
          setPosts(result.data || []);
        } else {
          throw new Error(result.message || 'Failed to fetch posts');
        }
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (postId) => {
    navigate(`/blog/cms?edit=${postId}`);
  };

  const handleDelete = async (postId, postTitle) => {
    if (!window.confirm(`Er du sikker på at du vil slette "${postTitle}"?`)) {
      return;
    }

    try {
      const apiUrl = `/api/blog-edit?id=${postId}`;
      
      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts(posts.filter(post => post.id !== postId));
        alert('Blogginnlegg slettet!');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sletting feilet');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert(`Feil ved sletting: ${error.message}`);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('no-NO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!user) {
    return (
      <ManagementWrapper>
        <ManagementSection>
          <ManagementContainer>
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <h2>Ikke autorisert</h2>
              <p>Du må være logget inn for å administrere blogginnlegg.</p>
              <Link to="/login">Logg inn</Link>
            </div>
          </ManagementContainer>
        </ManagementSection>
      </ManagementWrapper>
    );
  }

  if (loading) {
    return (
      <ManagementWrapper>
        <ManagementSection>
          <ManagementContainer>
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
              <p>Laster blogginnlegg...</p>
            </div>
          </ManagementContainer>
        </ManagementSection>
      </ManagementWrapper>
    );
  }

  if (error) {
    return (
      <ManagementWrapper>
        <ManagementSection>
          <ManagementContainer>
            <BackButton to="/blog">← Tilbake til Blog</BackButton>
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#e74c3c' }}>
              <h3>Feil ved lasting av blogginnlegg</h3>
              <p>{error}</p>
              <button onClick={fetchPosts}>Prøv igjen</button>
            </div>
          </ManagementContainer>
        </ManagementSection>
      </ManagementWrapper>
    );
  }

  return (
    <ManagementWrapper>
      <ManagementSection>
        <ManagementContainer>
          <BackButton to="/blog">← Tilbake til Blog</BackButton>
          
          <ManagementTitle>Administrer Blogginnlegg</ManagementTitle>
          
          <ActionBar>
            <div>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {posts.length} blogginnlegg totalt
              </span>
            </div>
            <CreateButton to="/blog/cms">+ Nytt Innlegg</CreateButton>
          </ActionBar>

          {posts.length === 0 ? (
            <EmptyState>
              <h3>Ingen blogginnlegg ennå</h3>
              <p>Start med å skrive ditt første blogginnlegg.</p>
              <CreateButton to="/blog/cms">Opprett Nytt Innlegg</CreateButton>
            </EmptyState>
          ) : (
            <PostsTable>
              <TableHeader>
                <div>Tittel</div>
                <HiddenOnMobile>Status</HiddenOnMobile>
                <HiddenOnMobile>Dato</HiddenOnMobile>
                <div>Rediger</div>
                <div>Slett</div>
              </TableHeader>
              
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <PostTitle>
                    {post.title}
                    <div className="meta">
                      Av {post.author} • {formatDate(post.created_at)}
                      {post.featured && ' • Fremhevet'}
                    </div>
                  </PostTitle>
                  
                  <HiddenOnMobile>
                    <StatusBadge className={post.published ? 'published' : 'draft'}>
                      {post.published ? 'Publisert' : 'Utkast'}
                    </StatusBadge>
                    {post.featured && (
                      <StatusBadge className="featured">Fremhevet</StatusBadge>
                    )}
                  </HiddenOnMobile>
                  
                  <HiddenOnMobile>
                    {formatDate(post.created_at)}
                  </HiddenOnMobile>
                  
                  <ActionButton 
                    className="edit"
                    onClick={() => handleEdit(post.id)}
                  >
                    Rediger
                  </ActionButton>
                  
                  <ActionButton 
                    className="delete"
                    onClick={() => handleDelete(post.id, post.title)}
                  >
                    Slett
                  </ActionButton>
                </TableRow>
              ))}
            </PostsTable>
          )}
        </ManagementContainer>
      </ManagementSection>
    </ManagementWrapper>
  );
};

export default BlogManagement; 