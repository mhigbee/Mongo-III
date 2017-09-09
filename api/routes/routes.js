module.exports = (app) => {
  //add your new routes here
  const userControllers = require('../controllers/userControllers.js');
  const postControllers = require('../controllers/postControllers.js');

  app.route('/new-user')
    .post(userControllers.createUser);
  
  app.route('/login')
    .post(userControllers.login);

  app.route('/new-post')
    .post(postControllers.createNewPost);
  
  app.route('/posts')
    .get(postControllers.getAllBlogPosts);

  app.route('/posts/:id')
    .get(postControllers.getPostById)
    .put(postControllers.addCommentsToPost);
};
