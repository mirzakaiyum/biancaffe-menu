interface MenuItem {
  name: string;
  slug: string;
}

interface MenuSection {
  name: string;
  slug: string;
  categories: Record<string, MenuItem>;
}

interface CategoryWithSection extends MenuItem {
  sectionName: string;
  sectionSlug: string;
}

export const MenuCategories = (
  menuData: Record<string, MenuSection>
): Record<string, CategoryWithSection> => {
  return Object.entries(menuData).reduce((acc, [_, section]) => {
    const categoriesWithSection = Object.entries(section.categories).reduce(
      (categoryAcc, [categoryKey, category]) => ({
        ...categoryAcc,
        [category.slug]: {
          ...category,
          sectionName: section.name,
          sectionSlug: section.slug,
        },
      }),
      {}
    );
    return { ...acc, ...categoriesWithSection };
  }, {});
};