import Sample6View from '../../components/templates/sample6vite2next/PageView';
import { notFound } from 'next/navigation';

export default async function TenantPage({ params }: { params: Promise<{ tenantSlug: string }> }) {
  const { tenantSlug } = await params;

  if (tenantSlug === 'colombobuildingsupplies') {
    return <Sample6View />; // Loads Sample 6 + its 15 private components safely
  }

  return notFound();
}