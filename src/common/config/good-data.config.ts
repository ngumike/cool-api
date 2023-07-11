import { registerAs } from '@nestjs/config';

export default registerAs('goodData', () => ({
  api: process.env.GOOD_DATA_API,
  domain: process.env.GOOD_DATA_DOMAIN,
  username: process.env.GOOD_DATA_USERNAME,
  password: process.env.GOOD_DATA_PASSWORD,
  ssoProvider: process.env.GOOD_DATA_SSO_PROVIDER,
  ssoPassPhrase: process.env.GOOD_DATA_SSO_PASS_PHRASE,
  ssoPrivateKey: process.env.GOOD_DATA_SSO_PRIVATE_KEY,
  gdPublicKey: process.env.GOOD_DATA_GD_PUBLIC_KEY,
}));
