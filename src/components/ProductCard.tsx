type Props = {
  id?: number;
  name: string;
  price: number;
  image?: string;
  href?: string;
};

export function ProductCard({
  id,
  name,
  price,
  image = "/api/placeholder/300/200",
  href
}: Props) {
  const to = href ?? (id ? `/products/${id}` : "#");
  
  return (
    <a href={to} className="card group">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title group-hover:text-primary-500 transition-colors line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div className="card-price text-lg font-bold text-primary-600">
            {price.toFixed(2)} kr
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm text-primary-500 font-medium">Se mer →</span>
          </div>
        </div>
      </div>
    </a>
  );
}
