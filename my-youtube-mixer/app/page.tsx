import React from 'react';

// Define page metadata
export const metadata = {
  title: 'YouTube Video Mixer',
  meta: [
    {
      name: 'description',
      content: 'Mix YouTube videos like a DJ',
    },
  ],
};

// The main page component
export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-4">YouTube Video Mixer</h1>

      {/* Video Player 1 */}
      <div className="video-container mb-4">
        <h2 className="text-2xl font-semibold">Video Player 1</h2>
        {/* Placeholder for YouTube Video Player 1 */}
      </div>

      {/* Video Player 2 */}
      <div className="video-container mb-4">
        <h2 className="text-2xl font-semibold">Video Player 2</h2>
        {/* Placeholder for YouTube Video Player 2 */}
      </div>

      {/* Mixer Controls */}
      <div className="mixer-controls">
        <h2 className="text-2xl font-semibold">Mixer Controls</h2>
        {/* Placeholder for Mixer Controls like sliders, buttons, etc. */}
      </div>
    </main>
  );
}
