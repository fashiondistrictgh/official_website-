import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project so Next ignores stray lockfiles
  // elsewhere on the machine (e.g. C:\Users\HP\package-lock.json).
  outputFileTracingRoot: path.join(import.meta.dirname),
};

export default nextConfig;
