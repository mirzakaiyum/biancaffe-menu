import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
}

const CategoryCard = ({ name, slug }: CategoryCardProps) => {
  return (
    <Link href={`/category/${slug}`}>
      <div className="btn relative flex h-[200px] items-end justify-center rounded-3xl border-2 border-base-100 bg-cover bg-center p-3 hover:scale-105" style={{ backgroundImage: `url(/images/${slug}.webp)` }}>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black  via-transparent to-transparent"></div>
        <div className="relative text-center text-neutral-50">
          <h3 className="">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;