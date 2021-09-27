import {DataElementVersionId} from './response';
export interface DataElementQueryRequest {
  dataElementParameters: DataElementParameter[];
  partitionByScope: boolean;
  partitionLimit: number;
  includeProfilingInfo: boolean;
  headers?: DataElementQueryRequestHeader[];
}
export interface DataElementQueryRequestHeader {
  key: string;
  value: string;
  dataElementVersionId: DataElementVersionId;
}
export interface DataElementParameter {
  scope: string;
  parameters: string[];
  dataElementVersionIds: DataElementVersionId[];
}
export interface RangePredicate {
  minValue: any;
  maxValue: any;
  minValueIncluded: boolean;
  maxValueIncluded: boolean;
}
