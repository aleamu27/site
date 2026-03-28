import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #222;
  margin: 0;
`;

const BackLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: #222;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  background: #f8f8f8;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
  color: #444;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => props.active ? '#e8f5e9' : '#ffebee'};
  color: ${props => props.active ? '#2e7d32' : '#c62828'};
`;

const SourceBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  background: #f0f0f0;
  color: #666;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, active: 0 });

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching subscribers:', error);
        return;
      }

      setSubscribers(data || []);

      const activeCount = (data || []).filter(s => s.status === 'active').length;
      setStats({
        total: data?.length || 0,
        active: activeCount
      });
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatSource = (source) => {
    const sourceMap = {
      'website-footer': 'Nettside Footer',
      'gdpr_checklist': 'GDPR Sjekkliste',
      'contact-form': 'Kontaktskjema'
    };
    return sourceMap[source] || source;
  };

  if (loading) {
    return (
      <PageWrapper>
        <LoadingMessage>Laster abonnenter...</LoadingMessage>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Header>
        <Title>Nyhetsbrev-abonnenter</Title>
        <BackLink to="/admin">← Tilbake til Dashboard</BackLink>
      </Header>

      <StatsRow>
        <StatBox>
          <StatLabel>Totalt</StatLabel>
          <StatValue>{stats.total}</StatValue>
        </StatBox>
        <StatBox>
          <StatLabel>Aktive</StatLabel>
          <StatValue>{stats.active}</StatValue>
        </StatBox>
      </StatsRow>

      {subscribers.length === 0 ? (
        <EmptyMessage>Ingen abonnenter enda.</EmptyMessage>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>E-post</Th>
              <Th>Status</Th>
              <Th>Kilde</Th>
              <Th>Registrert</Th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <Td>{subscriber.email}</Td>
                <Td>
                  <StatusBadge active={subscriber.status === 'active'}>
                    {subscriber.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                  </StatusBadge>
                </Td>
                <Td>
                  <SourceBadge>{formatSource(subscriber.source)}</SourceBadge>
                </Td>
                <Td>{formatDate(subscriber.created_at)}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </PageWrapper>
  );
};

export default Subscribers;
