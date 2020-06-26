let user={
    name: "some User",
    age:25,
    alive: true,
    legs: [
        { type: "left leg",
            toes:[1,2,3,4,5]
        },
        {
            type: "right leg",
            toes:[1,2,3,4,5]
        }
    ],


};

user.isAdmin= true;
console.log("some user", user);
console.log ("show me toes on the left leg ",user.legs[0].toes);
console.log("show me toes on the right leg", user.legs[1].toes);
console.log("show me age", user['age']);
console.log("ahow me if user is alive ", user.alive);
console.log('if he really alive?', user["alive"]);


