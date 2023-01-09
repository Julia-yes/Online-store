export function createNode(className: string, textContent?: string | number) {
  const node = document.createElement('div');
  node.className = className;
  if (textContent) node.textContent = '' + textContent;
  return node;
}

export function setUrlParameter(key: string, param: string | number) {
  const params = getUrlParameters();
  params[key] = +param;
  let newParams = '';
  for (const prop in params) newParams += `?${prop}=${params[prop]}`

  if (newParams) {
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + newParams;
    window.history.pushState({ path: newurl }, '', newurl);
  }
}

export function getUrlParameterValue(key: string) {
  const params = getUrlParameters();
  return params[key];
}

function getUrlParameters() {
  let currentParams : string | string[] = '?';
  const params: { [key: string]: number} = {};
  if (window.location.search) {
    currentParams = window.location.search.split('?').splice(1, );
    currentParams.forEach((el) => {
      params[el.split('=')[0]] = +el.split('=')[1];
    })
  }
  return params;
}