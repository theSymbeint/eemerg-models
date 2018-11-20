import {ServiceCall} from "../src/index"






test('Call', () => {
  let c =  new ServiceCall()
  
  expect(c).toBeInstanceOf(ServiceCall);
})