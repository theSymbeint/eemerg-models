import { ServiceRequest } from "../src/index"

test("ServiceRequest", () => {
    let sr = new ServiceRequest()

    expect(sr).toBeInstanceOf(ServiceRequest)
})

test("ServiceRequest persist func", () => {
    let sr = new ServiceRequest()

    let _obj = { id: 22 }
    let sr1 = new ServiceRequest(_obj)

    expect(sr.persist()).toEqual({})
    expect(sr1.persist()).toEqual(_obj)
})
