// As Javascript is a dynamically typed language, normally we don't need to specify the type of a variable.
// However, we can use JSDoc to specify the type of a variable.

const instaProfile = {
    username: "mahir_ahmed",
    followers: 500,
    following: 300.0, // This is a number, but can also be a float in JavaScript
    isVerified: false,
    isPrivate: true,

    posts: 50,
    bio: "Web Developer and Tech Enthusiast",
    profilePicture: "/Users/mahirahmedniloy/Files/Study/Javascript/Lec-01/DataTypes/KM104726.jpg"
}

console.log("Instagram Profile:", instaProfile);