const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

//Local->
let config = require('../env.json');


//Prod->
//config = functions.config()



admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": config.service.project_id,
        "private_key_id": config.service.private_key_id,
        "private_key": config.service.private_key.replace(/\\n/g, '\n'),
        "client_email": config.service.client_email,
        "client_id": config.service.client_id,
        "auth_uri": config.service.auth_uri,
        "token_uri": config.service.token_uri,
        "auth_provider_x509_cert_url": config.service.auth_provider_x509_cert_url,
        "client_x509_cert_url": config.service.client_x509_cert_url
    })
});

const db = admin.firestore()




exports.signUpUser = functions.auth.user().onCreate((user) => {
    return db.collection('users').doc(user.uid).set({
        email: user.email,
    });
});


exports.updateUser = functions.https.onCall((req, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can add requests'
        );
    }
    res = db.collection('users').doc(context.auth.uid).update({
        name: req.name,
        surname: req.surname,
        gender: req.gender,
        team: req.team
    }).then(data => {
        return data
    })
        .catch(error => {
            res.send(error)
        })
    console.log(res)
    return res
})

exports.updateUserRegister = functions.https.onCall((req, res) => {

    res = db.collection('users').doc(req.uid).update({
        name: req.name,
        surname: req.surname,
        gender: req.gender,
        team: req.team
    }).then(data => {
        return data
    })
        .catch(error => {
            res.send(error)
        })
    console.log(res)
    return res
})

exports.singIn = functions.https.onRequest((req, res) => {
    const query = db.collection('users').doc('1eQqiVNJy97L8s05NfjIBqWiLu8s').get()
    console.log(query)
    res.send("ok");
})


exports.addActivity = functions.https.onCall((data, context) => {
    console.log(data.date, '----> DATE')
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can add requests'
        );
    }
    return db.collection('activity').doc().set({
        uid: context.auth.uid,
        type: data.type,
        date: data.date,
        duration: data.duration,
        team: data.team
    });

})

exports.getUser = functions.https.onCall((data, context) => {

    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can add requests'
        );
    }
    const users = db.collection('users').doc(context.auth.uid);
    const res = users.get().then((doc) => {
        // eslint-disable-next-line promise/always-return
        if (doc.exists) {
            var data = doc.data();
            return data;
        } else {
            console.log("No such document!")
        }
    }).catch((error) => {
        console.log("Error getting document:", error)
    });

    return res
})

exports.getUserActivities = functions.https.onCall((data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can add requests'
        );
    }

    const activity = db.collection("activity");
    const res = activity.where('uid', '==', context.auth.uid).get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return data
        })
        .catch((error) => {
            console.log(error, 'error')
        })
    return res
})


exports.getAllUsersActivities = functions.https.onCall((data, context) => {

    const activity = db.collection("activity");
    const res = activity.get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return data
        })
        .catch((error) => {
            console.log(error, 'error')
        })
    return res
})


exports.deleteActivity = functions.https.onCall(() => {


    const activity = db.collection("activity").doc(data.id);
    const res = users.get().then((doc) => {
        // eslint-disable-next-line promise/always-return
        const res = users.get().then((doc) => {
            // eslint-disable-next-line promise/always-return
            if (doc.exists) {
                var data = doc.data();
                data.delete();
            } else {
                console.log("No such document!")
            }
        }).catch((error) => {
            console.log("Error getting document:", error)
        });

    })
})
