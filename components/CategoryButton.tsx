import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  href: string;
}

const CategoryButton = ({ name, href }: CategoryCardProps) => {
  return (
    <Link href={href}>
        <div className="btn btn-block rounded-full border-2 border-primary bg-[#082f49] text-white hover:border-secondary hover:bg-[#082f49]/90">
          <h3 className="text-sm font-medium">{name}</h3>
        </div>
    </Link>
  );
};

export default CategoryButton;