import { getEnvironments } from "../src/helpers/getEnvironments";

const { VITE_MY_TESTING_ID } = getEnvironments();

describe('Testing on environmentVariables', () => {
  test('Should match environment variables', () => {
    expect('xOT89jF').toBe(VITE_MY_TESTING_ID);
  });
});
