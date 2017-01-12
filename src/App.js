import React from 'react';

const App = () => {
    return (<div><Header/><BouncingDownArrow/></div>);
}

const Header = () =>  {
   return <header > <h1></h1> </header>
}

const BouncingDownArrow = () => {
  return (
      <div id="down-arrow" className="bounce">
             <i  style={{fontSize:"30px"}} className="fa fa-angle-double-down"></i>
      </div>
         );
}

class TimelineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentWillMount() {
    fetch('data/timeline.json')
      .then(res => res.json())
      .then(timeline => {const events=timeline.map(event => event);
        console.info("Timeline :",events);
        this.setState({events:events})
        //this.state.events=events;
      })
  }

  render(){
    if(this.state.events.length === 0){
      console.log("Data is not loaded , returning null");   return null;
    }
    console.log("Inside render method : ");
    this.state.events.forEach(function(x){console.log("Event "+x.event)})

    return (
      <div>
        { this.state.events.map(function(event,index,events){
          let image_file_path='../images/timeline-icons/'+event.icon_file_name;
          let icon_class="icon-yellow";
          if(index %2 == 0){
            icon_class="icon-green";
          }
          let image_class="cd-timeline-img"+" "+icon_class;
          return (
            <div key={index} className="cd-timeline-block">

              <div className={image_class}>
                <img src={image_file_path} alt={"Picture"}/>
              </div>
              <div className="cd-timeline-content">
                  <h2>{event.heading}</h2>
                  <p>{event.event}</p>
                  <span className="cd-date">{event.date}</span>
              </div>

            </div>
                  );
                })
        }
      </div>
    );
  }
}

export {App,TimelineItem}
