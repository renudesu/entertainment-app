import React from 'react';
import '../App.css';

import staticJson from '../Json/staticJson.json';
import carouselJson from '../Json/carouselJson.json';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import disney from '../assets/images/disney.jpg';


export default class MovieComponent extends React.Component {

    render() {

        const data = staticJson.map((value) => {
            return <img className="bg-img" src={value.imageURL} alt="seriesimage" />
        })
        const episodeData = carouselJson.map((item, id) => {
            return <div key={id}>
                <img className="rounded" src={item.imageURL} alt="" width="200" height="100"></img>
                <span className="bottom-left"><i className="fa fa-play text mr-5"></i>{item.Episode}</span>

            </div>
        })
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id="#navbarNav"></span>
                    </button>
                    <a className="navbar-brand " href="#top"><img src={disney} width="100" height="50" alt="" /></a>
                    <div className="collapse navbar-collapse " id="#navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href="/" >Tv</a>
                            </li>
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href="/" >Movies</a>
                            </li>
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href="/" >Sports</a>
                            </li>
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href="/" >News</a>
                            </li>
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href="/" >Premium</a>
                            </li>
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href="/" >Disney+ </a>
                                <small className="new">NEW</small>
                            </li>
                            <li className="nav-item active ">
                                <a className="nav-link " href="/" ><p className="kids">KIDS</p></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <div className="textbox mt-0 input">
                                    <input type="search" placeholder="search" ></input>
                                    <i className="fa fa-search mr-2 i" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="btn btn-primary  subscribe-btn mr-2">SUBSCRIBE</button>
                            </li>

                            <li className="nav-item nactive" >
                                <i className="fa fa-user-circle user-icon"></i>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row ">

                    <div className="col-md-5 data mt-5  content text-left ml-5 ">
                        <h2 >Excuse Me Maadam</h2>
                        <p>1 Season.8 Episodes.Comedy.15+.star Bharat</p>
                        <p >A 'Woofy' narrator presents the quintessential misadventures of a
                        middle-aged married man caught between his suspicious wife and his drop-dead gorgeou boss.
                        </p>
                        <span><i className="fa fa-play text mr-5"></i></span><span className="text">Watch Latest Episode</span>
                        <div className="ml-5"><small>S1 E823 sep 2020</small></div>
                    </div>
                    <div className="col-md-5 ml-5">
                        {data}
                    </div>
                </div>
                <div className="row text">
                    <div className="col-md-12 ml-5">
                        <p className="text-left ">Episodes</p>
                        <Carousel responsive={responsive}>
                            {episodeData}
                        </Carousel>
                    </div>
                </div>
            </>)
    }
}