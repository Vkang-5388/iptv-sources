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
  fanmingming_live_sources,
} from '.';

export const sources = [
  // 1. 新增的高成功率专用源
  {
    name: '港澳台专用',
    f_name: 'gangtai_v2',
    url: 'https://raw.githubusercontent.com/fanmingming/live/main/tv/m3u/ipv6.m3u',
    filter: filter,
  },
  // 2. 保留你原本的其他源
  ...epg_pw_sources,
  ...youhun_sources,
  ...zbds_sources,
  ...hotel_tvn_sources,
];
