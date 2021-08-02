const express = require("express");
const router = express.Router();
const { Objective ,User} = require('../models/index');

router.get("/", (req, res)=>{
  try{
   Objective.findAll()
    .then(Objectives => res.send(Objectives))
    res.status(201);
  }catch{
    res.sendStatus(500);
  }
});

router.get("/:id",(req, res)=>{
  try {
    Objective.findAll({
      where: { id: req.params.id },
      order: [['createdAt', 'DESC']]
    })
    .then(Objective => res.send(Objective))
    res.status(201);
  } catch {
    res.sendStatus(500);
  }
})

router.post("/", (req, res) => {
    try {
         Objective.create({
          ownerUsername: req.body.ownerUsername,
          title: req.body.title,
          organizationType: req.body.organizationType,
          period: req.body.period,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          progressType: req.body.progressType,
          description: req.body.description
        })
        .then(newObjective => res.send(newObjective))
         res.status(201);
    }catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
 });
 
router.patch('/:id',  (req, res) => {
      try{
          Objective.update({
            title: req.body.title,
            type: req.body.type,
            period: req.body.period,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            progressType: req.body.progressType,
            description: req.body.description
          },
          {where:{id: req.params.id}})
          .then(updateObjective => res.send(updateObjective))
          res.status(201);
      } catch (e) {
        console.log(e)
        res.sendStatus(404);
      }
});

router.delete('/:id',  (req, res) => {
    try{
      Objective.destroy({
        where: { id: req.params.id}
      });
      res.sendStatus(201);
    } catch {
      res.sendStatus(404);
    }
});

module.exports = router;