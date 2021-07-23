const express = require("express");
const router = express.Router();
const db = require("../models/index.js");
const users = require("../models/users.js");

    /* user register
========================================================= */
router.post("/register", async  (req, res) =>{
   await db.users.create({
       name: req.body.name ,
       email: req.body.email,
       password: req.body.password,
    }).then(newUser => res.send(newUser));
});
    /* user login
========================================================= */
router.post("/login", async (req, res) => {
      const user = await db.users.findOne({ where: { email: req.body.email, password: req.body.password } });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    });

    /* get all user 
========================================================= */
router.get("/all", async (req, res)=>{
  try{
        const user = await db.users.findAll()
        res.send(user)
  }catch{
    res.status(404).send({ message: 'No User  Found' });
  }
})
    /* user find
========================================================= */

router.get("/findone", async (req, res)=>{
  try{
        const user = await db.users.findOne()
        res.send(user)
  }catch{
    res.status(404).send({ message: 'No User  Found' });
  }
})

    /* user profile update
========================================================= */
 router.put('/profile/:id', async (req, res) => {
    const user = await db.users.update(req.params.id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = password;
        }
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
        });
      }
    });
  
 
  
    /* user delete
========================================================= */
  router.post('/:id', async (req, res) => {
      const user = await db.users.delete(req.params.id);
      if (user) {
        if (user.email === 'arthurshdrack45@gmail.com') {
          res.status(400).send({ message: 'Can Not Delete Admin User' });
          return;
        }
        res.send({ message: 'User Deleted', user: deleteUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    });
  
    /* user update
========================================================= */
  router.put('/:id', async (req, res) => {
      const user = await db.users.update(req.params.id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        res.send({ message: 'User Updated', user: updatedUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    });

    /* Logout Route
========================================================= */
router.delete('/logout', async (req, res) => {
  const { users, cookies: { auth_token: authToken } } = req
  if (users && authToken) {
    await req.users.logout(authToken);
    return res.status(204).send()
  }
  return res.status(400).send(
    { errors: [{ message: 'not authenticated' }] }
  );
});

module.exports = router;