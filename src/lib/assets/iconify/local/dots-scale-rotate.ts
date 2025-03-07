import { addIcon } from '@iconify/svelte';

addIcon('custom:dots-scale-rotate', {
  body: `
  <g fill="currentColor">
    <circle cx="12" cy="3" r="1">
      <animate id="_0" attributeName="r" begin="0;_2.end-0.5s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="16.5" cy="4.21" r="1">
      <animate id="_1" attributeName="r" begin="_0.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="7.5" cy="4.21" r="1">
      <animate id="_2" attributeName="r" begin="_4.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="19.79" cy="7.5" r="1">
      <animate id="_3" attributeName="r" begin="_1.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="4.21" cy="7.5" r="1">
      <animate id="_4" attributeName="r" begin="_6.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="21" cy="12" r="1">
      <animate id="_5" attributeName="r" begin="_3.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="3" cy="12" r="1">
      <animate id="_6" attributeName="r" begin="_8.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="19.79" cy="16.5" r="1">
      <animate id="_7" attributeName="r" begin="_5.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="4.21" cy="16.5" r="1">
      <animate id="_8" attributeName="r" begin="_a.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="16.5" cy="19.79" r="1">
      <animate id="_9" attributeName="r" begin="_7.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="7.5" cy="19.79" r="1">
      <animate id="_a" attributeName="r" begin="_b.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <circle cx="12" cy="21" r="1">
      <animate id="_b" attributeName="r" begin="_9.begin+0.1s" calcMode="spline" dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
    </circle>
    <animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate"
      values="360 12 12;0 12 12" />
  </g>
  `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/g, ''),
  width: 24,
  height: 24
});
