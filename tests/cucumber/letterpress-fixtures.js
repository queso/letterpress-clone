(function () {
  'use strict';
  console.log('Hello!');
  if (Meteor.isClient) {
    //if (Meteor.isClient || !process.env.IS_MIRROR) {
    return;
  }

  Meteor.startup(function () {
    Chapters.remove({});
    Chapters.insert({title: "Item 2", description: "This chapter will cover item 2", chapterNumber: 2});
    Chapters.insert({title: "Item 1", description: "This chapter will cover item 1", chapterNumber: 1});
  });
})();
