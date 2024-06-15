export type VolumeProps = {
  className?: string;
  value: number;
  onMute?: () => void;
  onChange?: (value: number) => void;
};
