import EleventyFetch from '@11ty/eleventy-fetch';

async function fetch11ty(url) {
  let addr = new URL(url);
  try {
    let json = await EleventyFetch(url, {
      duration: '10m',
      type: 'json',
      verbose: true,
      directory: `.cache/eleventy-fetch/${addr.host}/`,
    });

    return json;
  } catch (e) {
    console.log('Failed fetch, returning null', e);
    return null;
  }
}

export { fetch11ty };
