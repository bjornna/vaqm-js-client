
import {DataElementQueryRequestBuilder} from '../vaqm/DataElementQueryRequestBuilder';
describe("DataElementQueryRequestBuilder", () => {
    let builder: DataElementQueryRequestBuilder;

    beforeEach(() => {
        builder = new DataElementQueryRequestBuilder("PatientId", "abcd");
    })

    test("AsCard", () => {

        const r = builder.asCard().get();
        expect(r.partitionByScope).toBe(true);
        expect(r.partitionLimit).toBe(1);
    })
    test("AsTimeSerie", () => {
        const r = builder.asTimeSeries().get();
        expect(r.partitionByScope).toBe(false);
        expect(r.partitionLimit).toBe(0);
    })
})
