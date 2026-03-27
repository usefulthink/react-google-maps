export const APILoadingStatus = {
  NOT_LOADED: 'NOT_LOADED',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED'
} as const;
export type APILoadingStatus =
  (typeof APILoadingStatus)[keyof typeof APILoadingStatus];
