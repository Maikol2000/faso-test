// ArticleFeedback.jsx
import React, { useState } from "react";
import Image from "next/image";

export default function ArticleFeedback() {
  type ReactionsType = {
    useful: number;
    love: number;
    funny: number;
    surprised: number;
    bored: number;
    angry: number;
  };

  const [selectedReaction, setSelectedReaction] =
    useState<ReactionsType | null>(null);
  const [reactions, setReactions] = useState<ReactionsType>({
    useful: 1,
    love: 2,
    funny: 0,
    surprised: 1,
    bored: 0,
    angry: 0,
  });

  const reactionsList = [
    { id: "useful", emoji: "👍", label: "Hữu ích", count: reactions.useful },
    { id: "love", emoji: "💚", label: "Yêu thích", count: reactions.love },
    { id: "funny", emoji: "😍", label: "Thú vị", count: reactions.funny },
    {
      id: "surprised",
      emoji: "😲",
      label: "Bất ngờ",
      count: reactions.surprised,
    },
    { id: "bored", emoji: "🥱", label: "Nhàm chán", count: reactions.bored },
    { id: "angry", emoji: "😡", label: "Tức giận", count: reactions.angry },
  ];

  const totalReactions = Object.values(reactions).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 my-8">
      <h2 className="text-center text-2xl font-medium text-gray-700 mb-3">
        Bạn thấy bài viết như thế nào?
      </h2>
      <p className="text-center text-gray-500 mb-6">
        {totalReactions} phản hồi
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {reactionsList.map((reaction) => (
          <button
            key={reaction.id}
            className={`flex flex-col items-center justify-center w-24 py-3 rounded-lg transition-all duration-300 hover:scale-125 hover:animate-pulse cursor-pointer`}
          >
            <div className="text-3xl mb-2">{reaction.emoji}</div>
            <div className="font-medium text-lg">{reaction.count}</div>
            <div className="text-gray-600 text-sm">{reaction.label}</div>
          </button>
        ))}
      </div>
      {/* Add some CSS animations */}
      <style jsx global>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }

        button:hover .text-3xl {
          animation: bounce 0.5s ease;
        }
      `}</style>
    </div>
  );
}
