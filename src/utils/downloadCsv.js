export default ({ data, name }) => {
  const csv = data.reduce((ret, row) => {
    return `${ret}${row.join(',')}\n`;
  }, '');

  const hiddenElement = document.createElement('a');
  hiddenElement.href = `data:text/csv;charset=utf-8,${encodeURI(csv)}`;
  hiddenElement.target = '_blank';
  hiddenElement.download = `${name}.csv`;
  hiddenElement.click();
};
