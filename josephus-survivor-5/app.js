function josephusSurvivor(n, k) {
  let doomIndex = 0;
  let survivors = [];

  for (let i = 1; i < n + 1; i++) survivors.push(i);

  return weedOutSurvivors();

  function weedOutSurvivors() {
    if (survivors.length === 1) return survivors[0];

    survivors.splice(defineEliminationIndex(k), 1);

    return weedOutSurvivors();
  }

  function defineEliminationIndex(doomCount) {
    doomIndex += doomCount;
    if (doomIndex <= survivors.length) {
      return --doomIndex;
    }

    const advanceCount = doomIndex - survivors.length;
    doomIndex = 0;

    return defineEliminationIndex(advanceCount);
  }
}
