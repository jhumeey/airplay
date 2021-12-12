export const fetchTagColor = (tag: string) => {
  switch (tag){
    case 'CSS':
      return 'blue-400';
    case 'fonts':
      return 'green-brand-01';
    case 'hosting':
      return 'purple-400';
    case 'icons':
      return 'yellow-300';
    case 'colors':
      return 'pink-300';
    case 'podcasts':
      return 'indigo-800';
    case 'photos':
      return 'red-400';
    case 'extensions':
      return 'blue-brand-02';
    default:
      return 'green-brand-01';
  }
};