
import React from 'react';
import type { Suggestion } from '../types';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (suggestion: Suggestion) => void;
  suggestions: Suggestion[];
  placeholder: string;
  label: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSelect,
  suggestions,
  placeholder,
  label,
}) => {
  return (
    <div className="w-full">
      <label htmlFor="search-baladiya" className="block text-right text-lg font-bold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          id="search-baladiya"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 text-right text-lg border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent transition-all"
          autoComplete="off"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={`${suggestion.baladiyaName}-${index}`}
                onClick={() => onSelect(suggestion)}
                className="px-4 py-3 text-right cursor-pointer hover:bg-[#f5f7fa] transition-colors"
              >
                <span className="font-bold">{suggestion.baladiyaName}</span>
                <span className="text-sm text-gray-500 mr-2">({suggestion.wilayaName})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
