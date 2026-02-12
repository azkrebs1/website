import { createFoldsetProxy } from "@foldset/nextjs";

const foldsetProxy = createFoldsetProxy({
  apiKey: process.env.FOLDSET_API_KEY!,
});

export default foldsetProxy;