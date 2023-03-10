import Head from 'next/head';
import { AboutSection, DonateSection, UkraineSection } from '@components';
import HeroSection from '../components/hero';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <UkraineSection />
      <DonateSection />
    </>
  );
}
