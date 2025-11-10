
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { WILAYAS_DATA } from './data/algeria-courts';
import type { Suggestion, SearchResult } from './types';
import SearchInput from './components/SearchInput';
import ResultCard from './components/ResultCard';
import { FavoritesIcon, SearchIcon, TrashIcon } from './components/icons';

const FAVORITES_KEY = 'algerian_courts_favorites';
const getResultId = (result: SearchResult) => `${result.wilaya.code_wilaya}-${result.baladiya.baladiya}`;

const normalizeArabic = (text: string) => {
  return text
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي');
};


const FavoritesList: React.FC<{
  favorites: SearchResult[];
  onSelect: (result: SearchResult) => void;
  onRemove: (result: SearchResult) => void;
}> = ({ favorites, onSelect, onRemove }) => {
  if (favorites.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md animate-fade-in">
        <FavoritesIcon className="mx-auto h-16 w-16 text-gray-300" />
        <h3 className="mt-4 text-xl font-bold text-gray-700">قائمة المفضلة فارغة</h3>
        <p className="mt-1 text-gray-500">
          قم بالبحث عن محكمة ثم اضغط على أيقونة النجمة لحفظها هنا.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {favorites.map((fav) => (
        <div key={getResultId(fav)} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center text-right">
          <div>
            <h4 className="font-bold text-lg text-[#004aad]">{fav.baladiya.mahkama_mokhtassa}</h4>
            <p className="text-sm text-gray-600">
              {fav.baladiya.baladiya}, {fav.wilaya.wilaya}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(fav)}
              className="py-2 px-4 bg-blue-100 text-[#004aad] font-semibold rounded-md hover:bg-blue-200 transition-colors"
            >
              عرض
            </button>
            <button
              onClick={() => onRemove(fav)}
              className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              aria-label={`Remove ${fav.baladiya.baladiya} from favorites`}
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [view, setView] = useState<'search' | 'favorites'>('search');
  const [favorites, setFavorites] = useState<SearchResult[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);

  const isFavorite = useCallback((result: SearchResult | null): boolean => {
    if (!result) return false;
    const resultId = getResultId(result);
    return favorites.some(fav => getResultId(fav) === resultId);
  }, [favorites]);

  const toggleFavorite = useCallback((result: SearchResult) => {
    const resultId = getResultId(result);
    setFavorites(prev => {
        const exists = prev.some(fav => getResultId(fav) === resultId);
        if (exists) {
            return prev.filter(fav => getResultId(fav) !== resultId);
        } else {
            return [...prev, result];
        }
    });
  }, []);

  const handleRemoveFavorite = useCallback((result: SearchResult) => {
      const resultId = getResultId(result);
      setFavorites(prev => prev.filter(fav => getResultId(fav) !== resultId));
  }, []);

  const handleSelectFavorite = (result: SearchResult) => {
    setSelectedResult(result);
    setView('search');
  };

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
    <div className="bg-[#f5f7fa] min-h-screen w-full flex flex-col items-center pt-8 sm:pt-16 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#004aad]">
          الاختصاص الإقليمي للمحاكم الجزائرية
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          ابحث عن المحكمة المختصة أو تصفح قائمة المفضلة
        </p>
      </header>

      <main className="w-full max-w-2xl">
        <div className="mb-6 p-1 bg-gray-200 rounded-lg flex justify-center gap-2">
          <button
            onClick={() => setView('search')}
            className={`w-full flex justify-center items-center gap-2 font-bold py-2 px-4 rounded-md transition-colors ${
              view === 'search' ? 'bg-white text-[#004aad] shadow' : 'bg-transparent text-gray-600 hover:bg-gray-300'
            }`}
          >
            <SearchIcon className="h-5 w-5" />
            <span>بحث</span>
          </button>
          <button
            onClick={() => setView('favorites')}
            className={`w-full flex justify-center items-center gap-2 font-bold py-2 px-4 rounded-md transition-colors ${
              view === 'favorites' ? 'bg-white text-[#004aad] shadow' : 'bg-transparent text-gray-600 hover:bg-gray-300'
            }`}
          >
            <FavoritesIcon className="h-5 w-5" />
            <span>المفضلة</span>
          </button>
        </div>

        {view === 'search' && (
          <>
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
                  isFavorite={isFavorite(selectedResult)}
                  onToggleFavorite={() => toggleFavorite(selectedResult)}
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
          </>
        )}
        
        {view === 'favorites' && (
          <FavoritesList 
            favorites={favorites} 
            onSelect={handleSelectFavorite}
            onRemove={handleRemoveFavorite}
          />
        )}
      </main>
      
      <footer className="mt-auto py-6 text-center text-gray-500">
        <p>تم تطويره لتسهيل الوصول إلى المعلومة القانونية. جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
