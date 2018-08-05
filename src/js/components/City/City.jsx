import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { weatherData } = this.props;
        if (weatherData) {
            console.log(weatherData);
            return (
                <div className='col-12 col-md-6 mb-4'>
                    <div className='card border-primary'>
                        <div className='card-header text-primary alert alert-primary'> City Information</div>
                        <div className='card-body'>
                            <h4 className='text-center'>
                                <img id='weatherImg' src={'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'} />
                                {weatherData.name}
                            </h4>
                            <div className='text-center font-weight-light'>
                                <br />
                                {`Lat/Lon: ${weatherData.coord.lat},${weatherData.coord.lon}`}
                            </div>
                            <hr />
                            <div className='row'>
                                <div className="col-lg-4 text-center">Temprature (F) <br />{weatherData.main.temp}</div>
                                <div className="col-lg-4 text-center">Pressure <br />{weatherData.main.pressure}</div>
                                <div className="col-lg-4 text-center">Humidity <br />{weatherData.main.humidity}</div>
                            </div>
                            <div className='row mt-10'>
                                <div className="col-lg-4 text-center">Lowest Temp (F)<br />{weatherData.main.temp_min}</div>
                                <div className="col-lg-4 text-center">Highest Temp (F)<br />{weatherData.main.temp_max}</div>
                                <div className="col-lg-4 text-center">Wind Speed <br />{weatherData.wind.speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <div className='col-12 col-md-6 mb-4'>
                <div className='card border-primary'>
                    <div className='card-header text-primary alert alert-primary'> City Information</div>
                    <div className='card-body'>
                        <h5 className='text-center'>
                            <br />
                        </h5>
                        <hr />
                        <div className='row'>
                            <div className="col-lg-4 text-center">Temprature (F) <br /></div>
                            <div className="col-lg-4 text-center">Pressure <br /></div>
                            <div className="col-md-4 text-center">Humidity <br /></div>
                        </div>
                        <div className='row mt-10'>
                            <div className="col-lg-4 text-center">Lowest Temp (F)<br /></div>
                            <div className="col-lg-4 text-center">Highest Temp (F)<br /></div>
                            <div className="col-lg-4 text-center">Wind Speed <br /></div>
                        </div>

                    </div>
                </div>
            </div>
        }
    }
}