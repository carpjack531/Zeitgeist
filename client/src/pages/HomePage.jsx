import React, { useEffect, useState } from "react";
import UserHeader from "../comps/UserHeader.jsx";
import { mood } from "@api/api.js";
import { AuthContext } from "../api/AuthContext.jsx";
import moodsSample from "../api/moods-sample.json";

import EmojiRain from "../comps/EmojiRain.jsx";
import ColourBackgroundChange from "../comps/ColourBackgroundChange.jsx";

const HomePage = () => {
  const [moodData, setMoodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Toggle this to switch between sample data and API
  const USE_SAMPLE_DATA = false;

  // New function to fetch from sample data
  const fetchFromSample = async () => {
    setLoading(true);
    setError(null);
    try {
      // Find today's date entry or use the most recent one
      const today = new Date().toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
      const todayEntry = moodsSample.find((entry) => entry.date === today);
      const sampleData = todayEntry || moodsSample[moodsSample.length - 1];

      // Transform sample data to match expected format
      const transformedData = {
        Moods: sampleData.moods,
        MoodID: 0,
        date: sampleData.date,
      };

      setMoodData(transformedData);
      console.log("Fetched sample mood:", JSON.stringify(transformedData));
    } catch (e) {
      console.error("Failed to fetch sample mood:", e);
      setError("Failed to load sample mood");
    } finally {
      setLoading(false);
    }
  };

  // Original function to fetch from API
  const fetchFromAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const todaysMood = await mood.getToday();
      // keep whatever the server returns; we'll guard rendering below
      setMoodData(todaysMood || null);
      console.log("Fetched today's mood:", JSON.stringify(todaysMood));
    } catch (e) {
      console.error("Failed to fetch mood:", e);
      setError("Failed to load mood");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Use sample data or API based on flag
    if (USE_SAMPLE_DATA) {
      fetchFromSample();
    } else {
      fetchFromAPI();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMainMood = () => {
    if (!moodData) return "Unknown";
    try {
      const { Moods, MoodID } = moodData;

      // If we have an array of mood strings
      if (Array.isArray(Moods) && Moods.length > 0) {
        // Check if moods have percentages like "20% Worrisome"
        const hasPercentages = Moods.some((m) => String(m).includes("%"));

        if (hasPercentages) {
          // Parse and find highest percentage
          const parsed = Moods.map((entry) => {
            const str = String(entry || "");
            const m = str.match(/^\s*(\d+)%\s*(.*)$/);
            if (m)
              return { pct: parseInt(m[1], 10), label: m[2].trim() || str };
            const m2 = str.match(/(\d+)%/);
            if (m2)
              return {
                pct: parseInt(m2[1], 10),
                label: str.replace(m2[0], "").trim() || str,
              };
            return { pct: 0, label: str };
          });

          let best = parsed[0];
          for (let i = 1; i < parsed.length; i++) {
            if (parsed[i].pct > best.pct) best = parsed[i];
          }
          return best.label ?? "Unknown";
        } else {
          // Simple mood strings - count occurrences and return most common
          const moodCounts = {};
          Moods.forEach((m) => {
            const mood = String(m).toLowerCase();
            moodCounts[mood] = (moodCounts[mood] || 0) + 1;
          });

          let mostCommon = Moods[0];
          let maxCount = 0;
          for (const [mood, count] of Object.entries(moodCounts)) {
            if (count > maxCount) {
              maxCount = count;
              mostCommon = mood;
            }
          }

          return mostCommon.charAt(0).toUpperCase() + mostCommon.slice(1);
        }
      }

      // Fallback
      if (Array.isArray(Moods) && typeof MoodID === "number")
        return Moods[MoodID] ?? Moods[0] ?? "Unknown";
      return typeof moodData === "string" ? moodData : JSON.stringify(moodData);
    } catch {
      return "Unknown";
    }
  };
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center">
      <ColourBackgroundChange mainMood={renderMainMood()} />
      <UserHeader mainMood={renderMainMood()} />
      <div className="flex flex-col min-h-150 gap-6 text-center justify-center p-6">
        <p className="font-semibold text-blue-500">
          Today's current mood is...
        </p>

        {loading ? (
          <h2 className="text-3xl font-medium">Loading...</h2>
        ) : error ? (
          <h2 className="text-3xl font-medium text-red-500">{error}</h2>
        ) : (
          <>
            <h1 className="text-6xl font-semibold break-words">
              {renderMainMood()}
            </h1>
            <input type="checkbox" />

            <EmojiRain mainMood={renderMainMood()} />
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
