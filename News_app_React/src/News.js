import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';




export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }


  toUpper = (str) => {
    return [str.split('')[0].toUpperCase(), str.split('').slice(1, str.split('').length).join("")].join("")
  }


  articles = [

    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Charles Ventura, Celina Tebor and John Bacon, USA TODAY",
      "title": "Civilian evacuation begins in Sumy; Ukraine warns refugees could be forced to Russia: Live updates - USA TODAY",
      "description": "The first civilian evacuation route from the Ukrainian city of Sumy was opened Tuesday. Live updates.",
      "url": "https://www.usatoday.com/story/news/politics/2022/03/08/ukraine-russia-invasion-live-updates/9419920002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/03/08/USAT/dfe91ad9-46f4-431c-96c5-185a05b917e2-AP_Russia_Ukraine_War_Day_In_Photos.jpg?auto=webp&crop=6000,3375,x0,y559&format=pjpg&width=1200",
      "publishedAt": "2022-03-08T12:22:30Z",
      "content": "The first safe corridor intended to allow civilians to escape war-torn Ukrainian cities opened Tuesday, a significant move met with skepticism after similar efforts failed as the number of people fle… [+7381 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Ukraine war: UK can and will do more for refugees - minister - BBC.com",
      "description": "The processing of visas for refugees from Ukraine needs to be quicker, says the defence secretary.",
      "url": "https://www.bbc.com/news/uk-60655788",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1440E/production/_123585928_gettyimages-1239004297.jpg",
      "publishedAt": "2022-03-08T11:50:54Z",
      "content": "By Joseph LeeBBC News\r\nMedia caption, Watch: Ben Wallace says visa process for refugees coming from Ukraine could be quicker\r\nThe UK needs to speed up the processing of visas for refugees fleeing the… [+6682 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Carmakers face soaring metal costs with Russian supplies at risk - Reuters.com",
      "description": "Saving up for a new ride? Better start putting more cash aside.",
      "url": "https://www.reuters.com/business/autos-transportation/carmakers-face-soaring-metal-costs-with-russian-supplies-risk-2022-03-08/",
      "urlToImage": "https://www.reuters.com/resizer/_t-wTpbX3fZFmextYdCHHHMpNYQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZVZI7N7PNNJ67FAWEM36GIJOOE.jpg",
      "publishedAt": "2022-03-08T11:49:00Z",
      "content": "LONDON, March 8 (Reuters) - Saving up for a new ride? Better start putting more cash aside.\r\nRussia's invasion of Ukraine is ramping up the price of metals used in cars, from aluminium in the bodywor… [+6536 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Will Horner",
      "title": "Oil Jumps, Stock Futures Rise After Dow Enters Correction - The Wall Street Journal",
      "description": "S&P 500 is on course to recoup some losses, while bond yields are rising",
      "url": "https://www.wsj.com/articles/global-stocks-markets-dow-update-03-08-2022-11646729084",
      "urlToImage": "https://images.wsj.net/im-500091/social",
      "publishedAt": "2022-03-08T11:23:00Z",
      "content": "Stock futures crept higher, while bond yields and oil prices rose, a day after fears of a recession pushed the Dow Jones Industrial Average into a correction.\r\nFutures tied to the S&amp;P 500 edged u… [+225 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "YURAS KARMANAU",
      "title": "People flee embattled Ukrainian cities along safe corridors - Yahoo News",
      "description": "Buses carried civilians out of one embattled Ukrainian city Tuesday and supplies toward another, as officials tried to move people away from a Russian...",
      "url": "https://news.yahoo.com/russia-dangles-prospect-safe-corridors-051543354.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ymo6n7e_ZOEeRGPZb27Ynw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/chb_sjofXU28FLdGbwoAIg--~B/aD0zMzMzO3c9NTAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/30690afd61a57c050d3bb61d5d78c22e",
      "publishedAt": "2022-03-08T11:20:42Z",
      "content": "LVIV, Ukraine (AP) Buses carried civilians out of one embattled Ukrainian city Tuesday and supplies toward another, as officials tried to move people away from a Russian onslaught and ease the dire h… [+6508 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Matt Novak",
      "title": "Viral Photo of Queen Elizabeth Shaking Trudeau's Hand is Fake - Gizmodo",
      "description": "There's even a conspiracy theory claiming Queen Elizabeth II actually died last year.",
      "url": "https://gizmodo.com/that-viral-photo-of-queen-elizabeth-shaking-justin-trud-1848620374",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ced50739dd5e06d27a5779dd7ecbe9bc.jpg",
      "publishedAt": "2022-03-08T11:00:00Z",
      "content": "Have you seen that photo of Queen Elizabeth II with her head hanging abnormally low as she shakes the hand of Canadian Prime Minister Justin Trudeau? Its been going viral over the past day on platfor… [+2642 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Matt Clinch",
      "title": "Shell to stop all Russian oil and gas purchases, apologizes for buying shipment after Ukraine invasion - CNBC",
      "description": "Oil major Shell on Tuesday apologized for a buying a heavily discounted consignment of Russian oil last week.",
      "url": "https://www.cnbc.com/2022/03/08/shell-apologizes-for-buying-russian-oil-announces-phased-withdrawal.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106918766-1627562033639-gettyimages-1262803739-ab9i3591_2020073024407303.jpeg?v=1641544861",
      "publishedAt": "2022-03-08T10:46:35Z",
      "content": "Oil major Shell on Tuesday apologized for a buying a heavily discounted consignment of Russian oil and announced it was withdrawing from its involvement in all Russian hydrocarbons.\r\n\"As an immediate… [+2069 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GamesRadar+"
      },
      "author": "Lauren Milici",
      "title": "God of War TV series headed to Amazon Prime Video - Gamesradar",
      "description": "Sony and Amazon Studios will likely co-produce the new video game adaptation",
      "url": "https://www.gamesradar.com/god-of-war-tv-series-amazon-prime/",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/VhMjP7HpDFmqWyRAxFWXbe-1200-80.jpg",
      "publishedAt": "2022-03-08T10:17:08Z",
      "content": "A live-action adaptation of PlayStation's God of War franchise is headed to television. \r\nAccording to Deadline, Amazon Prime Video is in negotiations for a new series based on the popular action-adv… [+1519 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Space Junk Just Crashed Into the Far Side of the Moon at 5,800 MPH - SciTechDaily",
      "description": "Observers have been tracking a chunk of space junk, waiting for it to strike the Moon. It should’ve hit the far side of the Moon, and hopefully, orbiters will have images of the impact site, though that might take a while. The origins of the junk are in dispu…",
      "url": "https://scitechdaily.com/space-junk-just-crashed-into-the-far-side-of-the-moon-at-5800-mph/",
      "urlToImage": "https://scitechdaily.com/images/Rocket-Booster-Crash-Moon.gif",
      "publishedAt": "2022-03-08T09:37:36Z",
      "content": "Artist’s animation of a rocket booster crashing into the moon.\r\nObservers have been tracking a chunk of space junk, waiting for it to strike the Moon. It should’ve hit the far side of the Moon, and h… [+8669 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Umar Shakir",
      "title": "Apple’s “Peek Performance” March event: What to expect - The Verge",
      "description": "Apple is likely announcing a new iPhone SE refresh with 5G but might have new Mac updates up its sleeve. Don’t be surprised to see an updated iPad Air and maybe even a Mac mini upgrade.",
      "url": "https://www.theverge.com/2022/3/6/22960325/apple-march-2022-event-iphone-se-peek-performance-rumors-announcements",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/vtpWggATi5DNEXchk_aIpNCB8pw=/0x51:1198x678/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23289151/Screen_Shot_2022_03_02_at_12.03.10_PM.jpg",
      "publishedAt": "2022-03-08T09:33:45Z",
      "content": "New iPhone SE with 5G, upgraded iPad Air, and maybe a Mac update\r\nImage: Apple\r\nApple is poised for its first livestream event of 2022 on Tuesday, March 8th at 1PM ET. The company sent out press invi… [+7805 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Jordan Mendoza, USA TODAY",
      "title": "Gas prices are now the most expensive in US history, breaking record from 2008 - USA TODAY",
      "description": "The average price for a regular gallon of gas in the US is now $4.17, according to AAA, breaking the record previously set in July 2008.",
      "url": "https://www.usatoday.com/story/money/2022/03/08/gas-most-expensive-us-history/9404939002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/03/07/USAT/9b4fe8ea-12a8-467f-a1e4-bb285f76bef8-Shell_gas_LA.jpg?auto=webp&crop=5183,2916,x0,y263&format=pjpg&width=1200",
      "publishedAt": "2022-03-08T08:57:24Z",
      "content": "After days of dramatically rising gas prices in wake of Russia's invasion of Ukraine, the national average for a gallon of gas is now the highest in United States history, breaking the record that st… [+3497 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "UK says it will back Poland if decides to send jets to Ukraine - Reuters UK",
      "description": "British defence minister Ben Wallace said on Tuesday Britain would support Poland if it decided to provide Ukraine with fighter jets, but warned that doing so might have direct consequences for Poland.",
      "url": "https://www.reuters.com/world/uk/uk-says-it-will-back-poland-if-decides-sends-jets-ukraine-2022-03-08/",
      "urlToImage": "https://www.reuters.com/resizer/s_zBesRepFsloxk2pllGZ0wBeys=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T2PXLUKF3NMTRL5SDERULUHP3Y.jpg",
      "publishedAt": "2022-03-08T07:54:00Z",
      "content": "LONDON, March 8 (Reuters) - British defence minister Ben Wallace said on Tuesday Britain would support Poland if it decided to provide Ukraine with fighter jets, but warned that doing so might have d… [+983 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Susannah Cullinane, CNN",
      "title": "Potential suspects detained after Iowa high school shooting left 1 teen dead and 2 others in critical condition - CNN",
      "description": "Two teenagers are hospitalized in critical condition following a shooting outside a high school in Des Moines, Iowa, Monday that left one other teen dead.",
      "url": "https://www.cnn.com/2022/03/08/us/des-moines-iowa-school-shooting-tuesday/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220307235331-02-east-high-school-shooting-des-moines-0307-super-tease.jpg",
      "publishedAt": "2022-03-08T07:23:00Z",
      "content": "(CNN)Two teenagers are hospitalized in critical condition following a shooting outside a high school in Des Moines, Iowa, Monday that left one other teen dead.\r\nPotential suspects have been detained,… [+3000 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Nadia Kounang, CNN",
      "title": "Study links even mild Covid-19 to changes in the brain - CNN",
      "description": "People who have even a mild case of Covid-19 may have accelerated aging of the brain and other changes to it, according to a new study.",
      "url": "https://www.cnn.com/2022/03/07/health/covid-brain-changes-study-wellness/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220307120918-covid-19-brain-changes-study-super-tease.jpg",
      "publishedAt": "2022-03-08T07:04:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "KATU"
      },
      "author": "KATU Staff",
      "title": "1 climber dead, 1 critically injured after 2-day rescue mission on Mount Hood - KATU",
      "description": "One person died, and another person was in critical condition Monday night after falling on Mount Hood, according to the Clackamas County Sheriff&rsquo;s Office. Just after 5 p. m. Sunday, the two climbers fell about 200 feet in the Leuthold Couloir area of t…",
      "url": "https://katu.com/news/local/search-and-rescue-underway-on-mount-hood",
      "urlToImage": "https://katu.com/resources/media/f96c1a9d-cfe5-4976-8890-bc09ef19689c-large16x9_thumb_3223.png?1646703048447",
      "publishedAt": "2022-03-08T06:56:15Z",
      "content": null
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Emily Yahr",
      "title": "ACM Awards 2022: Best and worst moments, complete list of winners - The Washington Post",
      "description": "Dolly Parton served up some star power as co-host of the ACM Awards, which took a big leap as the first streaming-only major award show on Monday night.",
      "url": "https://www.washingtonpost.com/arts-entertainment/2022/03/08/acm-awards-2022-best-worst-moments-winners/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YCGA7BU6RMI6ZFBYEVLQTNWN3Q.jpg&w=1440",
      "publishedAt": "2022-03-08T06:19:18Z",
      "content": "While some have speculated that streaming may be one way to save award shows, given that their TV ratings have plummeted across the board, time will tell there were certainly some growing pains as th… [+9783 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Tyler Olson",
      "title": "Energy industry swipes back at Psaki 'red herring' comment on oil and gas leases - Fox Business",
      "description": "Energy industry representatives said the reason so many drilling permits sit unused is more complicated than White House Press Secretary Jen Psaki suggested.",
      "url": "https://www.foxbusiness.com/politics/energy-industry-psaki-oil-and-gas-leases-ceraweek",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/02/0/0/GettyImages-1238694134.jpg?ve=1&tl=1",
      "publishedAt": "2022-03-08T05:46:55Z",
      "content": "Energy industry representatives pushed back on a comment from White House Press Secretary Jen Psaki Monday regarding unused oil and gas leases, accusing the Biden administration spokesperson of misle… [+4704 chars]"
    }

  ]

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.toUpper(this.props.category)}-News-Fetch`;
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e5c5ebcf2a04cf6a744accdd767034a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false

    })
  }

   handleperclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e5c5ebcf2a04cf6a744accdd767034a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json()

    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false

    })

  }

  handlenextclick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e5c5ebcf2a04cf6a744accdd767034a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });

      let data = await fetch(url);
      let parseddata = await data.json()


      this.setState({

        articles: parseddata.articles,
        loading: false

      })

    }

  }

  // fetchMoreData = async () => {

  // this.setState({page:this.state.page+1})

  //const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e5c5ebcf2a04cf6a744accdd767034a&page=1&pageSize=${this.props.pageSize}`;
  //this.setState({ loading: true });
  //let data = await fetch(url);
  //let parseddata = await data.json()
  //this.setState({
  //articles: this.state.articles.concat(parseddata.articles),
  //totalResults: parseddata.totalResults,
  //loading: false

  //})
  //};

  render() {
    return (

      <>

        <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News-Fetch Top {this.toUpper(this.props.category)} Headlines </h2>
        {/*{this.state.loading&&<Spinner />}*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          // loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              })}

            </div>
            <div className="container d-flex justify-content-between">
              <button type="button" onClick={this.handleperclick } class="btn btn-secondary ">＜Previous</button>
              <button type="button" onClick={ this.handlenextclick } class="btn btn-secondary">Next＞</button>
            </div>
          </div>
        </InfiniteScroll>

      <br />
      <br />


      </>



    )
  }
}

export default News
