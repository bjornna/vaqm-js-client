import {DataElementQueryRequestBuilder} from '../vaqm/DataElementQueryRequestBuilder';
import {DataElementQueryRequest} from '../vaqm/query';
import {VaqmClient, VaqmClientConfiguration} from '../VaqmClient';

import 'dotenv/config'

const patientId = process.env.PATIENT_ID as string;
const base = process.env.BASE_URL as string;
describe("REST API CALLS", () => {

    let client: VaqmClient;
    beforeAll(() => {
        expect(patientId).not.toBeNull;
        expect(base).not.toBeNull;

        console.log(base);
        const clientConfig = new VaqmClientConfiguration();
        clientConfig.acceptAllCertificates = true;
        client = new VaqmClient(base, clientConfig);
    })

    test("QueryDeck", () => {
        const deck = queryDeck(patientId);
        return client.queryDataElement(deck);

    })

    test("QueryTimeSerie", () => {
        const ts = queryTimeSeries(patientId);
        return client.queryDataElement(ts);
    })
    test("Query All", () => {
        return client.getAllVaqmConfigurations();
    })

})






function queryTimeSeries(id: string) {
    const b: DataElementQueryRequestBuilder = new DataElementQueryRequestBuilder("PatientId", id);
    const queryRequest = b.asTimeSeries()
        .addDataElementParameter("4f1afee7-54f9-4e8c-9413-42af9561b590", "2.0.0")
        .get();
    return queryRequest;

}
function queryDeck(id: string): DataElementQueryRequest {

    const b: DataElementQueryRequestBuilder = new DataElementQueryRequestBuilder("PatientId", id);
    const queryRequest = b
        .asCard()
        .addDataElementParameter("6a8426a5-9ede-4f5d-816a-3f0c054f7a2f", "45.0.0")
        .addDataElementParameter("51b175b0-d0c9-43b5-afa2-c682197b4695", "45.0.0")
        .addDataElementParameter("c0e68bb0-3f34-4a26-a755-23cd13d02ec4", "45.0.0")
        .addDataElementParameter("52dfb1be-8ba8-454d-87be-28b32af28a02", "45.0.0")
        .addDataElementParameter("70a8e5a3-57b5-4692-943c-bf4941a26f1a", "15.0.0")
        .addDataElementParameter("6461c405-bc56-4d0b-8ab7-202c92c5a798", "62.0.0")
        .addDataElementParameter("10d1f511-4c8c-42ce-b5c5-cd8179e3aa2e", "62.0.0")
        .addDataElementParameter("d7844b41-5fb2-4e59-9db0-634c4caea2eb", "10.0.0")
        .addDataElementParameter("98ea9416-7211-4c5b-956f-d1a9d3f1e49c", "10.0.0")
        .addDataElementParameter("afe01f16-63e0-4b96-8b36-5aec5ff18939", "15.0.0")
        .addDataElementParameter("6e025ad5-c662-4e45-8796-11ded6324f47", "33.0.0")
        .addDataElementParameter("d3328b82-7170-45f7-b9b0-937125048ca1", "33.0.0")
        .get();
    return queryRequest;


}
