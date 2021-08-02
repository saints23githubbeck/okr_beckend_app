const express = require("express");
const router = express.Router();
const { Objective ,User} = require('../models/index');

router.get("/", (req, res)=>{
  try{
    res.send( Objective.findAll());
  }catch{
    res.sendStatus(500);
  }
});

router.get("/:id",(req, res)=>{
  try {
    res.send( Objective.findAll({
      where: { id: req.params.id },
      order: [['createdAt', 'DESC']]
    }));
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
        });
        res.sendStatus(200);
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
          {where:{id: req.params.id}});
      
          res.sendStatus(200);
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
      res.send();
    } catch {
      res.sendStatus(500);
    }
});

module.exports = router;