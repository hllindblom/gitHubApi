// eslint-disable-next-line no-unused-vars
const getData = (response) => {
};

const config = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
};

export const getAllOrganizationsApi = async () => {
  // const config = {
  //   headers: await apiHeaders(getTokenUrl, getEncodedReturnUrl, process.env.REACT_APP_AAD_PRODUCT_SUBSCRIPTION_KEY),
  // };

  // const configsResponse =
  //   await fetch(`${process.env.REACT_APP_CONFIG_API}/ConfigColumns`, config);
  // const responseData = await configsResponse.json();
  // const basicColumns = JSON.parse(responseData.basicColumns);
  // const tenantColumns = JSON.parse(responseData.tenantColumns);
  // const tenantColumnConfig = JSON.parse(responseData.tenantColumnConfig);

  // const tenantAllColumnsData = getColumns(basicColumns, tenantColumns, tenantColumnConfig);

  // if (responseData && responseData.userColumnConfig) {
  //   const userColumnConfig = JSON.parse(responseData.userColumnConfig);

  //   return {
  //     allColumns: getColumns(basicColumns, tenantColumns, tenantColumnConfig, userColumnConfig),
  //     tenantAllColumns: tenantAllColumnsData,
  //   };
  // }

  // return {
  //   allColumns: tenantAllColumnsData,
  //   tenantAllColumns: tenantAllColumnsData,
  // };

  const response = await fetch('https://api.github.com/organizations?callBack=getData', config);
  console.log(response);
  const responseData = await response.json();
  console.log(responseData);
  return responseData;

  // return [{ id: 1, text: 'asdasd' }];
};

export const getZenApi = async () => {
  const response = await fetch('https://api.github.com/zen?callBack=getData', config);
  console.log(response);
  const responseData = await response.text();
  console.log(responseData);
  return responseData;
};

export const getOctocatApi = async () => {
  const response = await fetch('https://api.github.com/octocat?callBack=getData', config);
  console.log(response);
  const responseData = await response.text();
  console.log(responseData);
  return responseData;
};
