import {Call} from "../src/index"






test('Call', () => {
  let c =  new Call()
  
  expect(c).toBeInstanceOf(Call);
})