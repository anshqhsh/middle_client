export interface IYoutube {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: IPageInfo
  items: IItem[]
}

interface IItem {
  kind: string
  etag: string
  id: IId
  snippet: ISnippet
}

interface ISnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

interface IThumbnails {
  default: IDefault
  medium: IDefault
  high: IDefault
}

interface IDefault {
  url: string
  width: number
  height: number
}

interface IId {
  kind: string
  videoId: string
}

interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}
