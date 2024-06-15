import { useEffect, useState } from 'react';
import cn from 'classnames';
import { VolumeProps } from './volume.type';

import { Button, Icon, IconEnum, ProgressSlider } from '../3-ui';

import './volume.scss';

export default function Volume({
  className,
  value = 100,
  onMute,
  onChange,
}: VolumeProps) {
  const [volume, setVolume] = useState<number>(100);
  const [tempVolume, setTempVolume] = useState<number | null>(null);

  useEffect(() => {
    setVolume(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIconVolume = (value: number) => {
    if (value === 0) return <Icon icon={IconEnum.VOLUME_MUTE} />;
    if (value > 0 && value < 33) return <Icon icon={IconEnum.VOLUME_LOW} />;
    if (value > 33 && value < 66) return <Icon icon={IconEnum.VOLUME_MEDIUM} />;
    return <Icon icon={IconEnum.VOLUME_HIGH} />;
  };

  function onHandleMute() {
    if (volume > 0) {
      setTempVolume(volume);
      setVolume(0);
    }

    if (volume === 0) {
      if (tempVolume) {
        setVolume(tempVolume);
        setTempVolume(null);
      } else {
        setVolume(100);
      }
    }

    onMute && onMute();
  }

  return (
    <div className={cn('volume', className)}>
      <Button className="volume__toggler" onClick={onHandleMute}>
        {getIconVolume(volume)}
      </Button>
      <ProgressSlider
        className="volume__slider"
        value={volume}
        onChange={(value) => {
          setVolume(value);
          onChange && onChange(value);
        }}
      />
    </div>
  );
}
