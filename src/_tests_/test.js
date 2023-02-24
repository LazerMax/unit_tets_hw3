import getLevel from '../getLevelFunction';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('positive test', () => {
  // httpGet.mockReturnValue(JSON.stringify(({})));
  const result = getLevel(1);
  expect(`Ваш текущий уровень: ${response.level}`).toBe(result);
});

test('negative test', () => {
  // httpGet.mockReturnValue(JSON.stringify(({})));
  const result = getLevel(-1);
  expect('Информация об уровне временно недоступна').toBe(result);
});
