const getPackageFeatures = (features) => {
  const havePin = features?.includes("656cc095485cfd01499d1362");
  const havePinHome = features?.includes("668a8ff18da4baa896aaea64");
  const haveRepost = features?.includes("656cc0c1485cfd01499d1365");
  const haveDashboard = features?.includes("656cc135485cfd01499d136b");
  return { havePin, havePinHome, haveRepost, haveDashboard };
};

export { getPackageFeatures };
