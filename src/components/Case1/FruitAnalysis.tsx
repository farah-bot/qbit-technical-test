import React from 'react';
import { fruits } from '../../data/fruits';
import {
  getAllFruitNames,
  groupFruitsWithStockByType,
  analyzeDataIssues
} from '../../utils/fruitUtils';

const FruitAnalysis: React.FC = () => {
  const allFruits = getAllFruitNames(fruits);
  const groupedData = groupFruitsWithStockByType(fruits);
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

      {/* Soal 2 & 3 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-green-600">
          2. Informasi Wadah dan Total Stok per Tipe:
        </h3>
        <p className="mb-3">Jumlah wadah dibutuhkan: <strong>{groupedData.totalContainers}</strong></p>

        {Object.entries(groupedData.containers).map(([type, data]) => (
          <div key={type} className="mb-6 p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-700">Wadah {type}</h4>
              <span className="text-sm text-purple-700 font-semibold">
                Total stock: {data.totalStock}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {data.fruits.map((fruit, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">{fruit.fruitName}</span>
                  <span className="text-gray-500 ml-2">(Stock: {fruit.stock})</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soal 4 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-red-600">3. Komentar/Issues:</h3>
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
