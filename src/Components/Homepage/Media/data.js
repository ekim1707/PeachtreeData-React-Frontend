import bartending from './images/bartending.jpg';
import bc from './images/bc.JPG';
import beach from './images/beach.JPG';
import camden from './images/camden2008.jpg';
import chapelgate from './images/chapelgate2017.JPG';
import china from './images/china.jpg';
import concert from './images/concert.jpg';
import duet from './images/duet2015.JPG';
import eunice from './images/eunice.JPG';
import fishing from './images/fishing2011.jpg';
import group from './images/group.jpg';
import guitar from './images/guitar2005.JPG';
import home from './images/home2019.JPG';
import houston from './images/houston.jpeg';
import jet from './images/jet.jpg';
import parents from './images/parents.JPG';
import pd from './images/pd.jpg';
import practice from './images/practice.jpg';
import profile from './images/profile.JPG';
import sunshine from './images/sunshine.jpg';
import switchfoot from './images/switchfoot.jpg';
import tillman from './images/tillman.jpeg';

const data = [
    {
        id: 1,
        image: bartending,
        upload_date: '10/14/19',
        title: `Bartending at Eunice's Wedding`,
        description: `At the reception thrown the night before Eunice's wedding, I did some
        very lightweight bartending using some of the skills I learned from the bartending
        classes I took in preparation for the event.`,
        photo_cred: `Dad`,
        taken_date: `A long time ago`,
        album: `College`
    },
    {
        id: 2,
        image: bc,
        upload_date: '10/14/19',
        title: `Back to School`,
        description: `Returning back to Boston College after one of my many weekend trips
        back home to Maryland during the semester.`,
        photo_cred: `Dad`,
        taken_date: `03/28/04`,
        album: `College`
    },
    {
        id: 3,
        embed: 'https://www.youtube.com/embed/-SIjRWl218o',
        upload_date: '10/14/19',
        upload_date_youtube: '01/29/18',
        title: `Tiffany's 33rd Birthday Video`,
        description: `Video I prepared for Tiffany's 33rd birthday surprise.`,
        music: `Various songs from Frozen`,
        photo_cred: `Me`,
        taken_date: `Somewhere in Fall of 2003ish I think`,
        views: 64,
        album: `Tiffany/Family`
    },
    {
        id: 4,
        image: beach,
        upload_date: '10/14/19',
        title: `A Pretty Scene`,
        description: `Just a pretty photo I pulled off the internet of some random, beautiful
        paradise.`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `Random`
    },
    {
        id: 5,
        image: camden,
        upload_date: '10/14/19',
        title: `Oriole Magic`,
        description: `My mom and I at a rare, amazing night at Camden Yards.
        I believe this is the game we went to where Aubrey Huff hit a game-winning grand-slam
        in the bottom of the 9th inning. T'was pretty epic.`,
        photo_cred: `Dad`,
        taken_date: `Sometime during the baseball season in 2008`,
        album: `College`
    },
    {
        id: 6,
        image: chapelgate,
        upload_date: '10/14/19',
        title: `Chapelgate Band Practices`,
        description: `This is what our Chapelgate Band looked like during practices. Tiffany
        wasn't playing in this practice (piano) so she took this picture from the rafters.`,
        photo_cred: `Tiffany`,
        taken_date: ``,
        album: `Tiffany/Family`
    },
    {
        id: 7,
        image: china,
        upload_date: '10/14/19',
        title: `My Favorite Little Girl`,
        description: `I fell in love with this adorable girl during our missions trip to China.
        I really wish sometimes that I didn't have to completely lose touch of her.`,
        photo_cred: `Eunice`,
        taken_date: ``,
        album: `Highschool`
    },
    {
        id: 8,
        image: concert,
        upload_date: '10/14/19',
        title: `UMBC Praise Night`,
        description: `Special night for our UMBC KCM. This was the praise team performance that
        especially me and my friend Brian toiled for like a month to put together. In the end,
        I think it turned out to be worth it.`,
        photo_cred: `Dad`,
        taken_date: `Sometime during my UMBC days`,
        album: `College`
    },
    {
        id: 9,
        embed: 'https://www.youtube.com/embed/12fwhnlj0C0',
        upload_date: '10/14/19',
        upload_date_youtube: '09/28/19',
        title: `Pharah With Chabco`,
        description: `Some pretty crazy total dmg output playing alongside my buddy
        Chabco. A little toxicity from the enemy Reaper too, but that's ok.`,
        music: 'none',
        photo_cred: `Me`,
        taken_date: `09/28/19`,
        views: 9,
        album: `Random`
    },
    {
        id: 10,
        image: duet,
        upload_date: '10/14/19',
        title: `Love is an Open Door`,
        description: `Of all the wonderful things that happened during our wedding, I think one
        of the things Tiffany and I will surely never forget was our special duet performance of
        "Love is an Open Door" in front of our entire congregation.`,
        photo_cred: `Our DJ Sangho(?)`,
        taken_date: `07/29/16`,
        album: `Tiffany/Family`
    },
    {
        id: 11,
        embed: 'https://www.youtube.com/embed/Z9NQatne0xg',
        upload_date: '10/14/19',
        upload_date_youtube: '03/31/17',
        title: `Math Teacher April Fools Prank`,
        description: `Just a video I found that I wanted to save.`,
        music: 'none',
        photo_cred: `unknown`,
        taken_date: `unknown`,
        views: 50629199,
        album: `Random`
    },
    {
        id: 12,
        image: eunice,
        upload_date: '10/14/19',
        title: `The Dove Family`,
        description: `Just a picture I really like of Eunice and the Doves, that I pulled off of
        her Facebook (I believe?).`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `Tiffany/Family`
    },
    {
        id: 13,
        image: fishing,
        upload_date: '10/14/19',
        title: `Deep Sea Fishing in Key West`,
        description: `My first ever deep sea fishing trip in Key West with my dad and some relatives,
        and it was one of the most fun experiences of my life.`,
        photo_cred: `unknown`,
        taken_date: `2011`,
        album: `College`
    },
    {
        id: 14,
        image: group,
        upload_date: '10/14/19',
        title: `Group Pic`,
        description: `Picture Tiffany and I took with our friends at Waffie right before we moved to
        Atlanta.`,
        photo_cred: `unknown`,
        taken_date: `August 2018?`,
        album: `Tiffany/Family`
    },
    {
        id: 15,
        image: guitar,
        upload_date: '10/14/19',
        title: `My Mom and My Guitar`,
        description: `Old picture of how I used to spend time at home with my parents and my guitar.`,
        photo_cred: `Dad`,
        taken_date: `2005`,
        album: `College`
    },
    {
        id: 16,
        image: home,
        upload_date: '10/14/19',
        title: `Our New Home`,
        description: `One of the first pictures Tiffany and I took of our current house in Johns Creek
        while we were in the process of trying to buy it. We were so excited when we finally officially
        purchased it.`,
        photo_cred: `Me`,
        taken_date: `2019`,
        album: `Tiffany/Family`
    },
    {
        id: 17,
        embed: 'https://www.youtube.com/embed/QLxpo2wHGlE',
        upload_date: '10/14/19',
        upload_date_youtube: '08/12/19',
        title: `My Movie`,
        description: `Video I made for a Speech class I took at HCC recently.`,
        music: `"Hosanna" played by my old church band with me on electric.`,
        photo_cred: `Me`,
        taken_date: `none`,
        views: 40,
        album: `Tiffany/Family`
    },
    {
        id: 18,
        image: houston,
        upload_date: '10/14/19',
        title: `Joel Houston`,
        description: `Just a random picture I like of one of my heroes, Joel Houston.`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `Random`
    },
    {
        id: 19,
        image: jet,
        upload_date: '10/14/19',
        title: `Jet-Li`,
        description: `Random picture of another person I look up to, Jet-Li.`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `Random`
    },
    {
        id: 20,
        image: parents,
        upload_date: '10/14/19',
        title: `My Wonderful Parents`,
        description: `Just a good picture of my wonderful parents whom I love.`,
        photo_cred: `Dad`,
        taken_date: `2019(?)`,
        album: `Tiffany/Family`
    },
    {
        id: 21,
        image: pd,
        upload_date: '10/14/19',
        title: `Just a Simple Man`,
        description: `A picture I believe Tiffany took while we were traveling on a train
        in Switzerland (not completely sure though).`,
        photo_cred: `Tiffany(?)`,
        taken_date: `2019(?)`,
        album: `Tiffany/Family`
    },
    {
        id: 22,
        image: practice,
        upload_date: '10/14/19',
        title: `Preparation is Work`,
        description: `This is an example of the practices we had for the UMBC Praise Night
        Concert in my basement for around a month, usually during the evening after classes.`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `College`
    },
    {
        id: 23,
        image: profile,
        upload_date: '10/14/19',
        title: `A Walk to Remember`,
        description: `Picture of when Tiffany and I had first met in person and took a walk
        together in Centennial Park that lasted almost an entire day.`,
        photo_cred: `Tiffany`,
        taken_date: `unknown`,
        album: `Tiffany/Family`
    },
    {
        id: 24,
        embed: 'https://www.youtube.com/embed/4fSOlJsA-84',
        upload_date: '10/14/19',
        upload_date_youtube: '12/08/18',
        title: `Goofy Ana`,
        description: `Just a goofy OW clip I want to keep safe somewhere`,
        music: 'none',
        photo_cred: `Me`,
        taken_date: `12/08/18`,
        views: 8,
        album: `Random`
    },
    {
        id: 25,
        embed: 'https://www.youtube.com/embed/2cRCN9x4iJY',
        upload_date: '10/14/19',
        upload_date_youtube: '04/28/19',
        title: `Play Nice, Play Pharah`,
        description: `One of the most perfect rounds of OW I've played with actually
        any hero, not just Pharah.`,
        music: 'none',
        photo_cred: `Me`,
        taken_date: `04/28/19`,
        views: 18,
        album: `Random`
    },
    {
        id: 26,
        image: sunshine,
        upload_date: '10/14/19',
        title: `Eugene Choi`,
        description: `Just a random picture of the character Eugene Choi in the Korean drama
        Mr. Sunshine.`,
        photo_cred: `unknown`,
        taken_date: `unkonwn`,
        album: `Random`
    },
    {
        id: 27,
        image: switchfoot,
        upload_date: '10/14/19',
        title: `I'm On Fire`,
        description: `Random picture of one of my all-time favorite bands: Switchfoot.`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `Random`
    },
    {
        id: 28,
        image: tillman,
        upload_date: '10/14/19',
        title: `A True Hero`,
        description: `Random picture of Pat Tillman, one of my greatest heroes and idols.`,
        photo_cred: `unknown`,
        taken_date: `unknown`,
        album: `Random`
    }
]

export default data;