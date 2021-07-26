const express = require("express");
const db = require("../models/index.js");
const {objectives, users, keyresults} = require("../models");
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
     const {objective_id, name, description} = req.body
    try{
       const objective = await db.objectives.findOne({where:{id: objective_id}}) 
             await db.keyResults.create({
        name, description, objective_id: objective.id
     })
    
      return res.status(200).send({ message: 'New Key Result  created' })

    }catch{
        res.status(401).send({ message: 'Key Result not created' });   
    }

 });

     /* get all key Result
 ========================================================= */
 router.get("/", async (req, res)=>{
   try{
         const keyResults = await db.keyResults.findAll()
         res.send(keyResults)
   }catch{
     res.status(404).send({ message: 'No Key Result  Found' });
   }
 })
     /* find single key result
 ========================================================= */
 
 router.get("/:id", async (req, res)=>{
   try{
         const keyResult = await db.keyResults.findAll({where:{id: req.params.id}})
         res.send(keyResult)
   }catch{
     res.status(404).send({ message: 'No Key Result  Found' });
   }
 })
 
     /* Update key result
 ========================================================= */
   router.patch('/:id', async (req, res) => {
      
       try{
            const keyResult = await db.keyResults.update({
                name:req.body.name, 
                description: req.body.description
            },
            {where:{id: req.params.id}});
       
         res.send({ message: ' Key Result Updated',  keyResult});
       } catch {
         res.status(404).send({ message: 'Key Result Not Found' });
       }
     });
  
   
     /*  delete key result
 ========================================================= */
   router.delete('/:id', async (req, res) => {
       try{
        const keyResult =   await db.keyResults.destroy({where:{id: req.params.id}});
       res.send({ message: 'Key Result Deleted' ,keyResult});
       } catch {
        res.status(404).send({ message: 'Key Result Not Found'});
       }
     });
   


module.exports = router;