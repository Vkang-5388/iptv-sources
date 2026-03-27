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

import { filter } from '../utils';
import {
  epg_pw_sources,
  youhun_sources,
  zbds_sources,
  hotel_tvn_sources,
} from '.';

export const sources = [
  // 这里换成了更适合国内网络、不用VPN的源
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
