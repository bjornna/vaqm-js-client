export interface VaqmConfiguration {
  id: string;
  oid: string;
  name: string;
  aqlBindings: AqlBinding[];
  dataElements: DataElement[];
  version: string;
  approved: boolean;
  deleted?: boolean;
  createdByAuthor: string;
  created: string;
  deletedByAuthor?: string;
  imported: boolean;
  versionComment: string;
  deletedTimeStamp: string;
  isDeleted: boolean;
  basedOnVersion: string;
  adminDescription: string;
  keyValues: KeyValue[];
}
export interface AqlBinding {
  id: string;
  oid: string;
  name: string;
  defaultArchetypeId: string;
  baseAql: string;
  paths: AqlBindingPath[];
  whereExpressions: AqlBindingWhereExpression[];
  orderByExpressions: AqlBindingOrderByExpression[];
  predicates: AqlBindingPredicate[];
  adminDescription: string;
}

export interface AqlBindingPredicate {
  id: string;
  where: string;
  orderBy: string;
  adminDescription: string;
}
export interface AqlBindingWhereExpression {
  id: string;
  path: string;
  operator: string;
  value: string;
  adminDescription: string;
}
export interface AqlBindingOrderByExpression {
  id: string;
  value: string;
  ascending: boolean;
  adminDescription: string;
}
export interface AqlBindingPath {
  id: string;
  identifierRef: string;
  value: string;
  adminDescription: string;
  dataType: string;
}
export interface DataElement {
  id: string;
  oid: string;
  name: string;
  adminName: string;
  description: string;
  categories: string;
  displayFormat: string;
  sortFormat: string;
  sortFormatDataType: string;
  isEditable: string;
  adminDescription: string;
  customData: string;
  formatExpressions: DataElementFormatExpression[];
  keyValues: KeyValue[];
  xFormat: string;
  xFormatDataType: string;
  yFormat: string;
  yFormatDataType: string;
  rangeFormat: string;
  rangeFormatDataType: string;
}
export interface DataElementFormatExpression {
  id: string;
  whenExpression: DataElementFormatExpressionWhenExpression;
  alertType: string;
  alertTypeForegroundColor: string;
  alertTypeBackgroundColor: string;
  symbol: string;
  symbolType: string;
  symbolForegroundColor: string;
  adminDescription: string;
  description: string;
}
export interface KeyValue {
  key: string;
  value: string;
  adminDescription: string;
}
export interface DataElementFormatExpressionWhenExpression {
  value: string;
  adminDescription: string;
}
