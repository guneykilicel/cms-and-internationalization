'use client';  // Bu bileşen client tarafında çalışacak

import { useRouter } from 'next/navigation'; // `next/router` yerine `next/navigation` kullanılır
import { FC, useState } from 'react';

const LanguageSelector: FC = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    router.push(`/${event.target.value}`); // Dil değiştiğinde yönlendirme yap
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
      {/* Diğer diller */}
    </select>
  );
};

export default LanguageSelector;
