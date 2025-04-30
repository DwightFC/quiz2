import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Dwight Francis",
    lastName: "Caña",
    initials: "DFC", // the example uses first and last, but feel free to use three or more if you like.
    position: "a IT Student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Runeterra'
        },
        {
            emoji: "💼",
            text: "A Reserve Player at prodigy"
        },
        {
            emoji: "📧",
            text: "dwightfrancismcana@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/SrDwight.cana",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DwightFC",
            icon: "fa fa-github",
            label: 'github'
        },
    
     
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Dwight. I'm a IT student in DLL. I enjoy playing games, and I want to submit this as my Quiz sir",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'editing',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Entertainment",
            live: "https://dwightfc.github.io/assigment1/", 
            source: "https://github.com/dwightfc", 
            image: mock1
        },
        {
            title: "The one and only",
            live: "https://dwightfc.github.io/Handson/#",
            source: "https://github.com/dwightfc",
            image: mock2
        },
        {
            title: "Legend",
            live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            source: "https://github.com/dwightfc",
            image: mock3
        },
        {
            title: "First Error",
            live: "https://dwightfc.github.io/HandsOnExam/",
            source: "https://github.com/dwightfc",
            image: mock4
        },
        {
            title: "Fool me twice",
            live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            source: "https://github.com/dwightfc",
            image: mock5
        }
    ]
}