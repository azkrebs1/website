import { createFoldsetProxy } from "@foldset/nextjs";

const foldsetProxy = createFoldsetProxy({
  apiKey: process.env.FOLDSET_API_KEY!, baseURL: "https://api-git-akrebsfirsttestreal-foldset-75f74d59.vercel.app/"
});

export default foldsetProxy;