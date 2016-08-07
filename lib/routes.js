Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});
Router.route('/liikmed/create', {
  name: 'createLiikmed',
  controller: 'LiikmedController',
  action: 'create',
  where: 'client'
});
Router.route('/liikmed', {
  name: 'liikmedList',
  controller: 'LiikmedController',
  action: 'list',
  where: 'client'
});
Router.route('/liikmed/:_id', {
  name: 'editLiige',
  controller: 'LiikmedController',
  action: 'edit',
  where: 'client'
});
Router.route('/teams/create', {
  name: 'createTeams',
  controller: 'TeamsController',
  action: 'create',
  where: 'client'
});
Router.route('/teams', {
  name: 'teamsList',
  controller: 'TeamsController',
  action: 'list',
  where: 'client'
});
