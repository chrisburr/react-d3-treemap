import * as React from "react";
import TreeMap from "../components/TreeMap/TreeMap";
import { data as data1 } from "../data/data";
import { data as data2 } from "../data/data.1.level";
import ContainerDimensions from "react-container-dimensions";
import { ColorModel } from "../components/TreeMap/ITreeMapProps";

import { hot } from "react-hot-loader";

class App extends React.Component<{}, { data: any }> {
  constructor(props) {
    super(props);
    this.state = {
      data: data1
    };
  }
  public render() {
    return (
      <React.Fragment>
        <ContainerDimensions>
          {({ width, height }) => (
            <TreeMap
              id="myTreeMap"
              treemapId="myTreeMap"
              width={width}
              height={400}
              data={this.state.data}
              valueUnit={"MB"}
              colorModel={ColorModel.Depth}
              animated={false}
              // disableBreadcrumb
              // hideNumberOfChildren
              // hideValue
              // bgColorRangeLow={"#007AFF"}
              // bgColorRangeHigh={"#FFF500"}
              // bgColorRangeLow={"#FFFFBF"}
              // bgColorRangeHigh={"#91CF60"}
            />
          )}
        </ContainerDimensions>
        <a onClick={() => this.setState({ data: data2 })}>Change data</a>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
