var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: 'Donald',
    last: 'Trump',
    email: 'dtrump@whitehouse.gov',
    phone: '12345667890'
  },
  {
    id: 2,
    first: 'J',
    last: 'Vance',
    email: 'jvance@whitehouse.gov',
    phone: '9876543210'
  }
];

let nextContactId = contacts.length;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'PCS Contacts',
    contacts,
    noContacts: !contacts?.length,
    partials: {
      content: 'index'
    }
  });
});

router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'Add Contact',
    partials: {
      content: 'addContact'
    }
  });
});

router.post('/addContact', (req, res, next) => {
  req.body.id = ++nextContactId;
  contacts.push(req.body);

  res.writeHead(301, {
    location: '/'
  });
  res.end();
});

router./*post*/get('/deleteContact/:id', (req, res, next) => {
  contacts = contacts.filter(c => c.id !== Number(req.params.id));

  res.writeHead(/*302*/301, {
    location: '/'/*,
    'cache-control': 'no-store'*/
  });
  res.end();
});

router.get('/editContact/:id', (req, res, next) => {
  theContacts = contacts.find(c => c.id === Number(req.params.id));
  res.render('layout', {
    title: 'Edit Contact',
    contact: theContacts,
    partials: {
      content: 'editContact'
    }
  });
});
router.post('/editContact/:id', (req, res, next) => {
  theContacts = contacts.find(c => Number(req.params.id) == c.id);
  theContacts.first = req.body.first;
  theContacts.last = req.body.last;
  theContacts.email = req.body.email;
  theContacts.phone = req.body.phone;

  res.writeHead(301, {
    location: '/'
  });
  res.end();
});

router.get('/api/contacts', function (req, res, next) {
  res.send(contacts)
});

module.exports = router;
