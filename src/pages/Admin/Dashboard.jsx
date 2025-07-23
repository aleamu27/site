import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';

const DashboardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoutButton = styled.button`
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #444;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const StatTitle = styled.h3`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ActionCard = styled(Link)`
  background: #184B54;
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background 0.2s;
  
  &:hover {
    background: #0f3238;
  }
`;

const AdminDashboard = () => {
  const { user, profile } = useAuth();
  const [stats, setStats] = useState({
    posts: 0,
    subscribers: 0,
    portfolioItems: 0,
    pageViews: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get blog posts count
      const { count: postsCount } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published');

      // Get subscribers count
      const { count: subscribersCount } = await supabase
        .from('newsletter_subscribers')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

      // Get portfolio items count
      const { count: portfolioCount } = await supabase
        .from('portfolio_items')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published');

      // Get today's page views
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const { count: viewsCount } = await supabase
        .from('page_views')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());

      setStats({
        posts: postsCount || 0,
        subscribers: subscribersCount || 0,
        portfolioItems: portfolioCount || 0,
        pageViews: viewsCount || 0
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleLogout = async () => {
    const sessionToken = localStorage.getItem('session_token');
    
    // Mark session as inactive
    if (sessionToken) {
      await supabase
        .from('user_sessions')
        .update({ is_active: false })
        .eq('session_token', sessionToken);
    }

    // Log security event
    await supabase.rpc('log_security_event', {
      p_user_id: user.id,
      p_action: 'logout',
      p_details: { reason: 'manual_logout' },
      p_ip_address: null,
      p_user_agent: navigator.userAgent
    });

    localStorage.removeItem('session_token');
    await supabase.auth.signOut();
  };

  return (
    <DashboardWrapper>
      <Header>
        <Title>Dashboard</Title>
        <UserInfo>
          <span>Welcome, {profile?.full_name || user?.email}</span>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </UserInfo>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatTitle>Published Posts</StatTitle>
          <StatValue>{stats.posts}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Newsletter Subscribers</StatTitle>
          <StatValue>{stats.subscribers}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Portfolio Items</StatTitle>
          <StatValue>{stats.portfolioItems}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Page Views Today</StatTitle>
          <StatValue>{stats.pageViews}</StatValue>
        </StatCard>
      </StatsGrid>

      <h2>Quick Actions</h2>
      <QuickActions>
        <ActionCard to="/blog/manage">Administrer Blogg</ActionCard>
        <ActionCard to="/blog/cms">Nytt Blogginnlegg</ActionCard>
        <ActionCard to="/job-cms">Administrer Jobber</ActionCard>
        <ActionCard to="/admin/subscribers">Se Abonnenter</ActionCard>
      </QuickActions>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
          