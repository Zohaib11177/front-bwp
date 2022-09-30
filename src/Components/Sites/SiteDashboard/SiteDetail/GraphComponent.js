import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import UpTimeReportAction from 'Redux/V1/Sites/UpTimeReport/UpTimeReportAction';
import TemplateFull from 'Templates/TemplateFull';

class GraphComponent extends Component {
    componentDidMount() {
        this.props.dispatch(
            UpTimeReportAction.upTimeReportGet(this.props.identity)
        );
    }
    render() {
        const data = [];
        const categories = [];
        for (const [key, value] of Object.entries(this.props.data)) {
            data.push(value);
            categories.push(key);
        }
        const series = [
            {
                name: 'Up Time',
                data,
            },
        ];
        const options = {
            colors: ['#1665d8'],
            xaxis: {
                categories,
            },
            chart: {
                toolbar: {
                    tools: {
                        download: false,
                        zoom: false,
                    },
                },
            },
        };
        return (
            <React.Fragment>
                <div className="sftp-responsive-main">
                    <div className="page-header">Up Time Report </div>
                    <div className="box">
                        <TemplateFull>
                            <Chart
                                options={options}
                                series={series}
                                type={this.props.type}
                                height={this.props.height}
                                className={
                                    this.props.className
                                        ? this.props.className
                                        : 'sites-chart'
                                }
                            />
                        </TemplateFull>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GraphComponent;
