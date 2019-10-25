# PeachtreeData.com

This is a project I started around Week 5 or so of bootcamp and attempted 3 separate versions of, culminating in this final version written in React. The full project was written with this frontend along with a seperate backend, and both were deployed individually. The backend is currently being served on Heroku while the frontend is running statically on ec2.

Note: If you would like to log into the site and see an account that already has seed-data in it, you may go to login and use "ekim1707@gmail.com" with password "yes". Otherwise, if you make your own account, it will look very empty, other than the media page.

## Video Link
[PeachtreeData](https://www.youtube.com/watch?v=TMt0IHfmBbg)

## Contents
  * What It Is
  * What I Used
  * Challenges
  * Screenshots
  * Github Link
  * Code Examples
  * Contributors

## What It Is
I first had the idea of a life-database type site at the start of bootcamp when I was looking ahead to my portfolio and good ideas for projects I could feature on it. I started it around Week 5 on the side of class using only plain vanilla JavaScript, HTML, and CSS. I actually ended-up devoting a pretty significant amount of time to it, but once we had finished learning Node.js and Express, I had fallen in love with them both so much I decided to start this project over and re-write it accordingly (along with a lot of major styling changes). I also devoted some significant time to that re-write outside of class, but of course once we were done learning React, I decided to re-write it again because I wanted this to be my final featured portfolio project, but I also needed a project to practice Redux with.

## What I Used
  * HTML, CSS, JavaScript
  * Node, Express (Express-Generator), PostgreSQL
  * React (Create-React-App), React-Router
  * Redux, React-Redux, Redux-Promise
  * Axios, Base64, React-Native-Base64
  * Bcrypt, DotENV, Helmet, PG-Promise, Rand-Token
  * Materialize, React-Multi-Carousel, SweetAlert2-React
  

## Challenges
I had done quite a few of my own practice projects up to this point, but this is definitely the most difficult and comprehensive one of all. It was challenging in many aspects, but I think the single thing that stood out the most while I was toiling away at it was how endless it felt. I remember several times wondering if I should have chosen a different idea for this one instead of social-media because I needed to finish it as soon as possible to complete my portfolio, and it seemed like there was too many facets still left to cover. In the end, I decided to make a lot of compromises, but I think I did as much as I could by myself.

## Screenshots
  * Connections page:
![alt text](https://github.com/ekim1707/PeachtreeData-React-Frontend/blob/master/connections.png 'connections.png')
  * Freewrite page that has duel sticky-note/journal capability:
![alt text](https://github.com/ekim1707/PeachtreeData-React-Frontend/blob/master/freewrite.png 'freewrite.png')

## Github Link
[Github](https://github.com/ekim1707/PeachtreeData-React-Frontend)

## Code Examples
---
  Creating separate image/video "cards" with one large array of data:
```
const cardList = this.props.data.map((card, i) => {
    if (card.image) {
        return (
            <Card modalTrigger={this.props.modalTrigger} data={card} key={i} />
        )
    } else if (card.embed) {
        return (
            <VideoCard modalTrigger={this.props.modalTrigger} data={card} key={i} />
        )
    } else {
        // eslint-disable-next-line
        return
    }
})
```
  As well as mapping the "cards" for quotations/song lyrics:
```
const arrayLength = this.state.data.length;
   const quotebookArray = this.state.data.map((entry, i) => {
       if (i + 1 === arrayLength) {
           return (
               <div className="row-quotes hoverable last-quote" key={i}>
                   <img className="row-quotes-background" src={entry.quote_type === 'Quotation' ? quote : song} alt="" />
                   <div className="row-quotes-main-entry">
                       "{entry.quote}"
                   </div>
                   <div className="row-quotes-right-col">
                       <i onClick={() => this.setId(entry.id)} data-target="modal1" className="material-icons delete-quote modal-trigger" id={entry.id}>delete</i>
                       <div className="style-peachpuff">{entry.origin}</div>
                       <div className="when-row"><i className="material-icons">watch_later</i>{entry.when_said}</div>
                       {/* <div>{entry.significance}</div> */}
                   </div>
               </div>
           )
       } else {
           return (
               <div className="row-quotes hoverable" key={i}>
                   <img className="row-quotes-background" src={entry.quote_type === 'Quotation' ? quote : song} alt="" />
                   <div className="row-quotes-main-entry">
                       "{entry.quote}"
                   </div>
                   <div className="row-quotes-right-col">
                       <i onClick={() => this.setId(entry.id)} data-target="modal1" className="material-icons delete-quote modal-trigger" id={entry.id}>delete</i>
                       <div className="style-peachpuff">{entry.origin}</div>
                       <div className="when-row"><i className="material-icons">watch_later</i>{entry.when_said}</div>
                       {/* <div>{entry.significance}</div> */}
                   </div>
               </div>
           )
       }
   })
```
## Contributors 
* Eugene Kim: https://github.com/ekim1707 
