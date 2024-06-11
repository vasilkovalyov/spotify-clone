import './category-card.scss';

function CategoryCardSkeleton() {
  return (
    <div className="category-card category-card--skeleton pulse-animation">
      <h3 className="category-card__name pulse-animation"></h3>
    </div>
  );
}

export default CategoryCardSkeleton;
