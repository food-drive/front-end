const fs = require('fs');
const {comuni} = require('./src/resources/comuni.json');

const getComuniColletta = () => {
  const fileContent = fs.readFileSync('./comuni-colletta-palermo.csv', {encoding: 'utf8'});
  return fileContent.split('\r\n')
}

const getFiltered = comune => {
  const found = comuni.find(({nome}) => nome.toUpperCase() === comune)
  return {
    ...found,
    comuneColletta: comune
  };
}

const getUndefined = ({id}) => !id

const removeUndefined = ({id}) => id

const filteredComuni = getComuniColletta()
  .map(getFiltered)

const notFound = filteredComuni
.filter(getUndefined)

const ids = filteredComuni
  .filter(removeUndefined)
  .map(({id}) => id).join(',')

console.log(ids);