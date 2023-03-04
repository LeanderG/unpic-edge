/** @jsxImportSource https://esm.sh/preact */
import { render } from "https://esm.sh/preact-render-to-string";
import { transformProps } from "https://esm.sh/@unpic/core?dev";

export default (request) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const params = Object.fromEntries(searchParams);
  const props = transformProps(params);
  return new Response(render(<img {...props} />));
};

export const config = { path: "/api" };
