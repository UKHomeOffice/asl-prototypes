const express = require('express')
const app = express()
const router = express.Router()
// const moment = require('moment');

// router.use(function (req, res, next) {
//   console.log(moment().format("D MMMM YYYY "))

//   next()
// })
// // Route index page
// router.get('/', function (req, res) {
  

// GET LIST OF FILES
// //requiring path and fs modules
// const path = require('path');
// const fs = require('fs');
// //joining path of directory 
// const directoryPath = path.join(__dirname, 'views');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });


//   res.render('index')
// })

// Add your routes here - above the module.exports line

// PPLh responding to returned RoP
router.post('/rops/r3/pplh-returned/rops-correcting', function (req, res) {

  let whatToDo = req.session.data['what-to-do']

  if (whatToDo == 'resubmit') {
    res.redirect('/rops/r3/pplh-returned/rops-submit-comment')
  } else {
    res.redirect('/rops/r3/pplh-returned/rops-correcting')
  }
})

// Regulatory protoype
router.post('/rops/r3/regulatory/setup-protected', function (req, res) {

  let setupAny = req.session.data['setup-any']

  if (setupAny == 'No') {
    res.redirect('/rops/r3/regulatory/nil-return')
  } else {
    res.redirect('/rops/r3/regulatory/setup-protected')
  }
})

router.post('/rops/r3/regulatory/setup-endangered', function (req, res) {

  let setupProtected = req.session.data['setup-protected']

  if (setupProtected == 'Yes') {
    res.redirect('/rops/r3/regulatory/nil-return')
  } else {
    res.redirect('/rops/r3/regulatory/setup-endangered')
  }
})

router.post('/rops/r3/regulatory/setup-protected', function (req, res) {

  let setupAny = req.session.data['setup-any']

  if (setupAny == 'No') {
    res.redirect('/rops/r3/regulatory/nil-return')
  } else {
    res.redirect('/rops/r3/regulatory/setup-protected')
  }
})

router.post('/rops/r3/regulatory/setup-endangered', function (req, res) {

  let setupProtected = req.session.data['setup-protected']

  if (setupProtected == 'Yes') {
    res.redirect('/rops/r3/regulatory/nil-return')
  } else {
    res.redirect('/rops/r3/regulatory/setup-endangered')
  }
})

router.post('/rops/r3/regulatory/setup-animals-breed', function (req, res) {

  let animalType = req.session.data['animal-types']

  if (animalType !== 'hamsters') {
    res.redirect('/rops/r3/regulatory/setup-reuse')
  } else {
    res.redirect('/rops/r3/regulatory/setup-animals-breed')
  }
})

router.post('/rops/r3/regulatory/setup-reuse-nhps', function (req, res) {
// need to fix this
  let animalType = req.session.data['animal-types']

  if (animalType !== 'rhesus-macaques') {
    res.redirect('/rops/r3/regulatory/setup-reuse-birthplace')
  } else {
    res.redirect('/rops/r3/regulatory/setup-reuse-nhps')
  }
})


// ROPS
var rowNumber = 1

router.post('/rops/r3/rops-added-1', function (req, res) {
  var newNumber = rowNumber += 1
  console.log(newNumber)
  res.render('rops/rops-added-1');
});

// router.get('/rops/r3/add-procedure-auto', function (req, res) {
//   var newNumber = rowNumber
//   res.render('rops/add-procedure-auto', { row: newNumber});
// });

router.post('/rops/r3/submit-comment', function (req, res) {
  return newNumber = 0;
  res.render('rops/submit-comment',{ rowNumer: '0'} );
});

router.post('/rops/r3/setup-protected', function (req, res) {

  let setupAny = req.session.data['setup-any']

  if (setupAny == 'No') {
    res.redirect('/rops/r3/nil-return')
  } else {
    res.redirect('/rops/r3/setup-protected')
  }
})

router.post('/rops/r3/setup-endangered', function (req, res) {

  let setupProtected = req.session.data['setup-protected']

  if (setupProtected == 'Yes') {
    res.redirect('/rops/r3/nil-return')
  } else {
    res.redirect('/rops/r3/setup-endangered')
  }
})

