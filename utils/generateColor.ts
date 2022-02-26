export const fetchTagColor = (tag: string) => {
  let color: string;
  switch (tag){
    case 'css':
       color = 'blue-400';
       break;
    case 'fonts':
      color = 'green-brand-01';
      break;
    case 'hosting':
      color = 'purple-400';
      break;
    case 'icons':
      color = 'yellow-300';
      break;
    case 'colors':
      color = 'pink-300';
      break;
    case 'podcasts':
      color = 'indigo-800';
      break;
    case 'photos':
      color = 'red-400';
      break;
    case 'extensions':
      color = 'blue-brand-02';
      break;
    case 'youtube':
      color = 'gray-brand-02';
      break;
    default:
      color = 'green-brand-01';
  }
  return color;
};


export const colors = {
  podcasts: "sky-600",
  fonts: "indigo-500",
  extensions: "blue-600",
  youtube:"rose-500",
  css: "yellow-300",
  icons: "pink-700",
  illustrations: "fuschia-700",
  freelancing: "orange-700",
  learning: "zinc-700"

}