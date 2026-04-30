import LegalFooter from '../components/legal/LegalFooter';
import LegalNav from '../components/legal/LegalNav';
import PolicyLayout from '../components/legal/PolicyLayout';
import { useFadeInObserver } from '../hooks/useFadeInObserver';

export default function LegalPage({ page }) {
  useFadeInObserver(page.observeSelector ?? '.policy-section', { threshold: 0.1 });

  return (
    <>
      <LegalNav />
      <PolicyLayout page={page} />
      <LegalFooter />
    </>
  );
}
