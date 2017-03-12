'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.pong = functions.database.ref("pings/{ping}")
  .onWrite( event => {
    console.log(event);
    const newData = event.data._newData;
    return event.data.ref.root.child("pongs")
      .push(`pong ${event.params.ping} -> ${newData}`);
  });
