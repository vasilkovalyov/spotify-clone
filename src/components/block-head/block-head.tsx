import { Link } from 'react-router-dom';

import { BlockHeadProps } from './block-head.type';

import './block.head.scss';

function BlockHead({ title, link }: BlockHeadProps) {
  return (
    <div className="block-head">
      <h2 className="text-light">{title}</h2>
      {link && (
        <Link className="block-head__link" to={link.path}>
          {link.name}
        </Link>
      )}
    </div>
  );
}

export default BlockHead;
