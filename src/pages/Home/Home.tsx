import { BlockRecentlyPlayed } from '@/blocks';

export default function HomePage() {
  return (
    <div>
      <BlockRecentlyPlayed isLimited={false} />
    </div>
  );
}
