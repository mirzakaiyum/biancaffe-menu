export interface MenuItem {
  name: string;
  slug: string;
}
export interface MenuSection {
  name: string;
  slug: string;
  categories: Record<string, MenuItem>;
}