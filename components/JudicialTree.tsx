
import React, { useState } from 'react';
import { JUDICIAL_DIVISIONS } from '../data/divisions';
import type { DivisionCouncil } from '../types';

const JudicialTree: React.FC = () => {
  const [openCouncil, setOpenCouncil] = useState<string | null>(null);
  const [openCourts, setOpenCourts] = useState<Set<string>>(new Set());

  const toggleCouncil = (councilName: string) => {
    if (openCouncil === councilName) {
      setOpenCouncil(null);
    } else {
      setOpenCouncil(councilName);
      setOpenCourts(new Set()); // Reset open courts when switching councils
    }
  };

  const toggleCourt = (courtKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newOpenCourts = new Set(openCourts);
    if (newOpenCourts.has(courtKey)) {
      newOpenCourts.delete(courtKey);
    } else {
      newOpenCourts.add(courtKey);
    }
    setOpenCourts(newOpenCourts);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-2">
      <h2 className="text-2xl font-bold text-[#004aad] mb-6 text-center">دليل المجالس القضائية والمحاكم</h2>
      <div className="space-y-3">
        {JUDICIAL_DIVISIONS.map((council) => {
          const isOpen = openCouncil === council.judicial_council;
          return (
            <div key={council.judicial_council} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white transition-all duration-300">
              <div 
                className={`p-4 flex justify-between items-center cursor-pointer hover:bg-blue-50 ${isOpen ? 'bg-blue-50 border-b border-blue-100' : ''}`}
                onClick={() => toggleCouncil(council.judicial_council)}
              >
                <span className="font-bold text-lg text-gray-800">مجلس قضاء {council.judicial_council}</span>
                <span className={`transform transition-transform duration-300 text-[#004aad] ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              
              {isOpen && (
                <div className="bg-gray-50 p-4 space-y-3 animate-fade-in">
                  {council.courts.map((court) => {
                    const courtKey = `${council.judicial_council}-${court.name}`;
                    const isCourtOpen = openCourts.has(courtKey);
                    return (
                      <div key={court.name} className="border-r-4 border-[#004aad] bg-white rounded shadow-sm ml-2">
                        <div 
                          className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                          onClick={(e) => toggleCourt(courtKey, e)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#004aad]">🏛️</span>
                            <span className="font-bold text-gray-700">محكمة {court.name}</span>
                          </div>
                           <span className={`transform transition-transform duration-200 text-gray-400 text-sm ${isCourtOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </div>
                        
                        {isCourtOpen && (
                          <div className="p-3 border-t border-gray-100">
                            <p className="text-sm text-gray-500 mb-2">البلديات التابعة للاختصاص:</p>
                            <div className="flex flex-wrap gap-2">
                              {court.municipalities.map((municipality) => (
                                <span key={municipality} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                  {municipality}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JudicialTree;
