import  ServiceCall  from "../src/call"

test("Call", () => {
    let c = new ServiceCall()

    expect(c).toBeInstanceOf(ServiceCall)
})
