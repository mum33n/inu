import RoadItem from "./RoadItem";

export default function Roadmap(params) {
    return(<div id='roadmap' className="text-slate-100 pt-10 pb-20 px-10">
        <h1 className="text-3xl text-center text-3xl md:text-5xl font-bold">ROADMAP</h1>
        <div className="slick">
        <div className="container1">
                        <div className="timeline">
                          <ul> 
                            <li className="wow fadeInUp">
                              <div className="timeline-content">
                                <p className="date">Q1, 2022</p> 
                                <ul className="road-lists">
                                <RoadItem checked title={'Algo inu ($inu) 5.000.000.000 Max supply created.'}/>
                                <RoadItem checked title={'5% of the supply airdropped to 5000 community members'}/>
                                <RoadItem checked title={'40% token supply locked for a year 2.000.000.000'}/>
                                <RoadItem checked title={'Verify Algoinu'}/>
                                <RoadItem checked title={`Create website`}/>
                                <RoadItem checked title={'weekly rewards for top holders'}/>
                                </ul>
                              </div>
                            </li>
                            <li className=" wow fadeInUp">
                              <div className="timeline-content">
                                <p className="date">Q2, 2022</p>
                                <ul className="road-lists">
                                    <RoadItem title={'List on coinmarketcap and coingecko'}/>
                                    <RoadItem title={'Launch algoinu Nft'}/>
                                    <RoadItem title={'Stake Nft'}/>
                                </ul> 
                              </div>
                            </li>
                            <li className="wow fadeInUp">
                              <div className="timeline-content">
                                <p className="date">Q3, 2022</p>
                                <ul className="road-lists">
                                    <RoadItem title={'List on global exchange'}/>
                                </ul> 
                              </div>
                            </li>
                            <li className="wow fadeInUp">
                              <div className="timeline-content">
                                <p className="date">Q4, 2022</p>
                                <ul className="road-lists">
                                    <RoadItem title={'Coming soon'}/>
                                </ul> 
                              </div>
                            </li>
                        
                          </ul>
                        </div>
                </div>
        </div>
           
    </div>)
};