import type { IFruit } from '../types/fruit';

// Soal 1: Buah apa saja yang dimiliki Andi?
export const getAllFruitNames = (fruits: IFruit[]): string[] => {
  return [...new Set(fruits.map(fruit => fruit.fruitName))];
};

// Soal 2: Berapa wadah yang dibutuhkan dan buah apa saja di masing-masing wadah?
export const groupFruitsByType = (fruits: IFruit[]) => {
  const grouped = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = [];
    }
    acc[fruit.fruitType].push(fruit);
    return acc;
  }, {} as Record<string, IFruit[]>);

  return {
    totalContainers: Object.keys(grouped).length,
    containers: grouped
  };
};

// Soal 3: Total stock di masing-masing wadah
export const getTotalStockByType = (fruits: IFruit[]) => {
  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = 0;
    }
    acc[fruit.fruitType] += fruit.stock;
    return acc;
  }, {} as Record<string, number>);
};

// Soal 4: Analisis masalah data
export const analyzeDataIssues = (fruits: IFruit[]): string[] => {
  const issues: string[] = [];
  
  const ids = fruits.map(f => f.fruitId);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    issues.push(`Duplicate fruitId found: ${[...new Set(duplicateIds)].join(', ')}`);
  }
  
  const names = fruits.map(f => f.fruitName.toLowerCase());
  const duplicateNames = [];
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      if (names[i] === names[j]) {
        duplicateNames.push(fruits[i].fruitName + ' & ' + fruits[j].fruitName);
      }
    }
  }
  if (duplicateNames.length > 0) {
    issues.push(`Case sensitivity issues: ${duplicateNames.join(', ')}`);
  }
  
  return issues;
};