import { filter } from '../utils';

export const sources: any[] = [
  {
    name: '港澳台免翻',
    f_name: 'gangtai_no_vpn',
    url: 'https://raw.githubusercontent.com/Guover/iptv/master/gangtai.m3u',
    filter: filter,
  },
  {
    name: '酒店电视',
    f_name: 'hotel',
    url: 'https://raw.githubusercontent.com/vbskyun/iptv/master/tv.m3u',
    filter: filter,
  }
];
