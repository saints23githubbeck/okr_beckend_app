const express = require("express");
const router = express.Router();
const { Objective ,User, Keyresult} = require('../models/index');

router.get("/", (req, res)=>{
  try{
    Keyresult.findAll()
    .then(Keyresults => res.send(Keyresults))
    res.status(201);
  }catch{
    res.sendStatus(500);
  }
});

router.get("/:id",(req, res)=>{
  try {
 Keyresult.findAll({
      where: { id: req.params.id },
      order: [['createdAt', 'DESC']]
    })
    .then(Keyresult => res.send(Keyresult))
    res.status(201);
  } catch {
    res.sendStatus(404);
  }
})

router.post("/", (req, res) => {
    try {
        Keyresult.create({
          ownerUsername: req.body.ownerUsername,
          obj_id: req.body.obj_id,
          title: req.body.title,
          organizationType: req.body.organizationType,
          period: req.body.period,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          progressType: req.body.progressType,
          description: req.body.description
        })
        .then(newKeyresult => res.send(newKeyresult))
        res.status(201);
    }catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
 });
 
router.patch('/:id',  (req, res) => {
      try{
        Keyresult.update({
            title: req.body.title,
            type: req.body.type,
            period: req.body.period,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            progressType: req.body.progressType,
            description: req.body.description
          },
          {where:{id: req.params.id}});
          res.sendStatus(201);
      } catch (e) {
        console.log(e)
        res.sendStatus(404);
      }
});

router.delete('/:id',  (req, res) => {
    try{
        Keyresult.destroy({
        where: { id: req.params.id}
      });
      res.sendStatus(201);
    } catch {
      res.sendStatus(500);
    }
});

module.exports = router;