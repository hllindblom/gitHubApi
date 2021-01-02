export const ORGANIZATION_FETCH_REQUESTED = 'ORGANIZATION_FETCH_REQUESTED';
export const ORGANIZATION_FETCH_SUCCEEDED = 'ORGANIZATION_FETCH_SUCCEEDED';
export const ORGANIZATION_FETCH_FAILED = 'ORGANIZATION_FETCH_FAILED';
export const INIT_REQUESTED = 'INIT_REQUESTED';
export const ZEN_FETCH_SUCCEEDED = 'ZEN_FETCH_SUCCEEDED';
export const INIT_FAILED = 'INIT_FAILED';
export const OCTOCAT_FETCH_SUCCEEDED = 'OCTOCAT_FETCH_SUCCEEDED';

export const fetchAllOrganizations = () => ({ type: ORGANIZATION_FETCH_REQUESTED });

export const receiveAllOrganizations = (organizations) => ({
  type: ORGANIZATION_FETCH_SUCCEEDED,
  organizations,
});

export const allOrganizationsFetchFailed = (errorTable) => ({
  type: ORGANIZATION_FETCH_FAILED,
  errorTable,
});

export const init = () => ({ type: INIT_REQUESTED });

export const receiveZen = (zen) => ({
  type: ZEN_FETCH_SUCCEEDED,
  zen,
});

export const initFailed = (error) => ({
  type: INIT_FAILED,
  error,
});

export const receiveOctocat = (octocat) => ({
  type: OCTOCAT_FETCH_SUCCEEDED,
  octocat,
});
