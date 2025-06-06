
interface CategoryFilter {
  id: string;
  title: string;
}

interface CourseFiltersProps {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
  isSpanish: boolean;
}

const CourseFilters = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  isSpanish
}: CourseFiltersProps) => {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-full transition-all ${
          selectedCategory === null 
            ? 'bg-primary text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        {isSpanish ? "Todos" : "All"}
      </button>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-full transition-all ${
            selectedCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default CourseFilters;
