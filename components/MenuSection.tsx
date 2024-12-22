import CategoryButton from "@/components/CategoryButton";

interface MenuItem {
  name: string;
  slug: string;
}

interface MenuSectionProps {
  title: string;
  sectionSlug: string;
  categories: Record<string, MenuItem>;
}

export const MenuSection = ({ title, sectionSlug, categories }: MenuSectionProps) => {
  return (
    <>
      <h3 className="my-6 text-center text-2xl font-bold">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Object.entries(categories).map(([_, category]) => (
          <CategoryButton 
            key={category.slug} 
            {...category} 
            href={`/menu/${sectionSlug}/${category.slug}`}
          />
        ))}
      </div>
    </>
  );
};