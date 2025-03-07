import { addIcon } from '@iconify/svelte';

addIcon('custom:blocks-wave', {
  body: `
  <g fill="currentColor">
    <rect x="1" y="1" width="7.33" height="7.33">
      <animate id="a" attributeName="x" begin="0;b.end+0.2s" dur="0.6s" values="1;4;1" />
      <animate attributeName="y" begin="0;b.end+0.2s" dur="0.6s" values="1;4;1" />
      <animate attributeName="width" begin="0;b.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="0;b.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="8.33" y="1" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" />
      <animate attributeName="y" begin="a.begin+0.1s" dur="0.6s" values="1;4;1" />
      <animate attributeName="width" begin="a.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="1" y="8.33" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.1s" dur="0.6s" values="1;4;1" />
      <animate attributeName="y" begin="a.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" />
      <animate attributeName="width" begin="a.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="15.66" y="1" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" />
      <animate attributeName="y" begin="a.begin+0.2s" dur="0.6s" values="1;4;1" />
      <animate attributeName="width" begin="a.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="8.33" y="8.33" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" />
      <animate attributeName="y" begin="a.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" />
      <animate attributeName="width" begin="a.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="1" y="15.66" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.2s" dur="0.6s" values="1;4;1" />
      <animate attributeName="y" begin="a.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" />
      <animate attributeName="width" begin="a.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="15.66" y="8.33" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" />
      <animate attributeName="y" begin="a.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" />
      <animate attributeName="width" begin="a.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="8.33" y="15.66" width="7.33" height="7.33">
      <animate attributeName="x" begin="a.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" />
      <animate attributeName="y" begin="a.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" />
      <animate attributeName="width" begin="a.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
    <rect x="15.66" y="15.66" width="7.33" height="7.33">
      <animate id="b" attributeName="x" begin="a.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" />
      <animate attributeName="y" begin="a.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" />
      <animate attributeName="width" begin="a.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" />
      <animate attributeName="height" begin="a.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" />
    </rect>
  </g>
  `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/g, ''),
  width: 24,
  height: 24
});
