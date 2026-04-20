/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import BottomNav, { TabType } from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import MonitoringScreen from './screens/MonitoringScreen';
import WardrobeScreen from './screens/WardrobeScreen';
import WeatherScreen from './screens/WeatherScreen';
import WashingMachineScreen from './screens/WashingMachineScreen';
import SplashScreen from './screens/SplashScreen';
import AIScreen from './screens/AIScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [showWashingMachine, setShowWashingMachine] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo(0, 0);
    }
  }, [activeTab, showWashingMachine]);

  if (showSplash) {
    return (
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-surface-light dark:bg-surface-dark shadow-xl overflow-hidden">
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </div>
    );
  }

  if (showWashingMachine) {
    return (
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-surface-light dark:bg-surface-dark shadow-xl overflow-hidden">
        <WashingMachineScreen onBack={() => setShowWashingMachine(false)} />
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl overflow-hidden">
      {activeTab === 'home' && <HomeScreen onOpenWashingMachine={() => setShowWashingMachine(true)} onOpenWeather={() => setActiveTab('weather')} />}
      {activeTab === 'monitor' && <MonitoringScreen onBack={() => setActiveTab('home')} onOpenWardrobe={() => setActiveTab('wardrobe')} />}
      {activeTab === 'wardrobe' && <WardrobeScreen onBack={() => setActiveTab('home')} />}
      {activeTab === 'weather' && <WeatherScreen onBack={() => setActiveTab('home')} />}
      {activeTab === 'ai' && <AIScreen onBack={() => setActiveTab('home')} />}
      {activeTab === 'profile' && (
        <main className="flex-1 flex items-center justify-center">
          <p className="text-slate-500">个人中心 (Profile)</p>
        </main>
      )}
      
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
}

