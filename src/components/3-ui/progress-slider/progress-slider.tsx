import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Slider } from 'rsuite';

import { ProgressSliderProps } from './progress-slider.type';

import './progress-slider.scss';

export default function ProgressSlider({
  className,
  value = 0,
  tooltip = false,
  ...props
}: ProgressSliderProps) {
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    setProgressValue(value);
  }, [value]);

  const classnames = cn(
    'progress-slider',
    {
      'progress-slider--full': value === 100,
    },
    className
  );

  return (
    <Slider
      progress
      tooltip={tooltip}
      value={progressValue}
      defaultValue={value}
      onChange={(value) => {
        setProgressValue(value);
      }}
      {...props}
      className={classnames}
    />
  );
}
