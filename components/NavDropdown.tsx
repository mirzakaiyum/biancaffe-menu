import Link from "next/link";
import { MenuItem } from "@/types/menu";

interface NavDropdownProps {
  title: string;
  items: MenuItem[];
  sectionSlug: string;
}

export const NavDropdown = ({ title, items, sectionSlug }: NavDropdownProps) => {
  return (
    <li>
      <details>
        <summary>{title}</summary>
        <ul className="p-2">
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={`/menu/${sectionSlug}/${item.slug}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};