router.post('/rops/r3/setup-animals-breed', function (req, res) {

  let animalType = req.session.data['animal-types']

  if (animalType !== 'hamsters') {
    res.redirect('/rops/r3/setup-reuse')
  } else {
    res.redirect('/rops/r3/setup-animals-breed')
  }
})

router.post('/rops/r3/setup-reuse-nhps', function (req, res) {
// need to fix this
  let animalType = req.session.data['animal-types']

  if (animalType !== 'rhesus-macaques') {
    res.redirect('/rops/r3/setup-reuse-birthplace')
  } else {
    res.redirect('/rops/r3/setup-reuse-nhps')
  }
})

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

router.post('/rops/r2/pplh-returned/rops-correcting', function (req, res) {

  let whatToDo = req.session.data['what-to-do']

  if (whatToDo == 'resubmit') {
    res.redirect('/rops/r2/pplh-returned/rops-submit-comment')
  } else {
    res.redirect('/rops/r2/pplh-returned/rops-correcting')
  }
})

// Regulatory protoype
router.post('/rops/r2/regulatory/setup-protected', function (req, res) {

  let setupAny = req.session.data['setup-any']

  if (setupAny == 'No') {
    res.redirect('/rops/r2/regulatory/nil-return')
  } else {
    res.redirect('/rops/r2/regulatory/setup-protected')
  }
})

router.post('/rops/r2/regulatory/setup-endangered', function (req, res) {

  let setupProtected = req.session.data['setup-protected']

  if (setupProtected == 'Yes') {
    res.redirect('/rops/r2/regulatory/nil-return')
  } else {
    res.redirect('/rops/r2/regulatory/setup-endangered')
  }
})

router.post('/rops/r2/regulatory/setup-protected', function (req, res) {

  let setupAny = req.session.data['setup-any']

  if (setupAny == 'No') {
    res.redirect('/rops/r2/regulatory/nil-return')
  } else {
    res.redirect('/rops/r2/regulatory/setup-protected')
  }
})

router.post('/rops/r2/regulatory/setup-endangered', function (req, res) {

  let setupProtected = req.session.data['setup-protected']

  if (setupProtected == 'Yes') {
    res.redirect('/rops/r2/regulatory/nil-return')
  } else {
    res.redirect('/rops/r2/regulatory/setup-endangered')
  }
})

router.post('/rops/r2/regulatory/setup-animals-breed', function (req, res) {

  let animalType = req.session.data['animal-types']

  if (animalType !== 'hamsters') {
    res.redirect('/rops/r2/regulatory/setup-reuse')
  } else {
    res.redirect('/rops/r2/regulatory/setup-animals-breed')
  }
})

router.post('/rops/r2/regulatory/setup-reuse-nhps', function (req, res) {
// need to fix this
  let animalType = req.session.data['animal-types']

  if (animalType !== 'rhesus-macaques') {
    res.redirect('/rops/r2/regulatory/setup-reuse-birthplace')
  } else {
    res.redirect('/rops/r2/regulatory/setup-reuse-nhps')
  }
})


// ROPS
var rowNumber = 1

router.post('/rops/r2/rops-added-1', function (req, res) {
  var newNumber = rowNumber += 1
  console.log(newNumber)
  res.render('rops/rops-added-1');
});

// router.get('/rops/r2/add-procedure-auto', function (req, res) {
//   var newNumber = rowNumber
//   res.render('rops/add-procedure-auto', { row: newNumber});
// });

router.post('/rops/r2/submit-comment', function (req, res) {
  return newNumber = 0;
  res.render('rops/submit-comment',{ rowNumer: '0'} );
});

router.post('/rops/r2/setup-protected', function (req, res) {

  let setupAny = req.session.data['setup-any']

  if (setupAny == 'No') {
    res.redirect('/rops/r2/nil-return')
  } else {
    res.redirect('/rops/r2/setup-protected')
  }
})

router.post('/rops/r2/setup-endangered', function (req, res) {

  let setupProtected = req.session.data['setup-protected']

  if (setupProtected == 'Yes') {
    res.redirect('/rops/r2/nil-return')
  } else {
    res.redirect('/rops/r2/setup-endangered')
  }
})

