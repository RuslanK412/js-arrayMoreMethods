function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    const percentOfSuccess = item.athletes === 0 ? 0 : ((item.medals / item.athletes) * 100).toFixed(1);
    return {
      ...item,
      percentOfSuccess: `${percentOfSuccess}%`
    };
  });
}

module.exports = addSuccessPercent;
