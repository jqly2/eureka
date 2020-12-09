//Notes to self: Add property counter to check for freeinum/preminum tracker; Addition counts will have take them to a spare page to upgrade/
//Warning Banner to let the user know how many properties they can view. When they logged in and logged out, user id and property ids
//This payment page will be a separate page. 


/* global google */
import React from "react";
import Script from 'react-load-script';
import cali from './geojson/CA-data-1.geojson';
import testJSON from './geojson/stanford-vj593xs7263-geojson.geojson';
import Sidebar from './sidebar.js';
import axios from 'axios';
import Toggle from 'react-toggle';
import Legend from './legend.js';
import Dropdown, {
   MenuItem
} from '@trendmicro/react-dropdown';
import Popup from './popup.js';

//Temporarily Map Layer Data
// import propData from './propData1.json';

// //jwt
// import jwtde from 'jwt-decode';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import "react-toggle/style.css";


// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateProperty } from '../actions/property-actions'
import { updateNeighborhood } from "../actions/neighborhood-actions";
import { updateToken } from "../actions/token-actions";

//importing marker icons
import blueIcon from '../img/blue-dot.png';
import redIcon from '../img/red-dot.png';
import greenIcon from '../img/green-dot.png';
import yellowIcon from '../img/yellow-dot.png';

