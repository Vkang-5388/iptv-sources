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

import { filter } from '../utils'; // 确保引入 filter
import {
  epg_pw_sources,
  // fanmingming_live_sources, // 暂时关掉旧的，改用下面的专用版
  youhun_sources,
  zbds_sources,
  hotel_tvn_sources,
} from '.';

export const sources = [
  // 新增：高成功率港澳台源
  {
    name: '港澳台专用',
    f_name: 'gangtai_v2',
    url: 'https://raw.githubusercontent.com/fanmingming/live/main/tv/m3u/ipv6.m3u',
    filter: filter,
  },
  // ...fanmingming_live_sources, 
  ...epg_pw_sources,
  ...youhun_sources,
  ...zbds_sources,
  ...hotel_tvn_sources,
];
