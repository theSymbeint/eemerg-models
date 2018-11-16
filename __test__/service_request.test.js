import {ServiceRequest} from "../src/index"





test("ServiceRequest", () => {
    let sr = new ServiceRequest()

    expect(sr).toBeInstanceOf(ServiceRequest)
})