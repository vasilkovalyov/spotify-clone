import { Link } from 'react-router-dom';

import { AlbumPanelProps } from './album-panel.type';

import './album-panel.scss';

function AlbumPanel({ href, image, name, subtitle }: AlbumPanelProps) {
  return (
    <div className="album-panel">
      <div className="album-panel__image">
        <img src={image.url} alt={name} />
      </div>
      <div className="album-panel__body">
        <p className="text-light">{subtitle}</p>
        <h3 className="text-light">{name}</h3>
      </div>
      <Link to={href} className="album-panel__link"></Link>
    </div>
  );
}

export default AlbumPanel;
