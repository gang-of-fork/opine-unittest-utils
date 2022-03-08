import {
  NextFunction,
  OpineRequest as Request,
  OpineResponse as Response,
} from "./deps.ts";
import { spy } from "./deps.ts";

export function _wrapSpy(func?: Function) {
  return func ? spy(func as any) : spy();
}

/**
 * Get a mock for opine NextFunction
 * @returns mock for express next
 */
export function mockNextFunction(func: Function): NextFunction {
  const next = _wrapSpy(func);

  return next;
}

/**
 * Get a Mock for opine request
 * @param additional any properties that should be set explicitly
 * @returns a mock for opine Requests
 */
export function mockRequest(additional: Partial<Request>): Request {
  //define properties and methods according to docs - http://expressjs.com/en/4x/api.html#req
  const props: Partial<Request> = {
    //app: {},
    baseUrl: "",
    body: {},
    //cookies: {},
    fresh: true,
    //host: "",
    hostname: "",
    ip: "",
    ips: [],
    method: "",
    originalUrl: "",
    params: {},
    path: "",
    protocol: "",
    query: {},
    res: mockResponse({}),
    route: {},
    secure: true,
    //signedCookies: {},
    stale: true,
    subdomains: [],
    xhr: true,
    headers: additional.headers ? additional.headers : new Headers({}),
  };

  const methods: (keyof Request)[] = [
    "accepts",
    "acceptsCharsets",
    "acceptsEncodings",
    "acceptsLanguages",
    "get",
    "is",
    "param",
    "range",
  ];

  //set properties
  const req = {
    ...props,
    ...additional,
  };

  //set methods
  methods.forEach((method) => {
    req[method] = _wrapSpy(additional[method]);
  });

  return req as Request;
}

/**
 * Get a mock for opine Response
 * @param additional any properties that should be set explicitly
 * @returns a mock for opine Response
 */
export function mockResponse(additional: Partial<Response>): Response {
  //define properties and methods according to docs - http://expressjs.com/en/4x/api.html#res
  const props: Partial<Response> = {
    //app: {},
    //headersSent: true,
    locals: {},
  };

  const methods: (keyof Response)[] = [
    "append",
    "attachment",
    "cookie",
    "clearCookie",
    "download",
    "end",
    "format",
    "get",
    "json",
    "jsonp",
    "links",
    "location",
    "redirect",
    "render",
    "send",
    "sendFile",
    "sendStatus",
    "set",
    "status",
    "type",
    "vary",
  ];

  //set properties
  const res = {
    ...props,
    ...additional,
  };

  //set methods
  methods.forEach((method) => {
    res[method] = _wrapSpy(additional[method]);
  });

  return res as Response;
}
