# PeachtreeData.com

This is a project I started around Week 5 or so of bootcamp and attempted 3 separate versions of, culminating in this final version written in React.

## Video Link
[PeachtreeData Video](https://www.youtube.com/watch?v=TMt0IHfmBbg)

## Contents
  * What It Is
  * What I Used
  * Challenges
  * Screenshots
  * Github Link
  * Code Examples

## What It Is
I first had the idea of a life-database type site at the start of bootcamp when I was looking ahead to my portfolio and good ideas for projects I could feature on it. I started it again around Week 5 on the side of class using only plain vanilla JavaScript, HTML, and CSS. I actually ended-up devoting a pretty significant amount of time to it, but once we had finished learning Node.js and Express, I had fallen in love with them so much I decided to try re-writing it (along with a lot of major styling changes). I also devoted some significant time to that outside of class, and of course once we were done learning React, I wanted this to be the final featured project on my portfolio, but I also wanted more practice with React (and specifically in this case, Redux), so I decided to make this one final large re-write.

## What I Used
  * HTML, CSS, JavaScript
  * Node, Express (Express-Generator)
  * React (Create-React-App), React-Router
  * Redux, React-Redux, Redux-Promise
  * Axios, Base64, React-Native-Base64
  * Bcrypt, DotENV, Helmet, PG-Promise, Rand-Token
  * Materialize, React-Multi-Carousel, SweetAlert2-React
  

## Challenges
I had done quite a few of my own practice projects up to this point, but this is definitely the first complete, and significantly comprehensive full-stack project I have completed so far. It was definitely challenging in many aspects, but I think the single complaint that stood out while I was toiling away at it was how many various tasks (large or small) that I had to take care of all by myself. I remember several times wondering if I should have chosen a different idea for this solo-project that I wanted to finish as quickly as possible finalize my portfolio. As I kept going, I kept finding more and more aspects I wanted to include that would make a social media-type site really stand out, and I just didn't have the time or resources to manage it all by myself.

## Screenshots
  * Intro page:
![alt text](https://github.com/ekim1707/PeachtreeData-React-Frontend/blob/master/connections.png 'connections.png')
  * A look at a modal on the cards page:
![alt text](https://github.com/ekim1707/PeachtreeData-React-Frontend/blob/master/freewrite.png 'freewrite.png')

## Github Link
[Github](https://github.com/ekim1707/widowsite)

## Code Examples
---
  Filter method used for Hero card page search bar:
```
const heroSearch = data.filter(function (data) {
    const newHero = data.name.filter(name => name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (newHero.length > 0) {
        return true
    } else {
        return false
    }
});
this.setState({
    heroes: heroSearch,
    search: e.target.value
})
```
  flipCards method for the flip buttons in the Hero card page:
```
flipCards(type) {
    let getCards;
    if (type === 'All') {
        getCards = [].slice.call(document.querySelectorAll('.card'));
    } else {
        getCards = [].slice.call(document.querySelectorAll(`#${type}`));
    }
    if (getCards.length === 0) {
        document.getElementById(`flip-${type.toLowerCase()}`).classList.add('body-shake');
        setTimeout(() => {document.getElementById(`flip-${type.toLowerCase()}`).classList.remove('body-shake')}, 1000);
    } else {
        const newCards = getCards.filter(card => !card.classList.contains('flip'));
        if (newCards.length > 0) {
            newCards.forEach(card => card.classList.add('flip'));
        } else {
            getCards.forEach(card => card.classList.remove('flip'));
        }
    }
}
```
 Ran into trouble with the datestamp for posts in the Forum. Despite data being entered in as "Date" into SQL (yyyy-MM-dd format), whenever I pulled it out, it would come out as a timestamp instead (e.g. "2019-10-11T04:00:00.000Z"). Looked for a easy solution for a while, but after finding none, decided to fix the problem manually:
```
const yyyy = this.props.data.date_posted.slice(0, 4);
const MM = this.props.data.date_posted.slice(5, 7);
const dd = this.props.data.date_posted.slice(8, 10);
const newDateString = (MM + "/" + dd + "/" + yyyy);
const hourCheck = this.props.data.time_posted.slice(0, 2);
let newTimeString;
if (hourCheck > 12) {
    const hh = ((hourCheck - 12) * .01).toString().slice(2);
    newTimeString = (hh + this.props.data.time_posted.slice(2) + 'PM EST');
} else {
    newTimeString = (this.props.data.time_posted + 'AM EST');
}
```
