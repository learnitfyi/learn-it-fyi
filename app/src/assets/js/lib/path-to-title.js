const pathToTitle = (input) => {
  return input
  .slice(-(input.length-1))
  .split('-')
  .join(' ');
}

export default pathToTitle;
