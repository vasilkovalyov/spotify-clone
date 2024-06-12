import { Link } from 'react-router-dom';

import { BlockHeadProps } from './block-head.type';

import './block.head.scss';

function BlockHead({ title, link, isTitleLarge = false }: BlockHeadProps) {
  const TitleTag = isTitleLarge ? 'h1' : 'h2';
  return (
    <div className="block-head">
      <TitleTag className="text-light">{title}</TitleTag>
      {link && (
        <Link className="block-head__link" to={link.path}>
          {link.name}
        </Link>
      )}
    </div>
  );
}

export default BlockHead;
