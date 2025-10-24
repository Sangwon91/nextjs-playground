import type { NextConfig } from "next";
import createMDX from '@next/mdx';


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// withMDX 래퍼 생성
const withMDX = createMDX({
  // 필요한 경우 여기에 마크다운 플러그인 추가
});

// MDX 설정과 Next.js 설정을 병합
export default withMDX(nextConfig);

// export default nextConfig;

