// 1. 补齐程序运行必需的导出零件
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
export * from './utils'; // 包含 handle_m3u, filter 等关键工具

// 2. 引入配置所需的零件
import { filter } from '../utils';
import {
  epg_pw_sources,
  youhun_sources,
  zbds_sources,
  hotel_tvn_sources,
} from '.';

// 3. 定义直播源清单
export const sources: any[] = [
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
