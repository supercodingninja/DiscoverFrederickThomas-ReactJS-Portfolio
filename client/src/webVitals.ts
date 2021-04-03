const webVitals = onEntry => {
    if (onEntry && onEntry instanceof Function) {
      import('webVitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onEntry);
        getFID(onEntry);
        getFCP(onEntry);
        getLCP(onEntry);
        getTTFB(onEntry);
      });
    }
  };
  
  export default webVitals;