const convert = (value) => {
  return (value / 1024).toFixed(2);
};

const MBToGbHelper = {
  convert,
};

export default MBToGbHelper;
