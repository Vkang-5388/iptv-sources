export * from './epg_pw';
export * from './iptv_org';
export * from './yang_m3u';
export * from './yuechan_live';
export * from './fanmingming_live';
export * from './qwerttvv_bj_iptv';
export * from './joevess_iptv';
export * from './cymz6_lives';
export * from './youhun';
export * from './zbds';
export * from './hotel_tvn';
export * from './utils';

import {
  epg_pw_sources,
  youhun_sources,
  zbds_sources,
  hotel_tvn_sources,
} from '.';

// 直接定义 filter 逻辑，彻底解决 "No matching export" 报错
const filter = (channel: any) => {
  return channel;
};

export const sources = [
  // 插入不用 VPN 的港澳台源
  {
    name: '港澳台免翻',
    f_name: 'gangtai_no_vpn',
    url: 'https://raw.githubusercontent.com/Guover/iptv/master/gangtai.m3u',
    filter: filter,
  },
  ...epg_pw_sources,
  ...youhun_sources,
  ...zbds_sources,
  ...hotel_tvn_sources,
];
