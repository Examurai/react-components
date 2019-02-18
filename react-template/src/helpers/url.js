export const splitUrl = url => {
  if (!url) {
    return null;
  }

  const urlSplitRegex = /(http[s]?):\/\/([^\/^:]+):?(\d*)/;
  const splitted = url.match(urlSplitRegex);

  if (!splitted || !splitted[0]) {
    return {};
  }

  const scheme = splitted[1];
  const host = splitted[2];
  let port = splitted[3];

  if (!port) {
    port = scheme === 'https' ? '443' : '80';
  }

  return {
    scheme,
    host,
    port,
  };
};
