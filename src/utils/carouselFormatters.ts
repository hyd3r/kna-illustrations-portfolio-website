const carouselFormatters = {
  getAltText: ({ data, index }: { data: { caption: string }; index: number }) =>
    data.caption || `${index + 1}. image`,

  getNextLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Image ${currentIndex + 2} of ${views.length}`,
  getPrevLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Image ${currentIndex} of ${views.length}`,

  getNextTitle: () => 'Next Image',
  getPrevTitle: () => 'Previous Image',

  getCloseLabel: () => 'Close',
  getFullscreenLabel: ({ isFullscreen }: { isFullscreen: boolean }) =>
    isFullscreen ? 'Exit full screen view (f)' : 'Switch to full screen (f)',
};

export default carouselFormatters;