//Trying to set a global data var so that the api and react component can connect to.
class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            togProps: false,
            togLeg: false,
            mapFilter: '2',
            props: [],
            propset: [],
            sfdata: [],
            data: [],
            dataset: [],
            token: ''
        }
        this.toggleMarks = this.toggleMarks.bind(this);
        // this.toggleSide = this.toggleSide.bind(this);
        this.onUpdateProperty = this.onUpdateProperty.bind(this);
        this.onUpdateNeighbhorhood = this.onUpdateNeighbhorhood.bind(this);
        this.onUpdateToken = this.onUpdateToken.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.colorCheck = this.colorCheck.bind(this);
        this.markColor = this.markColor.bind(this);
    }

    // toggleSide(){
    //     this.setState(prevState => ({
    //         sidebarTog: !prevState.sidebarTog
    //     }));
    // }

    onUpdateProperty(event) {
        this.props.onUpdateProperty(event);
    }

    onUpdateToken(event) {
        this.props.onUpdateToken(event);
    }

    onUpdateNeighbhorhood(event) {
        const data = event;
        this.props.onUpdateNeighbhorhood(data);
    }

    updateFilter(event) {
        this.setState({ mapFilter: event });
    }

    colorCheck(query) {
        var color;
        if (query > .75) {
            //Green
            color = "#3cba54";
        }
        else if (query <= .75 && query > .5) {
            //Yellow
            color = "#f4c20d";
        }
        else if (query > .25 && query <= .5) {
            //Blue
            color = "#4885ed";
        }
        else if (query <= .25) {
            //Red
            color = "#db3236";
        }
        return color
    }

    mapdataCheck(query) {
        var data;
        if(query === 'grey'){
            data = {
                clickable: false,
                fillColor: query,
                fillOpacity: 0,
                strokeColor: "black",
                strokeOpacity: 0,
                strokeWeight: 1
            }
        }
        else {
            data = {
                fillColor: query,
                fillOpacity: 0.5,
                strokeColor: "black",
                strokeOpacity: 0.7,
                strokeWeight: 1
            }
        }
        return data;
    }

    markColor(query){
        var color;
        if (query > .75) {
            color = greenIcon;
        }
        else if (query <= .75 && query > .5) {
            color = yellowIcon;
        }
        else if (query > .25 && query <= .5) {
            color = blueIcon;
        }
        else if (query <= .25) {
            color = redIcon;
        }
        return color
    }

    toggleMarks() {
        this.setState(prevState => ({
            togProps: !prevState.togProps
        }));

        // console.log(this.state.togProps);

        //Neighborhood slider on = remove property data
        if(this.state.togProps === true){
            this.onUpdateProperty({});
        }
        //Property slider on = remove neighborhood data
        else if(this.state.togProps === false){
            this.onUpdateNeighbhorhood({});
        }
    }

    componentDidMount() {
        const test = JSON.parse(localStorage.getItem('userData'));
        // const self = this;
        if (test !== null) {
            axios({
                method: 'post',
                url: 'https://api.eurekainv.com/auth-jwt-verify/',
                data: {
                    token: test.token
                },
                headers: {
                    // Authorization: 'Token ' + self.props.token,
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if(response.data.token === test.token){
                    // self.onUpdateUser(test);
                    console.log("token valid");
                }
                else{
                    console.log("token invalid");
                    localStorage.removeItem('userData')
                }
            })
                .catch(function (error) {
                    // console.log(error);
                    console.log(error.response);
                    if (error.response.data.non_field_errors[0] === "Signature has expired."){
                        localStorage.removeItem('userData');
                        window.location.reload();
                    }
                });
            // self.onUpdateUser(test);
        }
        window.initMap = this.initMap;
    }

    initMap() {
        var self = this;

        //Htttp request to get the backend dataset of the neighborhoods.
        // axios.post('https://api.eurekainv.com/api/login/', {
        //     origin: 'https://www.eurekainv.com/',
        //     username: 'admin',
        //     password: 'eureka123'
        // })
        //     .then(function (res) {
                //It will check the response and see if the login was successful.
                //If it was, it will go through. If it wasn't, it will not close the Modal.
                // if (res.data.token) {
                    //Get request logic
                    // self.onUpdateToken(res.data.token);




                //Change to JWT-Token Later!!!!

                
                    axios.get('https://api.eurekainv.com/individuals/',
                        {
                            headers:
                            {
                                // Authorization: 'Token ' + res.data.token,
                                Authorization: 'Token e31337203c3db0d36e9702151ca70d1947c4d69d'
                            }
                        })
                        .then(function (response) {
                            let marker;
                            let markers = [];
                            self.setState({ propset: response.data })
                            
                            //Adding Marker Clustering 
                            // console.log('property post');
                            for (var i = 0; i < self.state.propset.length; i++) {
                                marker = new google.maps.Marker({
                                    // position: { lat: Number(self.state.propset[i].latitude), lng: Number(self.state.propset[i].longitude) },
                                    position: new google.maps.LatLng(self.state.propset[i].latitude, self.state.propset[i].longitude),
                                    map: self.map,
                                    propData: self.state.propset[i],
                                    icon: self.markColor(self.state.propset[i].eureka_ratio_percentile_rank),
                                    visible: false
                                });
                                google.maps.event.addListener(marker, 'click', function () {
                                    let inst = this;
                                    axios.get('https://api.eurekainv.com/individualdetail/' + this.propData.individual_id,
                                        {
                                            headers:
                                            {
                                                // Authorization: 'Token ' + res.data.token,
                                                Authorization: 'Token e31337203c3db0d36e9702151ca70d1947c4d69d'
                                            }
                                        })
                                        .then(function (property) {
                                            inst.propData = property.data;
                                            inst.propData.color = self.colorCheck(inst.propData.eureka_ratio_percentile_rank);
                                            // console.log(inst.propData);
                                            self.onUpdateProperty(inst.propData);
                                            // const test = JSON.parse(localStorage.getItem('userData'));
                                            // const token = jwtde(test.token);

                                            // console.log(token);
                                            // console.log(propId);
                                            // console.log(self.props.token);

                                            // console.log(tokenId);
                                            //USER ANALYTIC GET METHOD TO CHECK USER CLICKS
                                            // axios({
                                            //     method: 'get',
                                            //     url: 'https://api.eurekainv.com/user_click/' + tokenId,
                                            //     headers: {
                                            //         Authorization: 'Token ' + self.props.token,
                                            //         'Content-Type': 'application/json'
                                            //     }
                                            // })
                                            // .then(function (res) {
                                            //     console.log(res.data)
                                                
                                                //USER ANALYTICS CHECK for FREE USERS 

                                            //     if(res.data.click_count < 15){
                                            //         axios({
                                            //             method: 'post',
                                            //             url: 'https://api.eurekainv.com/user_analytic/',
                                            //             data: {
                                            //                 "user_id": tokenId,
                                            //                 "property_id": inst.propData.eureka_processed_id
                                            //             },
                                            //             headers: {
                                            //                 Authorization: 'Token ' + self.props.token,
                                            //                 'Content-Type': 'application/json'
                                            //             }
                                            //         })
                                            //         .then(function(res){
                                            //             if(res.status === 201){
                                            //                     axios({
                                            //                         method: 'get',
                                            //                         url: 'https://api.eurekainv.com/unique_property_click/' + tokenId,
                                            //                         headers: {
                                            //                             Authorization: 'Token ' + self.props.token,
                                            //                             'Content-Type': 'application/json'
                                            //                         }
                                            //                     })
                                            //                         .then(function (res) {
                                            //                             console.log(res.data);
                                            //                             for (var i = 0; i < res.data.length; i++) {
                                            //                                 if (res.data[i].property_id === inst.propData.eureka_processed_id) {
                                            //                                     self.onUpdateProperty(inst.propData);
                                            //                                     break;
                                            //                                 }
                                            //                                 else if(i === res.data.length-1){
                                            //                                     console.log('Unable to display property');
                                            //                                 }
                                            //                             }
                                            //                         })
                                            //                         .catch(function (error) {
                                            //                             console.log(error.res)
                                            //                         })
                                            //             }
                                            //         })
                                            //         .catch(function(error){
                                            //             // console.log(error);
                                            //             // console.log(JSON.stringify(error));
                                            //             console.log(error.response);
                                            //         })
                                            //     }
                                            //     else{
                                            //         axios({
                                            //             method: 'get',
                                            //             url: 'https://api.eurekainv.com/unique_property_click/' + tokenId,
                                            //             headers: {
                                            //                 Authorization: 'Token ' + self.props.token,
                                            //                 'Content-Type': 'application/json'
                                            //             }
                                            //         })
                                            //             .then(function (res) {
                                            //                 console.log(res.data);
                                            //                 for (var i = 0; i < res.data.length; i++) {
                                            //                     if (res.data[i].property_id === inst.propData.eureka_processed_id) {
                                            //                         self.onUpdateProperty(inst.propData);
                                            //                         break;
                                            //                     }
                                            //                     else if (i === res.data.length - 1) {
                                            //                         console.log('Unable to display property');
                                            //                     }
                                            //                 }
                                            //             })
                                            //             .catch(function (error) {
                                            //                 console.log(error.res)
                                            //             })
                                            //     }
                                            // })
                                            // .catch(function (error) {
                                            //     console.log(error.res)
                                            // })



                                        })
                                        .catch(function (error) {
                                            console.log(error.response);
                                        });
                                });
                                markers.push(marker);
                            }
                            var markerCluster = new window.MarkerClusterer(self.map, [], 
                                {
                                    maxZoom: 17,
                                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' 
                                });

                            //Marker Toggle working with idle only. Idle means mouse shift or zoom change.
                            let mapToggle = document.getElementsByClassName('react-toggle')[0];
                            google.maps.event.addDomListener(mapToggle, 'click', function () {
                                // console.log('map toggle clicked')
                                // console.log(self.state.togProps);
                                if (self.state.togProps === true) {
                                    for (marker in markers) {
                                        markers[marker].setVisible(false);
                                        // markers[marker].setMap(null);
                                        // markerCluster.removeMarker(marker);   
                                    }
                                    markerCluster.clearMarkers();
                                    // markerCluster.repaint();
                                }
                                else if (self.state.togProps === false){
                                    for (marker in markers) {
                                        markers[marker].setVisible(true);
                                        // markers[marker].setMap(self.map);
                                        // markerCluster.addMarker(marker);   
                                    }
                                    markerCluster.addMarkers(markers);
                                    markerCluster.repaint();
                                }
                            })
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    axios.get('https://api.eurekainv.com/neighborhooddatas/',
                        {
                            headers:
                            {
                                // Authorization: 'Token ' + res.data.token,
                                Authorization: 'Token e31337203c3db0d36e9702151ca70d1947c4d69d'
                            }
                        })
                        .then(function (response) {
                            console.log(response.data);

                            console.log('neighborhood post');
                            self.setState({dataset: response.data})
                            self.map.data.setStyle(function (feature) {
                                var id = feature.h.regionid
                                var sfId = Number(feature.h.regionId)
                                var color = "grey";
                                // console.log(sfId);
                                if (feature.h.City) {
                                    for (var j = 0; j < self.state.dataset.length; j++) {
                                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 2) {
                                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                                        }
                                    }
                                    let mapdata = self.mapdataCheck(color);
                                    return mapdata
                                }
                                else {
                                    for (var i = 0; i < self.state.dataset.length; i++) {
                                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 2) {
                                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                                        }
                                    }
                                    let mapdata = self.mapdataCheck(color);
                                    return mapdata
                                }
                            });

                        })
                        // .catch(function (error) {
                        //     console.log(error.response);
                        // });


                // }
            //     else {
            //         /*
            //             Http request to get the backend dataset of the individual property data. 
            //             Working on getting the toggle working with the api call. 
            //             Problem: Trying to get the data from the axios request to higher state so that the posMarkers could function.
            //             */
            //         console.log('Not Http');
            //         self.setState({ propset: propData })
            //         let markers = [];
            //         for (var i = 0; i < self.state.propset.length; i++) {
            //             let marker;
            //             marker = new google.maps.Marker({
            //                 position: { lat: Number(self.state.propset[i].latitude), lng: Number(self.state.propset[i].longitude) },
            //                 map: self.map,
            //                 propData: self.state.propset[i],
            //                 icon: self.markColor(self.state.propset[i].eurekaratio),
            //                 visible: true
            //             });
            //             google.maps.event.addListener(marker, 'click', function () {
            //                 this.propData.color = self.colorCheck(this.propData.eurekaratio);
            //                 self.onUpdateProperty(this.propData);

            //             });
            //             markers.push(marker);

            //         }
            //         //Marker Toggle working with idle only. Idle means mouse shift or zoom change. 
            //         let mapToggle = document.getElementsByClassName('react-toggle-track')[0];
            //         google.maps.event.addDomListener(mapToggle, 'click', function () {
            //             console.log('toggle true');
            //             let marker
            //             if (self.state.togProps === true) {
            //                 for (marker in markers) {
            //                     markers[marker].setVisible(false);
            //                 }
            //             }
            //             else {
            //                 for (marker in markers) {
            //                     markers[marker].setVisible(true);
            //                 }
            //             }
            //         })
            //     }

            // })
            .catch(function (error) {
                console.log(error);
                console.log(error.response);
                console.log(error.response.data);
                //self.setState({msg: error.response.data.message});
            }); 

     
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: 37.773972, lng: -122.431297 },
            disableDefaultUI: true,
            zoomControl: true
        });

        let opt = {minZoom: 4, maxZoom: 25};
        this.map.setOptions(opt);

        // NOTE: This uses cross-domain XHR, and may not work on older browsers. Have to use command http-server . -o
        this.map.data.loadGeoJson(cali);
        this.map.data.loadGeoJson(testJSON);


        //Changing the colors of the geoshapes after being loaded. Intial loading of all the colors. 
        var bed1 = document.getElementById('bed-1');
        var bed2 = document.getElementById('bed-2');
        var bed3 = document.getElementById('bed-3');
        var bed4 = document.getElementById('bed-4');
        var bed5 = document.getElementById('bed-5');
        var bed6 = document.getElementById('bed-6');
        google.maps.event.addDomListener(bed1, 'click', function () {
            self.map.data.setStyle(function (feature) {
                var id = feature.h.regionid
                var sfId = Number(feature.h.regionId)
                var color = "grey";
                if (feature.h.City) {
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 1) {
                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
                else {
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 1) {
                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
            });
        })
        google.maps.event.addDomListener(bed2, 'click', function () {
            self.map.data.setStyle(function (feature) {
                var id = feature.h.regionid
                var sfId = Number(feature.h.regionId)
                var color = "grey";
                if (feature.h.City) {
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 2) {
                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
                else {
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 2) {
                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
            });
        })
        google.maps.event.addDomListener(bed3, 'click', function () {
            self.map.data.setStyle(function (feature) {
                var id = feature.h.regionid
                var sfId = Number(feature.h.regionId)
                var color = "grey";
                if (feature.h.City) {
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 3) {
                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
                else {
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 3) {
                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
            });
        })
        google.maps.event.addDomListener(bed4, 'click', function () {
            self.map.data.setStyle(function (feature) {
                var id = feature.h.regionid
                var sfId = Number(feature.h.regionId)
                var color = "grey";
                if (feature.h.City) {
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 4) {
                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
                else {
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 4) {
                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
            });
        })
        google.maps.event.addDomListener(bed5, 'click', function () {
            self.map.data.setStyle(function (feature) {
                var id = feature.h.regionid
                var sfId = Number(feature.h.regionId)
                var color = "grey";
                if (feature.h.City) {
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 5) {
                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
                else {
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 5) {
                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
            });
        })
        google.maps.event.addDomListener(bed6, 'click', function () {
            self.map.data.setStyle(function (feature) {
                var id = feature.h.regionid
                var sfId = Number(feature.h.regionId)
                var color = "grey";
                if (feature.h.City) {
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === sfId && self.state.dataset[j].bedroom_count === 6) {
                            color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
                else {
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === id && self.state.dataset[i].bedroom_count === 6) {
                            color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                        }
                    }
                    let mapdata = self.mapdataCheck(color);
                    return mapdata
                }
            });
        })


        
        
        //A listener for when the user clicks on a individual shape on the map, packages 
        //the selected region into data.
        this.map.data.addListener('click', function (event) {
            this.data = event.feature.h;
            if (self.state.togProps === false){
            // //    console.log(self.state.mapFilter);
            //     console.log(this.data)
                // console.log(self.state.dataset);
                if(this.data.City){
                    for (var j = 0; j < self.state.dataset.length; j++) {
                        if (self.state.dataset[j].SF_neighborhood_id === Number(this.data.regionId) && self.state.dataset[j].bedroom_count.toString() === self.state.mapFilter) {
                            self.state.dataset[j].color = self.colorCheck(self.state.dataset[j].eureka_ratio_percentile_rank);
                            self.onUpdateNeighbhorhood(self.state.dataset[j]);
                        }
                    }    
                }
                else{
                    for (var i = 0; i < self.state.dataset.length; i++) {
                        if (self.state.dataset[i].regionid === this.data.regionid && self.state.dataset[i].bedroom_count.toString() === self.state.mapFilter) {
                            // console.log('hello');
                            self.state.dataset[i].color = self.colorCheck(self.state.dataset[i].eureka_ratio_percentile_rank);
                            self.onUpdateNeighbhorhood(self.state.dataset[i]);
                        }
                    }
                }
            }
        });



//      Changing the color of the neighborhood shape to signify current mouseover. 
//         this.map.data.addListener('mouseover', function (event) {
//             this.map.data.overrideStyle(event.feature, { fillColor: "white" });
//         });

// //        Temporarily usage to get the color back to the original shape. Inefficent and looking to improve later.
//         this.map.data.addListener('mouseout', function(event){
//             var id = event.feature.getProperty('regionId');
//             var color = "grey";
//             for (var i = 0; i < self.state.dataset.length; i++) {
//                 if (self.state.dataset[i].regionid.toString() === id && self.state.dataset[i].bedroom_count.toString() === self.state.mapFilter) {
//                     color = self.colorCheck(self.state.dataset[i].eureka_ratio);
//                 }
//             }
//             this.map.data.overrideStyle(event.feature, { fillColor: color} );
//         });

        //The search bar for google maps

        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var legend = document.getElementById('legend');
        var eurekaRatio = document.getElementById('titleRank');
        var legendRanks = document.getElementById('legendRanks');

        eurekaRatio.title = 'Eureka’s private metric that easily tells if a property has positive or negative cash flow.' 
        legendRanks.title = 'Properties ranked in 4 classes based on rental return on investment (ROI) predictions. Eureka uses standard distribution to rank rental ROI. Each class is a quartile of the standard distribution.'

        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);

        this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

        // google.maps.event.addDomListener(legend, 'mouseover', function (event) {
        //     legWindow.open(self.map, legend);
        // });

        // google.maps.event.addDomListener(legend, 'mouseout', function (event) {
        //     legWindow.close(self.map, legend);
        // });

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', this.map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        // var marker = new google.maps.Marker({
        //     map: this.map,
        //     anchorPoint: new google.maps.Point(0, -29)
        // });

        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            // marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                self.map.fitBounds(place.geometry.viewport);
            } else {
                self.map.setCenter(place.geometry.location);
                self.map.setZoom(17);  // Why 17? Because it looks good.
            }
            // marker.setPosition(place.geometry.location);
            // marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    ((place.address_components[0] && place.address_components[0].short_name) || ''),
                    ((place.address_components[1] && place.address_components[1].short_name) || ''),
                    ((place.address_components[2] && place.address_components[2].short_name) || '')
                ].join(' ');
            }

            infowindowContent.children['place-icon'].src = place.icon;
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-address'].textContent = address;
            infowindow.open(this.map);
        });

 
        //SETUP to get the Property Data
        // if(self.props.token != null){
        //     axios.get('https://api.eurekainv.com/individuals',
        //         {
        //             headers:
        //             {
        //                 Authorization: 'Token ' + self.props.token,
        //             }
        //         })
        //         .then(function (response) {
        //             console.log('all property data');
        //             console.log(response.data);
                    
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }

      
    }

    render() {

        return (
            <div className="App-Map">
                <Script
                    url="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"
                    onCreate={this.handleScriptCreate.bind(this)}
                    onError={this.handleScriptError.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                /> 
                <div className="pac-card" id="pac-card">
                    <div id="pac-container">
                        <form>
                            <input id="pac-input" type="text" placeholder="Enter a location" />
                        </form>
                        <div className="mapToggle">
                            <p>Neighborhood</p>
                                <Toggle
                                    defaultChecked={this.state.togProps}
                                    icons={false}
                                    onChange={this.toggleMarks}
                                />
                            <p>Properties</p>
                        </div>
                        <div id="bedsCtrl">
                            <p>Beds:</p>
                            <Dropdown onSelect={this.updateFilter}>
                                <Dropdown.Toggle title={this.state.mapFilter} />
                                <Dropdown.Menu>
                                    <MenuItem id="bed-1" eventKey="1">1</MenuItem>
                                    <MenuItem id="bed-2" eventKey="2">2</MenuItem>
                                    <MenuItem id="bed-3" eventKey="3">3</MenuItem>
                                    <MenuItem id="bed-4" eventKey="4">4</MenuItem>
                                    <MenuItem id="bed-5" eventKey="5">5</MenuItem>
                                    <MenuItem id="bed-6" eventKey="6">6</MenuItem>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                   <Legend />
                <div className="App-body" id="map" ref="map"></div>
                    <div id="infowindow-content">
                        <img src="" width="16" height="16" id="place-icon" alt="" />
                        <span id="place-name"  className="title"></span><br />
                        <span id="place-address"></span>
                </div>
                <Sidebar
                    neighborhood={this.props.neighborhood}
                    property={this.props.property}
                    checkData={this.state.togProps}
                    checkTog={this.state.sidebarTog}
                />
                <Popup 
                    token={this.props.token}
                    />                
            </div>
        );
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
        this.initMap();
    }
}

const mapStateToProps = (state) => {
    return {
        neighborhood: state.neighborhood,
        property: state.property,
        token: state.token
    }
};

const mapActionsToProps = {
    onUpdateNeighbhorhood: updateNeighborhood,
    onUpdateProperty: updateProperty,
    onUpdateToken: updateToken
};

export default connect(mapStateToProps, mapActionsToProps)(Map);




// WEBPACK FOOTER //
// ./src/components/map.js