const router = require("express").Router();
let Note = require("../model/notes.model");

router.route("/").get((req, res) => {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json("error: "+ err));
    // Note.find((err, result) => {
    //     if(!err){
    //         res.send(result);
    //     } else {
    //         res.send(err);
    //     }
    // })
});

router.route("/").post((req, res) => {
       const title = req.body.title;
       const content = req.body.content;

       const newNote = new Note({
        title : title,
        content : content
       });
       newNote.save()
       .then(() => res.json("notes added"))
       .catch(err => res.status(400).json("error: "+ err));
});

router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete({_id: req.params.id}, (err, docs) => {
    if(!err){
        
        res.send("deleted");
    } else {
        console.log(err);
    }
  });
});

module.exports = router;