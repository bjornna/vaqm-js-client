export interface DataElementQueryResponse {
  formattedResults: FormattedResult[];
  formatDescriptions: FormatDescription[];
  profilingInfo: string | null;
  profilingInfoVersion: string | null;
}
export interface FormattedResult {
  value: string | number;
  scope: string;
  key: string;
  xFormat: FormattedResultFormat;
  yFormat: FormattedResultFormat;
  errorMessage?: string;
  sortFormat: string | null;
  dataElementVersionId: DataElementVersionId;
  formatDescriptionIds: string[];
  headers?: any;
}
export interface FormatDescription {
  formatDescriptionId: string;
  symbolType: string;
  symbol: string;
  symbolForegroundColor: string;
  alertType: string;
  alertTypeForegroundColor: string;
  alertTypeBackgroundColor: string;
  description: string;
}
export interface DataElementVersionId {
  guid: string;
  version: string;
}
export interface FormattedResultFormat {
  value: string | number;
  type: string | number | null;
}
