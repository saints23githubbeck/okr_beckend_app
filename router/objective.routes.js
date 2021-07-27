const express = require("express");
const db = require("../models/index.js");
const {objectives, users} = require("../models");
const router = express.Router();

// router.get('/', async(req, res) => {
//     res.send('get works');
// });

// router.get('/:id', async(req, res) => {
//     res.send(`get by objective-id works - "${req.params.id}"`);
// });

// router.post('/', async(req, res) => {
//     res.status(201).send('post works');
// });


     /* creat new objective 
 ========================================================= */
router.post("/", async  (req, res) =>{
     const {user_id, name, description} = req.body
    try{
        
       const user = await db.users.findOne({where:{id: user_id}}) 
             await db.objectives.create({
        name, description, user_id: user.id
     })

     return  res.status(401).send({ message: 'Objective  created' })

    }catch{
        res.status(200).send({ message: 'Objective not created' });   
    }

 });

     /* get all objective 
 ========================================================= */
 router.get("/", async (req, res)=>{
   try{
         const objectives = await db.objectives.findAll()
         res.send(objectives)
   }catch{
     res.status(404).send({ message: 'No User  Found' });
   }
 })
     /* find single objective
 ========================================================= */
 
 router.get("/:id", async (req, res)=>{
   try{
         const objective = await db.objectives.findAll({where:{id: req.params.id}})
         res.send(objective)
   }catch{
     res.status(404).send({ message: 'No User  Found' });
   }
 })
 
     /* Update Objective
 ========================================================= */
   router.patch('/:id', async (req, res) => {
      
       try{
            const objective = await db.objectives.update({
                name:req.body.name, 
                description: req.body.description
            },
            {where:{id: req.params.id}});
       
         res.send({ message: 'UObjective Updated',  objective});
       } catch {
         res.status(404).send({ message: 'objective Not Found' });
       }
     });
  
   
     /*  delete key result
 ========================================================= */
   router.delete('/:id', async (req, res) => {
       try{
        const objective =   await db.objectives.destroy({where:{id: req.params.id}});
       res.send({ message: 'objective Deleted' ,objective});
       } catch {
        res.status(404).send({ message: 'objective Not Found'});
       }
     });
   


module.exports = router;