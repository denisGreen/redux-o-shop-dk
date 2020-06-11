import actionCreator from "./actions-creator";

it("actionCreator function should create actions functions", () => {
  const TEST_ACTION = "TEST_ACTION";
  const testPayload = "test_payload";
  const expectedOutput = {
    type: TEST_ACTION,
    payload: testPayload
  };
  const expectedOutputWithoutPayload = {
    type: TEST_ACTION
  };

  expect(actionCreator(TEST_ACTION, testPayload)).toEqual(expectedOutput);
  expect(actionCreator(TEST_ACTION)).toEqual(expectedOutputWithoutPayload);
  expect(actionCreator()).toEqual("Error");
});
