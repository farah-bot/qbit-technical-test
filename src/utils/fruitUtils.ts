export interface IFruit {
  fruitId: number;
  fruitName: string;
  fruitType: 'IMPORT' | 'LOCAL';
  stock: number;
}

export const capitalizeEachWord = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Soal 1: Buah apa saja yang dimiliki Andi? 
export const getAllFruitNames = (fruits: IFruit[]): string[] => {
  return [...new Set(
    fruits.map(fruit => capitalizeEachWord(fruit.fruitName))
  )];
};

// Soal 2 + 3: Wadah per jenis buah dan total stok per jenis
export const groupFruitsWithStockByType = (fruits: IFruit[]) => {
  const grouped: Record<
    string,
    Record<string, IFruit>
  > = {};

  for (const fruit of fruits) {
    const type = fruit.fruitType;
    const name = capitalizeEachWord(fruit.fruitName);

    if (!grouped[type]) grouped[type] = {};

    if (grouped[type][name]) {
      grouped[type][name].stock += fruit.stock;
    } else {
      grouped[type][name] = {
        fruitId: fruit.fruitId,
        fruitName: name,
        fruitType: fruit.fruitType,
        stock: fruit.stock
      };
    }
  }

  const containers: Record<string, { fruits: IFruit[]; totalStock: number }> = {};

  for (const [type, fruitsMap] of Object.entries(grouped)) {
    const fruitsArray = Object.values(fruitsMap);
    const totalStock = fruitsArray.reduce((acc, f) => acc + f.stock, 0);

    containers[type] = {
      fruits: fruitsArray,
      totalStock
    };
  }

  return {
    totalContainers: Object.keys(containers).length,
    containers
  };
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
  const duplicateNames: string[] = [];
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
