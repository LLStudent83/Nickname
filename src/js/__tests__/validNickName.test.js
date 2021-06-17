import Validator from '../validNickName';

test.each([
  ['OK', 'f333_-333kl25g', true],
  ['Non ok 4444', 'f3336_-333kl25g', false],
  ['Non ok sss_', 'f333_-333kl25g_', false],
  ['Non ok -sss', '-f333_-333kl25g', false],
  ['Non ok sss6', 'f333_-333kl25g6', false],
])(
  ('check Validator.validateUsername for %s checkName with %s amount'),
  (checkName, amount, expected) => {
    const result = Validator.validateUsername(amount);
    expect(result).toBe(expected);
  },
);
