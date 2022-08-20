const API_KEY = process.env.REACT_APP_YT_API_KEY;

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const DEFAULT_SEARCH_TERM = 'bloomberg studio 1.0';
const DEFAULT_VIDEOS_LIST = [
  {
    publishedAt: '2022-04-22T19:07:41Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Bloomberg Studio 1.0 - Zoox CEO Aicha Evans',
    description:
      'Aicha Evans, Zoox CEO, speaks with Emily Chang about her vision to transform transportation with a fleet of robotaxis, why she ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/7wd95YYEQ0E/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/7wd95YYEQ0E/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/7wd95YYEQ0E/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2022-04-22T19:07:41Z',
    videoId: '7wd95YYEQ0E',
  },
  {
    publishedAt: '2022-06-16T01:40:57Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Amazon CEO Andy Jassy on Bloomberg Studio 1.0',
    description:
      "Andy Jassy, Amazon CEO speaks with Emily Chang about the company's innovation priorities, as well as heated competition in ...",
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/_dnzvbh5CCI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/_dnzvbh5CCI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/_dnzvbh5CCI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2022-06-16T01:40:57Z',
    videoId: '_dnzvbh5CCI',
  },
  {
    publishedAt: '2021-11-29T22:36:49Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Bloomberg Studio 1.0: Alphabet CEO Sundar Pichai',
    description:
      'Alphabet CEO Sundar Pichai sits down with Emily Chang on this episode of "Bloomberg Studio 1.0" to discuss his company\'s $2 ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/A4ZdVB3xRgU/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/A4ZdVB3xRgU/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/A4ZdVB3xRgU/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2021-11-29T22:36:49Z',
    videoId: 'A4ZdVB3xRgU',
  },
  {
    publishedAt: '2022-05-19T01:39:42Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Roblox CEO David Baszucki on Bloomberg Studio 1.0',
    description:
      'David Baszucki, Roblox CEO & Co-Founder speaks with Emily Chang about building an online gaming platform with over 50 ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/-ltUt5-Zrro/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/-ltUt5-Zrro/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/-ltUt5-Zrro/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2022-05-19T01:39:42Z',
    videoId: '-ltUt5-Zrro',
  },
  {
    publishedAt: '2022-03-17T01:36:54Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Instacart CEO Fidji Simo on Bloomberg Studio 1.0',
    description:
      'On the latest episode of Bloomberg Studio 1.0., Emily Chang speaks exclusively with Instacart CEO Fidji Simo about the impact of ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/L4EjTZk0sIo/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/L4EjTZk0sIo/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/L4EjTZk0sIo/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2022-03-17T01:36:54Z',
    videoId: 'L4EjTZk0sIo',
  },
  {
    publishedAt: '2022-02-17T17:18:20Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Intel CEO Pat Gelsinger on Bloomberg Studio 1.0',
    description:
      'On the latest episode of Bloomberg Studio 1.0., Emily Chang speaks with Intel CEO Pat Gelsinger on the heels of his one year ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/NUD6qNauJsI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/NUD6qNauJsI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/NUD6qNauJsI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2022-02-17T17:18:20Z',
    videoId: 'NUD6qNauJsI',
  },
  {
    publishedAt: '2021-11-18T02:36:57Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title:
      'Amazon Web Services CEO Adam Selipsky on &quot;Bloomberg Studio 1.0&quot;',
    description:
      'AWS CEO Adam Selipsky sits down with Emily Chang on this episode of "Bloomberg Studio 1.0" to discuss the changing of the ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/_Tx3oHzKarY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/_Tx3oHzKarY/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/_Tx3oHzKarY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2021-11-18T02:36:57Z',
    videoId: '_Tx3oHzKarY',
  },
  {
    publishedAt: '2021-12-16T03:53:31Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Alphabet and Google CFO Ruth Porat on Bloomberg Studio 1.0',
    description:
      'On the latest episode of "Bloomberg Studio 1.0," Emily Chang speaks with Ruth Porat, senior vice president and chief financial ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Iy4BKQJ0KI0/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Iy4BKQJ0KI0/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Iy4BKQJ0KI0/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2021-12-16T03:53:31Z',
    videoId: 'Iy4BKQJ0KI0',
  },
  {
    publishedAt: '2017-06-15T04:12:38Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Apple CEO Tim Cook on Bloomberg Studio 1.0',
    description:
      "On this special edition of Bloomberg Studio 1.0, Apple CEO Tim Cook sits down with Bloomberg Technology's Emily Chang for an ...",
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/yK2zzcjp2As/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/yK2zzcjp2As/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/yK2zzcjp2As/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2017-06-15T04:12:38Z',
    videoId: 'yK2zzcjp2As',
  },
  {
    publishedAt: '2021-02-11T05:03:16Z',
    channelId: 'UCrM7B7SL_g1edFOnmj-SDKg',
    title: 'Microsoft CEO Satya Nadella on Bloomberg Studio 1.0 (full show)',
    description:
      'Feb.10 -- In this latest episode of Bloomberg Studio 1.0, host Emily Chang sits down for an exclusive interview with Microsoft Corp.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/fUTUCGCBKbI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/fUTUCGCBKbI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/fUTUCGCBKbI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Bloomberg Technology',
    liveBroadcastContent: 'none',
    publishTime: '2021-02-11T05:03:16Z',
    videoId: 'fUTUCGCBKbI',
  },
];

export { API_KEY, BASE_URL, DEFAULT_SEARCH_TERM, DEFAULT_VIDEOS_LIST };
