import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Now from '@/components/Now';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Skills />
      <Now />
      <Footer />
    </main>
  );
}
