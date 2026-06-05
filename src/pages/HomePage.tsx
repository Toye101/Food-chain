import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RegularPicks from '../components/RegularPicks';
import HowWeWork from '../components/HowWeWork';
import RecentFeedbacks from '../components/RecentFeedbacks';

export default function HomePage() {
  const [email, setEmail] = useState('');

  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/signup.html';
  };

  return (
    <div className="min-h-screen bg-[#F9F3EE]">
      <Header />
      <Hero onGetStarted={handleGetStarted} email={email} setEmail={setEmail} />
      <RegularPicks />
      <HowWeWork />
      <RecentFeedbacks />
    </div>
  );
}
