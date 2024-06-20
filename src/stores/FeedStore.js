import {makeAutoObservable} from "mobx";

class FeedStore{
  //state
  feedPage= 'Feed'
  feedPageText = '내가 구독하는 글입니다'
  followMidText = '아직 구독하는 블로그가 없습니다. 피드에서 추천 블로그를 확인하세요.'

  constructor() {
    makeAutoObservable(this)
  }
  //action
  clickSubscribeing=()=>{
    this.feedPage = "Following"
    this.feedPageText = "0개의 블로그를 구독중입니다"
    this.followMidText = '아직 구독하는 블로그가 없습니다. 피드에서 추천 블로그를 확인하세요.'
  }
  clickSubscribed=()=>{
    this.feedPage = "Follower"
    this.feedPageText= "0명이 내 블로그를 구독합니다"
    this.followMidText = '아직 내 블로그를 구독하는 사람이 없습니다.'
  }
}

export default FeedStore