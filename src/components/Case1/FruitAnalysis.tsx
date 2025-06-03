import React from 'react';
import { fruits } from '../../data/fruits';
import { getAllFruitNames, groupFruitsByType, getTotalStockByType, analyzeDataIssues } from '../../utils/fruitUtils';

const FruitAnalysis: React.FC = () => {
  const allFruits = getAllFruitNames(fruits);
  const groupedFruits = groupFruitsByType(fruits);
  const stockByType = getTotalStockByType(fruits);
  const issues = analyzeDataIssues(fruits);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Case 1: Analisis Buah Andi</h2>
      
      {/* Soal 1 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-600">1. Buah yang dimiliki Andi:</h3>
        <div className="flex flex-wrap gap-2">
          {allFruits.map((fruit, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {fruit}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">Total: {allFruits.length} jenis buah</p>
      </div>

      {/* Soal 2 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-green-600">2. Wadah berdasarkan tipe:</h3>
        <p className="mb-3">Jumlah wadah dibutuhkan: <strong>{groupedFruits.totalContainers}</strong></p>
        
        {Object.entries(groupedFruits.containers).map(([type, fruits]) => (
          <div key={type} className="mb-4 p-4 border rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Wadah {type}:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {fruits.map((fruit, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">{fruit.fruitName}</span>
                  <span className="text-gray-500 ml-2">(Stock: {fruit.stock})</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soal 3 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-purple-600">3. Total stock per wadah:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(stockByType).map(([type, total]) => (
            <div key={type} className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700">{type}</h4>
              <p className="text-2xl font-bold text-purple-800">{total}</p>
              <p className="text-sm text-purple-600">total stock</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soal 4 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-red-600">4. Komentar/Issues:</h3>
        {issues.length > 0 ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-1">
              {issues.map((issue, index) => (
                <li key={index} className="text-red-700">{issue}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-green-600">Tidak ada masalah yang ditemukan dalam data.</p>
        )}
      </div>
    </div>
  );
};

export default FruitAnalysis;