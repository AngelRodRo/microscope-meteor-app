// var postsData = [
//   {
//     title: 'Introducing Telescope',
//     url: 'http://sachagreif.com/introducing-telescope/'
//   },
//   {
//     title: 'Meteor',
//     url: 'http://meteor.com'
//   },
//   {
//     title: 'The Meteor Book',
//     url: 'http://themeteorbook.com'
//   }
// ];
Template.postsList.helpers({
  posts: Posts.find({author:'bob-smith',category:'Javascript'})
});
