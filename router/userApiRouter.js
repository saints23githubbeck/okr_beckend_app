const express = require("express");
const router = express.Router();
const { User } = require("../models/index")
const bcrypt = require('bcrypt');

    /* user register
========================================================= */
router.post("/",  (req, res) =>{
  try{
    
  const user = User.create({
       username: req.body.username ,
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       password: bcrypt.hashSync(req.body.password, 10),
    }).then(newUser => res.send(newUser))
        res.status(201);
  }catch (e){
    console.log(e)
    res.sendStatus(401);
  }
});
    /* user login
========================================================= */
router.get("/login",  (req, res) => {
    try{
      const user =  User.findOne({ where: { email: req.body.email, password: req.body.password } });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).send(user);
        }
        res.status(200).send( user );
      }
    }catch{
       res.sendStatus(401);
    }
     
    });

    /* get all user 
========================================================= */
router.get("/",  (req, res)=>{
  try{
     User.findAll()
    .then(users => res.send(users))
      res.status(201);
  }catch{
    res.sendStatus(404);
  }
})
    /* user find
========================================================= */

router.get("/:username", (req, res)=>{
  try{
       User.findAll({
          where:{username: req.params.username}
          ,order: [['createdAt', 'DESC']]})
          .then(user => res.send(user))
          res.status(201);

  }catch{
    res.sendStatus(404);
  }
})

    /* user profile update
========================================================= */
 router.patch('/profile/:id',  (req, res) => {
    const user =  User.update(req.params.id);
      if (user) {
        user.username = req.body.username || user.username;
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = password;
        }
        res.sendStatus(200).send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
        });
      }
    });
  
 
  
    /* user delete
========================================================= */
  router.delete('/:username', (req, res) => {
      try {
           User.destroy({where:{username: req.params.username}})
           res.sendStatus(201)
      } catch {
        res.sendStatus(404);
      }
    });
  
    /* user update
========================================================= */
  // router.patch('/:username', (req, res) => {
  //   try{
  //       User.update({
  //       username: req.body.username || User.username, 
  //      firstName: req.body.firstName || User.firstName,
  //      lastName: reg.body.lastName || User.lastName,
  //      email: req.body.email || User.email,
  //      password: bcrypt.hashSync(req.body.password, 10) || User.password,
  //     },
  //     {where:{username: req.params.username}});
    
  //       res.sendStatus(200);
  //     } catch {
  //       res.sendStatus(404);
  //     }
  //   });

  router.patch("/:username",  (req, res) =>{
    try{
    User.update({ username: req.body.username ,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password, 10)}
        ,{where: {username: req.params.username}})
           res.sendStatus(201);
    }catch (e){
      console.log(e)
      res.sendStatus(404);
    }
  });
    /* Logout Route
========================================================= */
router.delete('/logout',  (req, res) => {
  const { users, cookies: { auth_token: authToken } } = req
  if (users && authToken) {
     req.users.logout(authToken);
    return res.sendStatus(201)
  }
  return res.sendStatus(404)
});

module.exports = router;