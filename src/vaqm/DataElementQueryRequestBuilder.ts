import { DataElementParameter, DataElementQueryRequest } from './query';
import { DataElementVersionId } from './response';

export class DataElementQueryRequestBuilder {
  private paramater: DataElementParameter;
  private partitionLimit = 0;
  private partitionByScope = false;

  constructor(scope: string, id: string) {
    this.paramater = {
      scope,
      parameters: [id],
      dataElementVersionIds: [],
    };
  }
  public asTimeSeries(): DataElementQueryRequestBuilder {
    this.partitionByScope = false;
    this.partitionLimit = 0;
    return this;
  }

  public asCard(): DataElementQueryRequestBuilder {
    this.partitionByScope = true;
    this.partitionLimit = 1;
    return this;
  }
  public get(): DataElementQueryRequest {
    return {
      partitionByScope: this.partitionByScope,
      partitionLimit: this.partitionLimit,
      dataElementParameters: [this.paramater],
      includeProfilingInfo: false,
    };
  }

  public addDataElementParameter(guid: string, version: string): DataElementQueryRequestBuilder {
    const d: DataElementVersionId = {
      guid,
      version,
    };
    this.paramater.dataElementVersionIds.push(d);
    return this;
  }
}
