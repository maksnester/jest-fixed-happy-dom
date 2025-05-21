const HappyDomEnvironment = require('@happy-dom/jest-environment').default

// same as https://github.com/mswjs/jest-fixed-jsdom package does but for happy-dom
class FixedHappyDomEnvironment extends HappyDomEnvironment {
  constructor(...args) {
    super(...args);

    this.global.TextDecoder = TextDecoder;
    this.global.TextEncoder = TextEncoder;
    this.global.TextDecoderStream = TextDecoderStream;
    this.global.TextEncoderStream = TextEncoderStream;
    this.global.ReadableStream = ReadableStream;

    this.global.Blob = Blob;
    this.global.Headers = Headers;
    this.global.FormData = FormData;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.fetch = fetch;
    this.global.structuredClone = structuredClone;
    this.global.URL = URL;
    this.global.URLSearchParams = URLSearchParams;

    this.global.BroadcastChannel = BroadcastChannel;
    this.global.TransformStream = TransformStream;
  }
}


module.exports = FixedHappyDomEnvironment
