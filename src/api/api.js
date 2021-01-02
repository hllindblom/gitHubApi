// eslint-disable-next-line no-unused-vars
const getData = (response) => {
};

const config = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
};

export const getAllOrganizationsApi = async () => {
  const response = await fetch('https://api.github.com/organizations?callBack=getData', config);

  if (response.status >= 400) {
    throw new Error(response);
  }

  const responseData = await response.json();

  return responseData;
};

export const getZenApi = async () => {
  const response = await fetch('https://api.github.com/zen?callBack=getData', config);

  if (response.status >= 400) {
    throw new Error(response);
  }

  const responseData = await response.text();

  return responseData;
};

export const getOctocatApi = async () => {
  const response = await fetch('https://api.github.com/octocat?callBack=getData', config);

  if (response.status >= 400) {
    throw new Error(response);
  }

  const responseData = await response.text();

  return responseData;
};
