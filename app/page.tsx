import { menuData } from "@/data/menuData";
import { MenuSection } from "@/components/MenuSection";

export default function Home() {
    return (
        <section className="container mx-auto px-4">
            <main>
                {Object.entries(menuData).map(([key, section]) => (
                    <MenuSection 
                        key={section.slug}
                        title={section.name}
                        sectionSlug={section.slug}
                        categories={section.categories}
                    />
                ))}
            </main>
        </section>
    );
}
