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
