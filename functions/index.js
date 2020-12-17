const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

//Local->
//let config = require('../env.json');


//Prod->
config = functions.config()



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
/* 

{
        "type": "service_account",
        "project_id": "vibrant-fabric-275712",
        "private_key_id": "46935eabcad19c76c751c73d958d618cc441c540",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqckDeNWS7dJPV\nEWDdPZx3hd8TaMgdvGE7zx/CO5V/x9EJQR37CjCEpRAlyfsuAs5B28gyrIzqYJOl\nsH3R3JniWBDvDiziBvqGGLJ3lfWrPgPjVC1X0cVb/rsirlzHPf1Db02JaTIFEdXr\nq1L8IAjfB/lKwG32nP7gah1yWguk0C2T3hjqbMgPE/9v77pGb/7spESiCwraVvlt\noq6LTO7jKj7vniU8UuhxWjh6QP+8jm1RvidJI94jvl5/GV1Z1taML9PxlRpQKr2l\nLzOPLArnJgFiaBUdrdVzzACUlF9gunqA4qYND4hEeBMOpPcxFUYuYvhHZHRFa67E\npdppBWQxAgMBAAECggEAAUdSYoBYyTm0hrGGzh4RU4m07NC5SJTST2gsOzEme9MI\nR8cd5hVTXBlfY8MuP8/8U1zmVW/7LiJrlR978CQ1INArj1mGP2tRO4qJozFEKqTQ\nU2cdIHalwf0JExdnAYUe5l+6P4zDF+vkdIxAVv0YB/FHvtZu9L3EgTM2lZYklnfI\nq4MpKbw8i8NLyROhBPjI6hewUuUBV2Nz8XXc9ntTsg843BhoMO8EWW1uFgpEdpov\nm9sk6Y+oaJpSdfON1gbvcFx/mWKxZmEH/kZtd5PEotCFiT1a7de1oNo5JHSTFByw\na9lKk8DzIbjqqe/3AKcE91VMBcayCWD2AuTeK+ue6QKBgQDmnHwYzsL2BSVNYhVH\nP0oYK81x/je/YvYYBms+ztdlbs61GACc0jaR7l7lOBydvdo0t9INMxEKqbgKqv/b\nkDFFuPvBYSZmH7qG/KF+evZoEH4EaBHf5sDtYmACNN12u7jCTCSAlcxPWrKJDl50\nX7oktACtyX4HquZuR3Ohhq6jeQKBgQC9NhZ4MEjBLkUcN6+R5K/jCrpbWeghiddN\nXjRqzhPwfIlncIDwclV4UooPpSfUr81NFTOgZAPe/fkEFKlWQ+AI08G6wLUc8nFz\nnmAl8WTYfrPIP7bowrtz+tkFxCp9zKMw7b+ulm1D45AYGqKUdhaHa8wB8XOz1rrx\ni4ONBqMgeQKBgC1E8LNp+ymSTwVGyMiIqwHdr2G+NrFSOt7ye6EDt5LI0rkH8i7W\nsTGqamRyxGNOvoP0xb4jlSfTszYc5Ubzokh+jKUkbgZEGjifZRBQEQjSm/o/d6rN\nQHgZBKHKQOMq7JTvn4bCYS3+rudqs64CkKbd0vhKgnv812k0i4Vcy/F5AoGAZXYG\nkIabzPOJ3brCrAIsixwqmGfawXlP+c3lX8yIBrJRYCWFDurQiEgCfqc6d6OZ/Ja8\n62oWZVJdYOHPeFHHZhRfU0yZEh+z1KL9vfr279zpfR0lcSVTLbs6+wuZGYJNlCQ5\nYF6L0xbJIxPNUL0OEaotaHFYcPxZnMMKVOpVOUkCgYAlgWvlcBOvImoY3M/wIQfF\nrYzx0NXRGDt63TnIx9smjyT2r72wcIRE2MjN+X7V0ElPx3ITifMIsyDSq+6f39q3\njLgUnhOiJaJWKzLxd38JbsCRmlK18OlDF4nJYO3jmO94c5ii1CCYVV60kAw5l0N7\ntSgVqHgpqJe3IF6osnfQEQ==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-wpoad@vibrant-fabric-275712.iam.gserviceaccount.com",
        "client_id": "108014736419476547018",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wpoad%40vibrant-fabric-275712.iam.gserviceaccount.com"
    }
*/
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




exports.userDeleted = functions.auth.user().onDelete((user) => {
    console.log('user deleted', user.email, user.uid)
});

