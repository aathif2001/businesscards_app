import Sample6View from '../../components/templates/sample6vite2next/PageView';
import Spacesbysenuri from '../../components/templates/spacesbysenuri/PageView';
import InteriorDesign1 from '../../components/templates/interiordesign1/PageView';
import { notFound } from 'next/navigation';

export default async function TenantPage({ params }: { params: Promise<{ tenantSlug: string }> }) {
  const { tenantSlug } = await params;

  if (tenantSlug === 'colombobuildingsupplies') {
    return <Sample6View />; // Loads Sample 6 + its 15 private components safely
  }

  if (tenantSlug === 'spacesbysenuri') {
    return <Spacesbysenuri />; // Loads Sample 6 + its 15 private components safely
  }

  if (tenantSlug === 'studiointeriors') {
    return <InteriorDesign1 />; // Interior Design Agency template
  }

  return notFound();
}