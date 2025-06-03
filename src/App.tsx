import { useState } from 'react';
import FruitAnalysis from './components/Case1/FruitAnalysis';
import CommentCounter from './components/Case2/CommentCounter';
import UMKMLanding from './components/Case3/UMKMLanding';

type ActiveTab = 'case1' | 'case2' | 'case3';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('case1');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'case1':
        return <FruitAnalysis />;
      case 'case2':
        return <CommentCounter />;
      case 'case3':
        return <UMKMLanding />;
      default:
        return <FruitAnalysis />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {activeTab !== 'case3' && (
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex space-x-1">
              {[
                { key: 'case1' as ActiveTab, label: 'Case 1: Fruit Analysis' },
                { key: 'case2' as ActiveTab, label: 'Case 2: Comment Counter' },
                { key: 'case3' as ActiveTab, label: 'Case 3: UMKM Landing' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-4 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    activeTab === tab.key
                      ? 'text-blue-600 border-blue-600 bg-blue-50'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}

      <main>
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;
