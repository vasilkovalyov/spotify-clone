import { Link } from 'react-router-dom';

import { CategoryCardProps } from './category-card.type';

import './category-card.scss';

function CategoryCard({
  href,
  image,
  name,
  backgroundColor,
}: CategoryCardProps) {
  return (
    <div
      className="category-card"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Link to={href} className="category-card__link"></Link>
      <h3 className="category-card__name">{name}</h3>
      <img src={image} alt={name} className="category-card__image" />
    </div>
  );
}

export default CategoryCard;
