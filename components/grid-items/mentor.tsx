import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "../icon";

const Mentor = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      <div className="w-full @lg:text-lg font-semibold">{item.title}</div>
      {/* Price & Promo Container */}
      <div className="">
        {/* Bottom Container */}
        <div className="font-bold text-primary @lg:text-base text-sm">
        {item.icon && <Icon type={item.icon} color={item.color} />}
        </div>
      </div>
    </Link>
  );
};

export default Mentor;
