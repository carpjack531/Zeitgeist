import React, { useEffect, useState } from 'react';
import UserHeader from '../comps/UserHeader.jsx';
import {mood} from '../api/api.js';


const HomePage = () => { 
  const [moodData, setMoodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchToday = async () => {
      setLoading(true);
      setError(null);
      try {
        const todaysMood = await mood.getToday();
        // keep whatever the server returns; we'll guard rendering below
        setMoodData(todaysMood || null);
        console.log('Fetched today\'s mood:', JSON.stringify(todaysMood));
      } catch (e) {
        console.error('Failed to fetch mood:', e);
        setError('Failed to load mood');
      } finally {
        setLoading(false);
      }
    };

    fetchToday();
  }, []);

  
  const renderMainMood = () => {
    if (!moodData) return 'Unknown';
    // If MoodID points to an index in Moods, use it; otherwise fallback to first item
    try {
      const { Moods, MoodID } = moodData;

      // If we have an array of mood strings like "20% Worrisome",
      // choose the highest-percent entry and return only its label (no percentage).
      if (Array.isArray(Moods) && Moods.length > 0) {
        const parsed = Moods.map((entry) => {
          const str = String(entry || '');
          // match patterns like "20% Label"
          const m = str.match(/^\s*(\d+)%\s*(.*)$/);
          if (m) return { pct: parseInt(m[1], 10), label: m[2].trim() || str };
          // fallback: find a percent anywhere
          const m2 = str.match(/(\d+)%/);
          if (m2) return { pct: parseInt(m2[1], 10), label: str.replace(m2[0], '').trim() || str };
          // no percent found -> treat as 0%
          return { pct: 0, label: str };
        });

        let best = parsed[0];
        for (let i = 1; i < parsed.length; i++) {
          if (parsed[i].pct > best.pct) best = parsed[i];
        }

        return best.label ?? 'Unknown';
      }

      // If Moods isn't an array but MoodID exists and points to an element, try that (strip percent if present)
      if (Array.isArray(Moods) && typeof MoodID === 'number') return Moods[MoodID] ?? Moods[0] ?? 'Unknown';
      // If server returns a single string or different shape, stringify it
      return typeof moodData === 'string' ? moodData : JSON.stringify(moodData);
    } catch {
      return 'Unknown';
    }
  };
return (
    <div className="min-h-screen flex flex-col items-center bg-pastel-purple-300">
      <UserHeader />

      <div className="flex flex-col min-h-150 gap-6 text-center justify-center p-6">
        <p className="font-semibold text-blue-500">Today's current mood is...</p>

        {loading ? (
          <h2 className="text-3xl font-medium">Loading...</h2>
        ) : error ? (
          <h2 className="text-3xl font-medium text-red-500">{error}</h2>
        ) : (
          <>
            <h1 className="text-6xl font-semibold break-words">{renderMainMood()}</h1>

            {moodData && Array.isArray(moodData.Moods) && (
              <div className="mt-6 text-left">
                <p className="font-semibold">Breakdown:</p>
                <ul className="list-disc list-inside">
                  {moodData.Moods.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );


};

export default HomePage;