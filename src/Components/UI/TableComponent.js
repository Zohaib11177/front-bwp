import React, { Component } from "react";

class TableComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <table className={`table-main  ${this.props.classNameTable}`}>
                    <thead className={this.props.className}>
                        <tr>
                            {this.props.thead
                                ? this.props.thead.map((data) => {
                                      return <th scope="col">{data}</th>;
                                  })
                                : null}
                        </tr>
                    </thead>

                    <tbody>{this.props.tbody}</tbody>
                </table>
                <div>{this.props.noData}</div>
            </React.Fragment>
        );
    }
}

export default TableComponent;
