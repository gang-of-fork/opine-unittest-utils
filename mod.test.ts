import { assertEquals } from "./test_deps.ts";

Deno.test("assert true", () => {
  assertEquals(true, true);
});
