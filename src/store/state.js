import { playMode } from 'common/js/config'
// import { loadSearch } from 'common/js/cache'

const state = {
  singer: {},
  playing: false, /*播放*/
  fullScreen: false, /*全屏*/
  playlist: [], /*播放列表*/
  sequenceList: [], /*顺序列表*/
  mode: playMode.sequence, /*播放模式*/
  currentIndex: -1 /*当前播放的索引*/
  // disc: {},
  // topList: {},
  // searchHistory: loadSearch(),
  // playHistory: [],
  // favoriteList: []
}

export default state
