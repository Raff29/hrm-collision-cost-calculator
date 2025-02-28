"use client";

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('./MapContent'),
  { 
    ssr: false,
    loading: () => <div style={{ height: '400px', background: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading Map...</div>
  }
);

export default function Map() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapWithNoSSR />
    </div>
  );
}