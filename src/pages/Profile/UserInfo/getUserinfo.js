import UAParser from 'ua-parser-js';

export const getUserInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();

  return {
    browser: result.browser.name,
    browserVersion: result.browser.version,
    os: result.os.name,
    osVersion: result.os.version,
    device: result.device.model || 'Desktop',
    deviceType: result.device.type,
  };
};