router.post('/rops/r2/setup-animals-breed', function (req, res) {

  let animalType = req.session.data['animal-types']

  if (animalType !== 'hamsters') {
    res.redirect('/rops/r2/setup-reuse')
  } else {
    res.redirect('/rops/r2/setup-animals-breed')
  }
})

router.post('/rops/r2/setup-reuse-nhps', function (req, res) {
// need to fix this
  let animalType = req.session.data['animal-types']

  if (animalType !== 'rhesus-macaques') {
    res.redirect('/rops/r2/setup-reuse-birthplace')
  } else {
    res.redirect('/rops/r2/setup-reuse-nhps')
  }
})



// TRAINING

router.post('/training-exemptions/ur/ppl/training-confirm', function (req, res) {

  let training = req.session.data['training-correct']

  if (training == 'yes') {
    res.redirect('/training-exemptions/ur/add-cert-ppl/profile-ppl-add')
  } else {
    res.redirect('/training-exemptions/ur/ppl/training-confirm')
  }
})

router.post('/training-exemptions/ur/add-cert-1/training-cert-details', function (req, res) {

  let evidence = req.session.data['evidence']

  if (evidence == 'cert') {
    res.redirect('/training-exemptions/ur/add-cert-1/training-cert-details')
  } else {
    res.redirect('/training-exemptions/ur/add-cert-1/training-exemption-details')
  }
})

router.post('/training-exemptions/ur/pil/pil-training-handover', function (req, res) {

  let evidence = req.session.data['trainig-confirm']

  if (evidence == 'no') {
    res.redirect('/training-exemptions/ur/pil/pil-app')
  } else {
    res.redirect('/training-exemptions/ur/add-cert-1/profile-empty')
  }
})

router.post('/training-exemptions/evidence-select/pil/pil-training-handover', function (req, res) {

  let evidence = req.session.data['trainig-confirm']

  if (evidence == 'yes') {
    res.redirect('/training-exemptions/evidence-select/pil/pil-edit-done')
  } else {
    res.redirect('/training-exemptions/evidence-select/pil/pil-training-handover')
  }
})

router.post('/training-exemptions/evidence-select/ppl/training-confirm', function (req, res) {

  let evidence = req.session.data['training-correct']

  if (evidence == 'no') {
    res.redirect('/training-exemptions/evidence-select/ppl/training-edit')
  } else {
    res.redirect('/training-exemptions/evidence-select/ppl/training-confirm')
  }
})


router.post('/training-exemptions/evidence-select/training-cert-details', function (req, res) {
  
  let evidence = req.session.data['evidence']

  if (evidence == 'exemption') {
    res.redirect('/training-exemptions/evidence-select/training-exemption-details')
  } else {
    res.redirect('/training-exemptions/evidence-select/training-cert-details')
  }
})


router.post('/edit-returns/sop/external/edit-return-action', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let whatToDo = req.session.data['what-to-do']

  if (whatToDo === 'respond') {
    res.redirect('/edit-returns/sop/external/comment')
  } else if (whatToDo === 'delete') {
    res.redirect('/edit-returns/sop/external/withdraw')
  } else {
    res.redirect('/edit-returns/sop/external/edit-area')
  }
})


// PPL transfer

// No additional establishments

router.post('/transfer-ppl/final-no24/ppl-establishments-2', function (req, res) {

  let establishments = req.session.data['add-establishments']

  if (establishments === 'No') {
    res.redirect('/transfer-ppl/final-no24/ppl-establishments-review')
  } else {
    res.redirect('/transfer-ppl/final-no24/ppl-establishments-2')
  }
})



// No poles routing
router.post('/transfer-ppl/final-no24/ppl-poles-2', function (req, res) {

  let poles = req.session.data['poles']

  if (poles === 'No') {
    res.redirect('/transfer-ppl/final-no24/ppl-poles-review')
  } else {
    res.redirect('/transfer-ppl/final-no24/ppl-poles-2')
  }
})

// 5 yeare review routing
router.post('/5-year-review/mark-reviewed-comment', function (req, res) {

  let action = req.session.data['review-action']

  if (action === 'amend') {
    res.redirect('/5-year-review/pil-amend')
  } else if (action === 'revoke') {
    res.redirect('/5-year-review/pil-revoke')
  } else {
    res.redirect('/5-year-review/mark-reviewed-comment')
  }
})






module.exports = router