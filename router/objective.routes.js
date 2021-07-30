const express = require("express");
const router = express.Router();
const { Objective } = require('../models/index');

router.get("/", async (req, res)=>{
  try{
    res.send(await Objective.findAll());
  }catch{
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res)=>{
  try {
    res.send(await Objective.findAll({
      where: { id: req.params.id },
      order: [['createdAt', 'DESC']]
    }));
  } catch {
    res.sendStatus(500);
  }
})

router.post("/", async (req, res) => {
    try {
        const objective = await Objective.create({
          ownerUsername: 'account_1',
          title: req.body.title,
          type: req.body.type,
          progressType: req.body.progressType,
          description: 'This is the description of this objective. You can update later.'
        });

        res.status(201).send(objective);
    }catch (e) {
      console.log(e);
      res.sendStatus(503);
    }
 });
 
router.patch('/:id', async (req, res) => {
    
      try{
          const objective = await objectives.update({
              name:req.body.name, 
              description: req.body.description
          },
          {where:{id: req.params.id}});
      
        res.send({ message: 'UObjective Updated',  objective});
      } catch {
        res.status(404).send({ message: 'objective Not Found' });
      }
});

router.delete('/:id', async (req, res) => {
    try{
      await Objective.destroy({
        where: { id: req.params.id }
      });

      res.send();
    } catch {
      res.sendStatus(500);
    }
});

module.exports = router;