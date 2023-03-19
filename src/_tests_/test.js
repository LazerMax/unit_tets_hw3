import getLevel from '../getLevelFunction';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('positive test', () => {
  fetchData.mockReturnValue({ status: 'ok' });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('negative test', () => {
  fetchData.mockReturnValue({ status: 'bad' });
  getLevel(-1);
  expect(fetchData).toBeCalledWith('https://server/user/-1');
});
