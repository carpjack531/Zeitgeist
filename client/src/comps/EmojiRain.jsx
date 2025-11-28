// EmojiRain.jsx
import React from "react";

const EMOJI_SETS = [
    // words don't need to be exact for matches to be made cuz REGEX. 
    // Feel free to add more words/vibes AND/OR emojis
  [/(happy|joy|cheer|optimism|good)/i, ['😀','😄','😊','✨','🎉']],
  [/(sad|down|blue|gloom|depressing)/i, ['😢','😞','💧','☔']],
  [/(angry|mad|rage|irritating)/i,       ['😠','😡','💢','🔥']],
  [/(anxious|worry|panic|nervous)/i,       ['😰','😟','💭']],
  [/(calm|relax|peace|serene)/i,    ['😌','🧘','🌿']],
  [/(tired|sleep|exhausting)/i,        ['😴','🥱','💤']],
  [/(love|romance|affection)/i,     ['❤️','💕','😍']],
  [/(stress|overwhelm|tense)/i,     ['😣','😵‍💫','⚠️']],
  [/(celebrate|win|success|party)/i, ['🥳','🎊','🏆']],
];

function pickEmojis(mainMood) {
  const stringToTest = mainMood ?? ''; 
  for (const [moodSemanticsRegex, setOfEmojis] of EMOJI_SETS) if (moodSemanticsRegex.test(stringToTest)) return setOfEmojis;
  return ['🌟','✨','💫']; // default
}

export default function EmojiRain({ mainMood, count = 24 }) {
  const set = pickEmojis(mainMood);
  const rainDetails = Array.from({ length: count }, (_, i) => ({
    id: i,
    char: set[i % set.length],
    left: Math.random() * 100,            
    size: 18 + Math.random() * 18,       
    dur: 6 + Math.random() * 6,           
    delay: Math.random() * 6              
  }));

  return (
    <>
      {/* <style>{`
        @keyframes fall {
          0%   { transform: translateY(-110%); opacity: 0 }
          10%  { opacity: 1 }
          100% { transform: translateY(110vh); opacity: 0 }
        }
      `}</style> */}

      <style>{`
        @keyframes fall-sway {
  0%   { transform: translate(-10px, -110%); opacity: 0 }
  10%  { opacity: 1 }
  50%  { transform: translate(10px, 50vh) }
  100% { transform: translate(-10px, 110vh); opacity: 0 }
}
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {rainDetails.map(d => (
          <span
            key={d.id}
            className="absolute select-none"
            style={{
              left: `${d.left}vw`,
              top: `-10vh`,
              fontSize: `${d.size}px`,
              lineHeight: 1,
              animation: `fall-sway ${d.dur}s linear ${d.delay}s infinite`
            }}
          >
            {d.char}
          </span>
        ))}
      </div>
    </>
  );
}