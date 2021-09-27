import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

import {VaqmConfiguration} from './vaqm/model';
import {DataElementQueryRequest} from './vaqm/query';
import {DataElementQueryResponse, DataElementVersionId} from './vaqm/response';
import * as https from 'https'


export class VaqmClient {
    private axiosInstance: AxiosInstance;
    constructor(private baseUrl: string, private config: VaqmClientConfiguration) {
        const axiosConfig: AxiosRequestConfig = {
            headers: {'User-Agent': 'DIPS VaqmClient 0.0.1'},

        }
        if (this.config.acceptAllCertificates) {

            axiosConfig.httpsAgent = new https.Agent({
                rejectUnauthorized: false
            })
        }


        this.axiosInstance = axios.create(axiosConfig)

    }




    public async queryDataElement(request: DataElementQueryRequest): Promise<DataElementQueryResponse> {
        try {
            const result = await this.axiosInstance.post(this.baseUrl + '/vaqm/dataelementquery', request);
            return result.data;
        } catch (err) {
            throw err;
        }
    }
    public async getVaqmByDataElementId(d: DataElementVersionId): Promise<VaqmConfiguration[]> {
        const request = {
            approved: true,
            guidVersions: [d],
        };
        const url = this.baseUrl + '/vaqm/dataelement';
        try {
            const result = await this.axiosInstance.post(url, request);
            return result.data;
        } catch (err) {
            throw err;
        }
    }
    public async getAllVaqmConfigurations(): Promise<VaqmConfiguration[]> {
        try {
            const result = await this.axiosInstance.get(this.baseUrl + '/vaqm', {
                params: {includeDeleted: false, onlyApproved: true, onlyLatest: true},
            });
            return result.data;
        } catch (err) {
            throw err;
        }
    }
}

export class VaqmClientConfiguration {
    public acceptAllCertificates = false;
    constructor() {

    }
}