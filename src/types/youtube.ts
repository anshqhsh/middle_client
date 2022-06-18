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

export interface ISnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface IThumbnails {
  default: IDefault
  medium: IDefault
  high: IDefault
}

export interface IDefault {
  url: string
  width: number
  height: number
}

export interface IId {
  kind: string
  videoId: string
}

interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}
