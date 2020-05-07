import React from "react";

import {Inject, ScheduleComponent, Day, Week, Month} from "@syncfusion/ej2-react-schedule";

class Calendar extends React.Component {

    styleForDiv = () => {
       return {
           padding: "100px",
           marginLeft: "20px"


       }
    }

    render() {
        return (
            <div style={this.styleForDiv()}><ScheduleComponent>
                <Inject services={[Day, Week, Month]}/>
            </ScheduleComponent></div>)
    }

}

export default Calendar