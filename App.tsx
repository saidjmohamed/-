import React, { useState, useMemo, useCallback } from 'react';
import { WILAYAS_DATA } from './data/algeria-courts';
import type { Suggestion, SearchResult } from './types';
import SearchInput from './components/SearchInput';
import ResultCard from './components/ResultCard';

const normalizeArabic = (text: string) => {
  return text
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي');
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  const suggestions = useMemo<Suggestion[]>(() => {
    if (searchQuery.length < 2) {
      return [];
    }
    
    const normalizedQuery = normalizeArabic(searchQuery.toLowerCase());
    const startsWithMatches: Suggestion[] = [];
    const includesMatches: Suggestion[] = [];
    
    const seen = new Set<string>(); // To avoid duplicates

    WILAYAS_DATA.forEach(wilaya => {
      wilaya.baladiyat.forEach(baladiya => {
        const key = `${baladiya.baladiya}-${wilaya.wilaya}`;
        if (seen.has(key)) return;

        const normalizedBaladiya = normalizeArabic(baladiya.baladiya.toLowerCase());
        
        const suggestion = {
          baladiyaName: baladiya.baladiya,
          wilayaName: wilaya.wilaya,
          wilayaCode: wilaya.code_wilaya,
        };

        if (normalizedBaladiya.startsWith(normalizedQuery)) {
          startsWithMatches.push(suggestion);
          seen.add(key);
        } else if (normalizedBaladiya.includes(normalizedQuery)) {
          includesMatches.push(suggestion);
          seen.add(key);
        }
      });
    });
    
    return [...startsWithMatches, ...includesMatches].slice(0, 7);
  }, [searchQuery]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (selectedResult) {
      setSelectedResult(null);
    }
  }, [selectedResult]);

  const handleSelectSuggestion = useCallback((suggestion: Suggestion) => {
    const wilaya = WILAYAS_DATA.find(w => w.code_wilaya === suggestion.wilayaCode);
    if (wilaya) {
      const baladiya = wilaya.baladiyat.find(b => b.baladiya === suggestion.baladiyaName);
      if (baladiya) {
        setSelectedResult({ wilaya, baladiya });
        setSearchQuery('');
      }
    }
  }, []);
  
  const handleNewSearch = useCallback(() => {
    setSelectedResult(null);
    setSearchQuery('');
  }, []);

  return (
    <div className="bg-[#f5f7fa] min-h-screen w-full flex flex-col items-center pt-6 sm:pt-12 px-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#004aad] to-[#007bff] pb-2">
          الاختصاص الإقليمي للمحاكم الجزائرية
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          ابحث عن المحكمة المختصة لبلدية معينة
        </p>
      </header>

      <main className="w-full max-w-2xl">
          {!selectedResult ? (
            <div className="relative animate-fade-in">
              <SearchInput
                value={searchQuery}
                onChange={handleSearchChange}
                onSelect={handleSelectSuggestion}
                suggestions={suggestions}
                placeholder="مثلاً: تيزي وزو، بئر خادم، وهران..."
                label="🔎 أدخل اسم البلدية"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 animate-fade-in">
              <ResultCard
                result={selectedResult}
              />
              <button
                onClick={handleNewSearch}
                className="flex items-center gap-2 bg-[#004aad] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#003b8a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V4a1 1 0 011-1zm10.899 11.899a7.003 7.003 0 01-11.601-2.566 1 1 0 111.885-.666A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101z" clipRule="evenodd" />
                </svg>
                <span>بحث جديد</span>
              </button>
            </div>
          )}
      </main>
      
      <footer className="mt-auto py-6 text-center text-gray-500 text-sm space-y-1">
        <p>هذا التطبيق لا يجمع أي معلومات شخصية عن المستخدمين.</p>
        <p>
          تم التطوير بواسطة الأستاذ سايج محمد. جميع الحقوق محفوظة © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
