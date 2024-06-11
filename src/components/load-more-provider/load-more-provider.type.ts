export type LoadMoreProviderProps = {
  children: React.ReactNode;
  isWork?: boolean;
  observerOptions?: IntersectionObserverInit;
  deps: any[];
  callback: () => void;
};
