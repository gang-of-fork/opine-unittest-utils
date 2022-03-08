import { assertEquals, assert } from "./test_deps.ts";
import {_wrapSpy, mockNextFunction, mockRequest, mockResponse} from "./mod.ts"

Deno.test("assert true", () => {
  assertEquals(true, true);
});


Deno.test("test mockRequest()", () => {
  const mockReq = mockRequest({})
  assertEquals(typeof mockReq.baseUrl , "string")
  assertEquals(typeof mockReq.body , "object")
  assertEquals(typeof mockReq.fresh , "boolean")
  assertEquals(typeof mockReq.hostname , "string")
  assertEquals(typeof mockReq.ip , "string")
  assertEquals(typeof mockReq.ips , "object")
  assertEquals(typeof mockReq.method , "string")
  assertEquals(typeof mockReq.originalUrl , "string")
  assertEquals(typeof mockReq.params , "object")
  assertEquals(typeof mockReq.path , "string")
  assertEquals(typeof mockReq.protocol , "string")
  assertEquals(typeof mockReq.query , "object")
  assertEquals(typeof mockReq.res , "object")
  assertEquals(typeof mockReq.route , "object")
  assertEquals(typeof mockReq.secure , "boolean")
  assertEquals(typeof mockReq.stale , "boolean")
  assertEquals(typeof mockReq.subdomains , "object")
  assertEquals(typeof mockReq.xhr , "boolean")
})

Deno.test("test mockRequest() with additional props", () => {
  const mockReq = mockRequest({
    method: "GET",
    path: "/user",
    headers: new Headers({
      auth: "json-web-token"
    }),
    accepts: () => {
      return "test"
    }
  })
  assertEquals(typeof mockReq.baseUrl , "string")
  assertEquals(typeof mockReq.body , "object")
  assertEquals(typeof mockReq.fresh , "boolean")
  assertEquals(typeof mockReq.hostname , "string")
  assertEquals(typeof mockReq.ip , "string")
  assertEquals(typeof mockReq.ips , "object")
  assertEquals(typeof mockReq.method , "string")
  assertEquals(typeof mockReq.originalUrl , "string")
  assertEquals(typeof mockReq.params , "object")
  assertEquals(typeof mockReq.path , "string")
  assertEquals(typeof mockReq.protocol , "string")
  assertEquals(typeof mockReq.query , "object")
  assertEquals(typeof mockReq.res , "object")
  assertEquals(typeof mockReq.route , "object")
  assertEquals(typeof mockReq.secure , "boolean")
  assertEquals(typeof mockReq.stale , "boolean")
  assertEquals(typeof mockReq.subdomains , "object")
  assertEquals(typeof mockReq.xhr , "boolean")
  assert(mockReq.headers instanceof Headers)
  assertEquals(mockReq.method, "GET")
  assertEquals(mockReq.path, "/user")
  assertEquals(mockReq.headers.get("auth"), "json-web-token")
  assertEquals(mockReq.accepts(), "test")

})



Deno.test("test mockNextFunction()", () => {
  const mockNextFunc = () => {}
  const mockNext = mockNextFunction(mockNextFunc);
  assertEquals(typeof mockNext, "function")
})

Deno.test("test mockResponse()", () => {
  const mockRes = mockResponse({})
  assertEquals(typeof mockRes.locals, "object")
})
Deno.test("test mockResponse() with additional props", () => {
  const mockRes = mockResponse({
    //ADD METHODS
    locals: {"test":"testLocal"}
  })
  assertEquals(typeof mockRes.locals, "object")
  assertEquals(typeof mockRes.status, "function")
  assertEquals(mockRes.locals.test, "testLocal")
  

})