const getProgression = (value, step, length) => {
  const result = [];
  let randomValueProgression = value;
  for (let i = 0; i < length; i += 1) {
    const progression = randomValueProgression + step;
    result.push(progression);
    randomValueProgression += step;
  }
  return result;
};
export default getProgression;
