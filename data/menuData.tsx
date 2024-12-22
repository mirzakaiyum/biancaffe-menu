interface MenuItem {
  name: string;
  slug: string;
}

interface MenuSection {
  name: string;
  slug: string;
  categories: Record<string, MenuItem>;
}

export const menuData: Record<string, MenuSection> = {
  bistro: {
    name: "Bistro",
    slug: "bistro",
    categories: {
      breakfastAndBrunch: {
        name: "Breakfast & Brunch",
        slug: "breakfast-and-brunch",
      },
      appetizer: {
        name: "Appetizer",
        slug: "appetizer",
      },
      soupAndSalad: {
        name: "Soup & Salad",
        slug: "soup-and-salad",
      },
      pastaAndMore: {
        name: "Pasta & More",
        slug: "pasta-and-more",
      },
      panini: {
        name: "Panini",
        slug: "panini",
      },
      steak: {
        name: "Italian Steak",
        slug: "italian-steak",
      },
      pizza: {
        name: "Pizza",
        slug: "pizza",
      },
    }
  },
  drinks: {
    name: "Drinks",
    slug: "drinks",
    categories: {
      classicDrinks: {
        name: "Classic Hot / Cold",
        slug: "classic-hot-cold",
      },
      specialityDrinks: {
        name: "Speciality Hot / Cold",
        slug: "speciality-hot-cold",
      },
      frappe: {
        name: "Frappe",
        slug: "frappe",
      },
      frozenSmoothies: {
        name: "Frozen Smoothies",
        slug: "frozen-smoothies",
      },
      lemonadeAndMojito: {
        name: "Lemonade & Mojito",
        slug: "lemonade-and-mojito",
      },
      chiller: {
        name: "Chiller",
        slug: "chiller",
      },
    }
  },
  desserts: {
    name: "Desserts",
    slug: "desserts",
    categories: {
      tart: {
        name: "Tart",
        slug: "tart",
      },
      cake: {
        name: "Cake",
        slug: "cake",
      },
      macaron: {
        name: "Macaron",
        slug: "macaron",
      },
      mousse: {
        name: "Mousse",
        slug: "mousse",
      },
      muffinAndMore: {
        name: "Muffin & More",
        slug: "muffin-and-more",
      },
    }
  }
};