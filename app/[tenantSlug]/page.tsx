import Sample6View from '../../components/templates/sample6vite2next/PageView';
import InteriorDesign1 from '../../components/templates/interiordesign1/PageView';
import FreshSpaces from '../../components/templates/freshspaces/PageView';
import LankaTradeLink from '../../components/templates/lankatradelink/PageView';
import GlowBeauty from '../../components/templates/glowbeauty/PageView';
import LensAndLight from '../../components/templates/lensandlight/PageView';
import { notFound } from 'next/navigation';

export default async function TenantPage({ params }: { params: Promise<{ tenantSlug: string }> }) {
  const { tenantSlug } = await params;

  if (tenantSlug === 'colombobuildingsupplies') {
    return <Sample6View />; // Loads Sample 6 + its 15 private components safely
  }

  if (tenantSlug === 'studiointeriors') {
    return <InteriorDesign1 />; // Interior Design Agency template
  }

  if (tenantSlug === 'freshspaces') {
    return <FreshSpaces />; // FreshSpaces Sri Lanka — Commercial Cleaning
  }

  if (tenantSlug === 'lankatradelink') {
    return <LankaTradeLink />; // Lanka Trade Link — Wholesale Importers
  }

  if (tenantSlug === 'glowbeauty') {
    return <GlowBeauty />; // Glow Beauty Lounge — Salon
  }

  if (tenantSlug === 'lensandlight') {
    return <LensAndLight />; // Lens & Light Studios — Photography
  }

  return notFound();
}
