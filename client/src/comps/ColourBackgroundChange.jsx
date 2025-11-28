import React, { useEffect, useState } from "react";

const COLOR_PALETTE_SETS = [
  // words don't need to be exact for matches to be made cuz REGEX. 
  // Feel free to add more words/vibes AND/OR colours
  [/(happy|joy|cheer|optimism|good)/i, [
    '#FFD93D', // bright yellow
    '#FFEC99', // soft yellow
    '#F9C74F', // warm gold
    '#FFE066', // bright pastel
    '#FFF3B0'  // pale sunshine
  ]],

  [/(sad|down|blue|gloom|depressing)/i, [
    '#4D77FF', // medium blue
    '#6EA8FE', // sky blue
    '#A7C6ED', // soft blue
    '#1E3A8A', // deep navy
    '#BBD0FF'  // pale blue
  ]],

  [/(angry|mad|rage|irritating)/i, [
    '#D00000', // harsh red
    '#FF4D4D', // bright red
    '#A4161A', // dark red
    '#FF6A3D', // hot orange
    '#B10F2E'  // crimson
  ]],

  [/(anxious|worry|panic|nervous)/i, [
    '#E5989B', // muted rose
    '#FFB4A2', // soft peach
    '#B5838D', // dusty lavender
    '#FFCDB2', // pale peach
    '#6D6875'  // stormy purple-gray
  ]],

  [/(calm|relax|peace|serene)/i, [
    '#84A98C', // sage green
    '#CAD2C5', // soft gray-green
    '#52796F', // deep forest teal
    '#B5E48C', // light lime green
    '#D8F3DC'  // pale mint
  ]],

  [/(tired|sleep|exhaust|exhausting)/i, [
    '#6C757D', // muted gray
    '#ADB5BD', // soft gray
    '#CED4DA', // pale gray
    '#495057', // dark gray
    '#E9ECEF'  // cloudy gray
  ]],

  [/(love|romance|affection)/i, [
    '#FF5D8F', // hot pink
    '#FF99C8', // pastel pink
    '#F07167', // warm coral
    '#B83B5E', // deep magenta
    '#FFD6E0'  // soft rose
  ]],

  [/(stress|overwhelm|tense)/i, [
    '#FF9F1C', // anxiety orange
    '#FFBF69', // softer orange
    '#CB997E', // tense brown-beige
    '#D68189', // muted stress pink
    '#9E2A2B'  // intense red-brown
  ]],

  [/(celebrate|win|success|party)/i, [
    '#06D6A0', // bright mint
    '#1B9AAA', // teal
    '#FFD166', // celebratory gold
    '#EF476F', // party pink-red
    '#F7B801'  // trophy gold
  ]],
];

function pickColor(mainMood, variant = 0) {
  const stringToTest = mainMood ?? ''; 
  for (const [moodSemanticsRegex, setOfColors] of COLOR_PALETTE_SETS) {
    if (moodSemanticsRegex.test(stringToTest)) {
      // Use variant to pick a consistent but different color from the set
      const index = variant % setOfColors.length;
      return setOfColors[index];
    }
  }
  return '#E8E8E8'; // default neutral gray
}

export default function ColourBackgroundChange({ mainMood, variant = 0, className = "fixed inset-0 -z-10" }) {
  const [bgColor, setBgColor] = useState('#E8E8E8');

  useEffect(() => {
    const newColor = pickColor(mainMood, variant);
    setBgColor(newColor);
  }, [mainMood, variant]);

  return (
    <div 
      className={`${className} transition-colors duration-1000`}
      style={{ backgroundColor: bgColor }}
    />
  );
}

